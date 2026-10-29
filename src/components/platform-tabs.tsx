"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { Arrow, FeatureIcon } from "./icons";

const stages = [
  {
    id: "connect",
    label: "Connect",
    title: "Start with the systems you already use.",
    text: "Bring databases and business applications into one workspace. Explore source schemas, test connections, and create a foundation without replacing your existing stack.",
    points: [
      "PostgreSQL and Azure SQL connections",
      "Dynamics 365 and Velosity connectors",
      "Encrypted connection credentials",
    ],
    link: "/docs/connections",
    code: "01",
    diagram: ["PostgreSQL", "Azure SQL", "Dynamics 365", "Velosity"],
    destination: "Your workspace",
  },
  {
    id: "model",
    label: "Model",
    title: "Give your data a shared business language.",
    text: "Turn technical tables into the customers, products, and opportunities your teams recognize. Review suggested relationships, refine your model, and publish when you’re ready.",
    points: [
      "Business objects and properties",
      "Reviewable relationship suggestions",
      "Separate draft and published versions",
    ],
    link: "/docs/ontology",
    code: "02",
    diagram: ["Customers", "Opportunities", "Products", "Quotes"],
    destination: "Business ontology",
  },
  {
    id: "govern",
    label: "Govern",
    title: "Make access intentional. Keep activity visible.",
    text: "Organize work by workspace, authenticate your people, and decide which groups can access each OAuth endpoint. Follow saved-tool execution through a shared audit trail.",
    points: [
      "Workspace and group access",
      "Microsoft sign-in and OAuth",
      "Audited API and MCP tool calls",
    ],
    link: "/docs/security",
    code: "03",
    diagram: ["People", "Workspaces", "Groups", "Permissions"],
    destination: "Governed access",
  },
  {
    id: "activate",
    label: "Activate",
    title: "Put business context to work.",
    text: "Copy published objects into your own database on a daily schedule. Build validated, reusable tools and expose selected operations to your AI clients through MCP.",
    points: [
      "Scheduled sync to your database",
      "Validated tool definitions",
      "Scoped MCP endpoints for AI clients",
    ],
    link: "/docs/mcp",
    code: "04",
    diagram: [
      "Published objects",
      "Saved tools",
      "Daily sync",
      "MCP endpoints",
    ],
    destination: "Teams & AI clients",
  },
] as const;

export function PlatformTabs() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];
  function navigate(event: KeyboardEvent<HTMLButtonElement>) {
    let next = active;
    if (event.key === "ArrowRight") next = (active + 1) % stages.length;
    else if (event.key === "ArrowLeft")
      next = (active + stages.length - 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="platform-explorer">
      <div
        role="tablist"
        aria-label="Explore the platform"
        className="platform-tablist"
      >
        {stages.map((item, index) => (
          <button
            key={item.id}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            id={`tab-${item.id}`}
            aria-controls={`panel-${item.id}`}
            role="tab"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={navigate}
            onClick={() => setActive(index)}
          >
            <span className="mono">{item.code}</span>
            <FeatureIcon kind={item.id} />
            <span>{item.label}</span>
            <Arrow />
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`panel-${stage.id}`}
        aria-labelledby={`tab-${stage.id}`}
        tabIndex={0}
        className="platform-panel"
      >
        <div className="platform-copy">
          <span className="eyebrow">
            {stage.code} / {stage.label}
          </span>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
          <ul>
            {stage.points.map((point) => (
              <li key={point}>
                <span aria-hidden="true">↗</span>
                {point}
              </li>
            ))}
          </ul>
          <Link href={stage.link} className="text-link">
            Explore {stage.label.toLowerCase()} <Arrow />
          </Link>
        </div>
        <div className="pipeline-visual">
          <div className="pipeline-grid" aria-hidden="true" />
          <span className="mono pipeline-label">
            THE EPEOS FOUNDATION / {stage.code}
          </span>
          <div className="pipeline-sources">
            {stage.diagram.map((item, index) => (
              <span key={item}>
                <span className="mono">0{index + 1}</span>
                {item}
                <span>→</span>
              </span>
            ))}
          </div>
          <div className="pipeline-connector" />
          <div className="pipeline-destination">
            <FeatureIcon kind={stage.id} />
            <strong>{stage.destination}</strong>
            <span className="status-dot" />
          </div>
          <span className="pipeline-footnote">Built around your business.</span>
        </div>
      </div>
    </div>
  );
}
