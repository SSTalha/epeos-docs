import Link from "next/link";
import { articles } from "@/lib/documentation";

export function DocsSidebar({ current }: { current?: string }) {
  return (
    <aside className="docs-sidebar">
      <span className="eyebrow">PLATFORM DOCUMENTATION</span>
      <nav aria-label="Documentation">
        <Link href="/docs" aria-current={!current ? "page" : undefined}>
          Overview
        </Link>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/docs/${article.slug}`}
            aria-current={current === article.slug ? "page" : undefined}
          >
            {article.slug === "roadmap"
              ? "Availability & roadmap"
              : article.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
