import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DocsSidebar } from "@/components/docs-sidebar";
import { articles, getArticle } from "@/lib/documentation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return {
    title: article?.title ?? "Page not found",
    description: article?.summary,
  };
}

export default async function DocArticle({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const index = articles.indexOf(article);
  const next = articles[index + 1];
  const previous = articles[index - 1];
  return (
    <main id="main" className="docs-layout container">
      <DocsSidebar current={article.slug} />
      <article className="article">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/docs">Documentation</Link>
          <span aria-hidden="true">/</span>
          <span>
            {article.slug === "roadmap"
              ? "Availability & roadmap"
              : article.title}
          </span>
        </nav>
        <span className="availability">
          <span className="status-dot" />
          {article.status === "Available"
            ? "CURRENT PLATFORM"
            : "CURRENT CAPABILITIES & FUTURE DIRECTION"}
        </span>
        <h1>{article.title}</h1>
        <p className="article-lead">{article.summary}</p>
        {article.sections.map((section) => (
          <section key={section.title} className="article-section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <nav className="article-navigation" aria-label="Other guides">
          {previous ? (
            <Link href={`/docs/${previous.slug}`}>← {previous.title}</Link>
          ) : (
            <Link href="/docs">← All guides</Link>
          )}
          {next ? (
            <Link href={`/docs/${next.slug}`}>
              {next.slug === "roadmap" ? "Availability & roadmap" : next.title}{" "}
              →
            </Link>
          ) : (
            <Link href="/contact">Talk about your project →</Link>
          )}
        </nav>
      </article>
    </main>
  );
}
