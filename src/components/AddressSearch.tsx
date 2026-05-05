"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface SearchResult {
  text: string;
  secondary: string;
  lat: number;
  lng: number;
}

interface AddressSearchProps {
  onSelect: (result: { lat: number; lng: number; display: string }) => void;
  placeholder?: string;
  autoFocus?: boolean;
  compact?: boolean;
}

export default function AddressSearch({
  onSelect,
  placeholder = "Search for a place or postcode...",
  autoFocus = false,
  compact = false,
}: AddressSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([]);
      setShow(false);
      return;
    }
    setLoading(true);

    const merged: SearchResult[] = [];

    // 1) postcodes.io autocomplete
    try {
      const pcRes = await fetch(
        `https://api.postcodes.io/postcodes/${encodeURIComponent(q)}/autocomplete`
      );
      const pcData = await pcRes.json();
      if (pcData.result) {
        for (const pc of (pcData.result as string[]).slice(0, 3)) {
          merged.push({ text: pc, secondary: "Postcode", lat: 0, lng: 0 });
        }
      }
    } catch {
      /* ignore */
    }

    // 2) Nominatim address search (UK only)
    try {
      const nomRes = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          q
        )}&format=json&countrycodes=gb&limit=5&addressdetails=1`,
        { headers: { "User-Agent": "PlanScope/1.0" } }
      );
      const nomData = await nomRes.json();
      for (const item of nomData) {
        const parts = (item.display_name as string).split(",");
        merged.push({
          text: parts.slice(0, 2).join(",").trim(),
          secondary: parts.slice(2, 4).join(",").trim(),
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lon),
        });
      }
    } catch {
      /* ignore */
    }

    setResults(merged);
    setShow(merged.length > 0);
    setLoading(false);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(value), 300);
  };

  const handleSelect = async (result: SearchResult) => {
    setQuery(result.text);
    setShow(false);

    let { lat, lng } = result;

    // Postcode entries have 0,0 — look up full coords
    if (lat === 0 && lng === 0) {
      try {
        const res = await fetch(
          `https://api.postcodes.io/postcodes/${encodeURIComponent(result.text)}`
        );
        const data = await res.json();
        if (data.result) {
          lat = data.result.latitude;
          lng = data.result.longitude;
        }
      } catch {
        /* ignore */
      }
    }

    if (lat !== 0 || lng !== 0) {
      onSelect({
        lat,
        lng,
        display: result.text + (result.secondary && result.secondary !== "Postcode" ? `, ${result.secondary}` : ""),
      });
    }
  };

  const py = compact ? "py-3" : "py-4";
  const textSize = compact ? "text-base" : "text-lg";

  return (
    <div ref={containerRef} className="relative">
      {/* Search input */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => results.length > 0 && setShow(true)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-10 ${py} ${textSize} border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm`}
          autoFocus={autoFocus}
        />
        {loading && (
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              className="opacity-25"
            />
            <path
              d="M4 12a8 8 0 018-8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="opacity-75"
            />
          </svg>
        )}
        {query && !loading && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              setShow(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {show && results.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-xl border border-border shadow-xl overflow-hidden">
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => handleSelect(r)}
              className="w-full px-4 py-3 text-left hover:bg-primary-light/50 flex items-center gap-3 border-b border-border/50 last:border-0 transition-colors"
            >
              <svg
                className="w-5 h-5 text-primary/60 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">{r.text}</p>
                {r.secondary && (
                  <p className="text-xs text-muted truncate">{r.secondary}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
