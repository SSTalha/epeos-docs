import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { DocsSidebar } from "@/components/docs-sidebar";
import { articles } from "@/lib/documentation";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Understand Epeos connections, ontology, data sync, governance, and MCP tools.",
};

export default function Docs() {
  return (
    <main id="main">
      <section className="docs-masthead container">
        <span className="eyebrow">THE EPEOS FIELD GUIDE</span>
        <h1>
          A foundation
          <br />
          you can build on.
        </h1>
        <p>
          Understand the platform, connect your first source, and turn your
          business context into something useful.
        </p>
      </section>
      <div className="docs-layout container">
        <DocsSidebar />
        <section className="docs-overview">
          <h2>Start with the whole picture.</h2>
          <p>
            Epeos connects supported databases and business applications, models
            the relationships between business objects, and makes selected data
            operations available to teams and AI clients.
          </p>
          <div className="docs-workflow" aria-label="Platform workflow">
            <span>Connect a source</span>
            <i aria-hidden="true">→</i>
            <span>Model your business</span>
            <i aria-hidden="true">→</i>
            <span>Publish & activate</span>
          </div>
          <div className="docs-note">
            <strong>A clear view of what’s available.</strong> These guides
            reflect the current implementation. Document ingestion and
            unstructured search are planned; see availability & roadmap for the
            distinction.
          </div>
          <div className="docs-cards">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/docs/${article.slug}`}
                className="docs-card"
              >
                <span className="mono">
                  {(index + 1).toString().padStart(2, "0")} /{" "}
                  {article.status.toUpperCase()}
                </span>
                <h3>
                  {article.slug === "roadmap"
                    ? "Availability & roadmap"
                    : article.title}
                </h3>
                <p>{article.summary}</p>
                <Arrow />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
