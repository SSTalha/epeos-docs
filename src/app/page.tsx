import Link from "next/link";
import { Arrow, FeatureIcon, Mark } from "@/components/icons";
import { OntologyDemo } from "@/components/ontology-demo";
import { PlatformTabs } from "@/components/platform-tabs";

const solutions = [
  {
    number: "01",
    tag: "OPERATIONS",
    title: "See how your business fits together.",
    text: "Connect customers, opportunities, quotes, and products in a shared business model. Give teams the context to understand the relationships behind their work.",
    link: "/docs/ontology",
    className: "solution-operations",
  },
  {
    number: "02",
    tag: "DATA TEAMS",
    title: "Bring the model into your own database.",
    text: "Turn published business objects into queryable tables. Choose replacement loads or daily snapshots, preview the plan, and follow every sync run.",
    link: "/docs/data-sync",
    className: "solution-data",
  },
  {
    number: "03",
    tag: "AI ENABLEMENT",
    title: "Give AI a deliberate path to your data.",
    text: "Publish selected, validated tools through MCP. Keep authentication, endpoint access, and execution history part of the same foundation.",
    link: "/docs/mcp",
    className: "solution-ai",
  },
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-eyebrow">
          <span className="eyebrow">
            <span className="status-dot" /> THE ENTERPRISE DATA FOUNDRY
          </span>
          <span className="mono hero-edition">
            BUILT FOR THE WHOLE PICTURE ↗
          </span>
        </div>
        <div className="hero-layout">
          <h1 id="hero-title">
            Your data.
            <br />
            Connected to
            <br />
            <span>your business.</span>
          </h1>
          <div className="hero-aside">
            <span className="hero-cross" aria-hidden="true">
              ✳
            </span>
            <p>
              There’s a bigger picture
              <br />
              in your data.
            </p>
            <p className="hero-description">
              Connect fragmented systems. Create shared business context. Give
              your teams and AI a governed foundation to build on.
            </p>
            <Link href="/contact" className="button">
              Discover Epeos <Arrow />
            </Link>
            <a href="#platform" className="hero-secondary">
              Explore the platform <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero-meta">
          <span>FROM COMPLEXITY TO CLARITY.</span>
          <span>A foundation. Not another silo.</span>
          <a
            href="#connected-enterprise"
            aria-label="Scroll to the connected enterprise"
          >
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
      </section>
      <section
        id="connected-enterprise"
        className="visual-section container"
        aria-label="Explore your connected enterprise"
      >
        <OntologyDemo />
      </section>
      <section className="intro-section container">
        <span className="eyebrow">A NEW WAY TO SEE YOUR DATA</span>
        <div>
          <h2>
            Your systems hold the data.
            <br />
            <span>Epeos connects the meaning.</span>
          </h2>
          <div className="intro-bottom">
            <p>
              Enterprise knowledge lives across databases, applications, and the
              spaces between them. Epeos brings your business objects,
              relationships, and access controls into one coherent foundation.
            </p>
            <p>
              Start with connected systems today. Build toward a future where
              structured and unstructured knowledge can work together.
            </p>
          </div>
        </div>
      </section>
      <section id="platform" className="platform-section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / THE PLATFORM</span>
            <h2>
              One foundation.
              <br />
              Every next step.
            </h2>
          </div>
          <p>
            From source connection to AI-ready tools.
            <br />A clear path through your data.
          </p>
        </div>
        <PlatformTabs />
      </section>
      <section className="statement-section">
        <div className="container statement-inner">
          <span className="eyebrow">CONTEXT CHANGES EVERYTHING</span>
          <p>
            From a collection
            <br />
            of systems to a<br />
            <span>connected enterprise.</span>
          </p>
          <div className="statement-caption">
            <Mark />
            <span>
              Built around the way
              <br />
              your business actually works.
            </span>
            <span className="mono">THE EPEOS APPROACH ↗</span>
          </div>
        </div>
      </section>
      <section id="solutions" className="solutions-section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / BUILT FOR YOUR TEAMS</span>
            <h2>
              Better context.
              <br />
              More possibilities.
            </h2>
          </div>
          <p>
            A common foundation for the people
            <br />
            moving your business forward.
          </p>
        </div>
        <div className="solution-grid">
          {solutions.map((solution) => (
            <Link
              href={solution.link}
              className={`solution-card ${solution.className}`}
              key={solution.number}
            >
              <div className="solution-card-top">
                <span className="mono">
                  {solution.number} / {solution.tag}
                </span>
                <Arrow />
              </div>
              <div className="solution-art" aria-hidden="true">
                {solution.number === "01" ? (
                  <div className="mini-network">
                    <span>Customer</span>
                    <i />
                    <span>Opportunity</span>
                    <i />
                    <span>Quote</span>
                  </div>
                ) : solution.number === "02" ? (
                  <div className="mini-table">
                    <div>
                      object_id<span>snapshot_date</span>
                    </div>
                    {["customer_001", "customer_002", "customer_003"].map(
                      (id) => (
                        <div key={id}>
                          {id}
                          <span>2026-10-26</span>
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <div className="mini-mcp">
                    <span>YOUR DATA</span>
                    <i>→</i>
                    <FeatureIcon kind="govern" />
                    <i>→</i>
                    <span>AI CLIENT</span>
                  </div>
                )}
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <span className="solution-link">
                Explore the workflow <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section id="governance" className="governance-section container">
        <div className="governance-visual" aria-hidden="true">
          <div className="security-orbit orbit-one" />
          <div className="security-orbit orbit-two" />
          <div className="security-orbit orbit-three" />
          <div className="security-center">
            <FeatureIcon kind="govern" />
          </div>
          <span className="security-tag security-tag-one">
            Workspace boundaries
          </span>
          <span className="security-tag security-tag-two">
            Encrypted credentials
          </span>
          <span className="security-tag security-tag-three">
            Audited tool calls
          </span>
          <span className="mono security-caption">
            CONTROL IS PART OF THE FOUNDATION.
          </span>
        </div>
        <div className="governance-copy">
          <span className="eyebrow">03 / GOVERNANCE BY DESIGN</span>
          <h2>
            Your data.
            <br />
            Your boundaries.
          </h2>
          <p>
            Business context is valuable. Who can use it matters just as much.
            Keep your people, workspaces, and tool access connected to explicit
            permissions.
          </p>
          <div className="governance-points">
            <div>
              <FeatureIcon kind="govern" />
              <span>
                <strong>Intentional access</strong>
                <small>
                  Microsoft sign-in, workspace roles, and group-scoped OAuth
                  endpoints.
                </small>
              </span>
            </div>
            <div>
              <FeatureIcon kind="connect" />
              <span>
                <strong>Visibility that stays with the work</strong>
                <small>
                  Execution history for saved-tool calls, through the API and
                  MCP.
                </small>
              </span>
            </div>
          </div>
          <Link href="/docs/security" className="text-link">
            Explore security & governance <Arrow />
          </Link>
        </div>
      </section>
      <section className="roadmap-section container">
        <div>
          <span className="eyebrow">THE NEXT CHAPTER</span>
          <h2>
            More of your knowledge.
            <br />
            Part of the picture.
          </h2>
        </div>
        <div>
          <span className="roadmap-badge">ON THE HORIZON</span>
          <p>
            We’re building toward an enterprise foundry that connects
            unstructured knowledge with the systems that run your business.
            Document ingestion and unstructured search are part of that vision.
          </p>
          <Link className="text-link" href="/docs/roadmap">
            See what’s available and what’s next <Arrow />
          </Link>
        </div>
      </section>
      <section className="cta-section">
        <div className="container">
          <span className="eyebrow">MAKE THE CONNECTION</span>
          <div>
            <h2>
              Your next chapter
              <br />
              starts with clarity.
            </h2>
            <Link href="/contact" className="button button-light">
              Let’s build your foundation <Arrow />
            </Link>
          </div>
          <div className="cta-baseline">
            <span>Start with your systems. Build around your business.</span>
            <Link href="/docs">Or explore the documentation ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
