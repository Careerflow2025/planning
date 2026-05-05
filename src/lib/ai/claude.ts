import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export type ClaudeModel = 'claude-sonnet-4-6' | 'claude-haiku-4-5-20251001' | 'claude-opus-4-6';

interface GenerateOptions {
  systemPrompt: string;
  userPrompt: string;
  model?: ClaudeModel;
  maxTokens?: number;
  temperature?: number;
}

export async function generateText({
  systemPrompt,
  userPrompt,
  model = 'claude-sonnet-4-6',
  maxTokens = 4096,
  temperature = 0.3,
}: GenerateOptions): Promise<string> {
  const message = await anthropic.messages.create({
    model,
    max_tokens: maxTokens,
    temperature,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });

  const textBlock = message.content.find((b) => b.type === 'text');
  return textBlock?.text ?? '';
}

interface StreamOptions extends GenerateOptions {
  onChunk: (chunk: string) => void;
}

export async function streamText({
  systemPrompt,
  userPrompt,
  model = 'claude-sonnet-4-6',
  maxTokens = 4096,
  temperature = 0.3,
  onChunk,
}: StreamOptions): Promise<string> {
  const stream = anthropic.messages.stream({
    model,
    max_tokens: maxTokens,
    temperature,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  });

  let fullText = '';
  for await (const event of stream) {
    if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
      fullText += event.delta.text;
      onChunk(event.delta.text);
    }
  }

  return fullText;
}

export async function classifyWithHaiku(
  systemPrompt: string,
  input: string
): Promise<string> {
  return generateText({
    systemPrompt,
    userPrompt: input,
    model: 'claude-haiku-4-5-20251001',
    maxTokens: 1024,
    temperature: 0,
  });
}

export { anthropic };
