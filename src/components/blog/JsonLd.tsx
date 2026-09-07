import { serializeJsonLd } from "@/lib/blog/seo";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/** Renders one JSON-LD block; the payload is escaped so DB strings cannot break out of the script. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
