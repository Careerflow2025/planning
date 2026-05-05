"use client";

import { useCallback, useState } from "react";

/**
 * Consume the POST + SSE stream from /api/assessments/generate.
 *
 * The endpoint sends events of the form:
 *   event: status   data: {"status": "generating", "message": "..."}
 *   event: complete data: {"status": "draft", ...}
 *   event: error    data: {"error": "..."}
 */

interface CompletePayload {
  status: string;
  document: unknown;
  quality_scores: { overall_score?: number };
  version: number;
  credits_used: number;
}

export interface GenerationCallbacks {
  onStatus?: (message: string) => void;
  onComplete?: (payload: CompletePayload) => void;
  onError?: (message: string) => void;
}

export interface GenerationState {
  generating: boolean;
  message: string;
  error: string | null;
}

export function useAssessmentGeneration() {
  const [state, setState] = useState<GenerationState>({
    generating: false,
    message: "",
    error: null,
  });

  const start = useCallback(async (
    projectAssessmentId: string,
    cb: GenerationCallbacks = {},
  ) => {
    setState({ generating: true, message: "Starting...", error: null });

    try {
      const response = await fetch("/api/assessments/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project_assessment_id: projectAssessmentId }),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        const msg = errBody?.error || `HTTP ${response.status}`;
        setState({ generating: false, message: "", error: msg });
        cb.onError?.(msg);
        return;
      }

      const reader = response.body?.getReader();
      if (!reader) {
        const msg = "No response stream";
        setState({ generating: false, message: "", error: msg });
        cb.onError?.(msg);
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      // SSE frame parser: split on blank lines, extract `event:` and `data:`
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let frameEnd = buffer.indexOf("\n\n");
        while (frameEnd !== -1) {
          const frame = buffer.slice(0, frameEnd);
          buffer = buffer.slice(frameEnd + 2);

          let eventName = "message";
          let dataStr = "";
          for (const line of frame.split("\n")) {
            if (line.startsWith("event:")) eventName = line.slice(6).trim();
            else if (line.startsWith("data:")) dataStr += line.slice(5).trim();
          }

          if (dataStr) {
            try {
              const parsed = JSON.parse(dataStr);
              if (eventName === "status") {
                const msg = parsed.message ?? "Working...";
                setState((s) => ({ ...s, message: msg }));
                cb.onStatus?.(msg);
              } else if (eventName === "complete") {
                setState({ generating: false, message: "Done", error: null });
                cb.onComplete?.(parsed as CompletePayload);
              } else if (eventName === "error") {
                const msg = parsed.error ?? "Generation failed";
                setState({ generating: false, message: "", error: msg });
                cb.onError?.(msg);
              }
            } catch {
              /* ignore unparsable frames */
            }
          }

          frameEnd = buffer.indexOf("\n\n");
        }
      }

      // If we exit the loop without seeing a `complete` or `error` event, treat as success.
      setState((s) => (s.generating ? { ...s, generating: false } : s));
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error";
      setState({ generating: false, message: "", error: msg });
      cb.onError?.(msg);
    }
  }, []);

  const reset = useCallback(() => {
    setState({ generating: false, message: "", error: null });
  }, []);

  return { ...state, start, reset };
}
