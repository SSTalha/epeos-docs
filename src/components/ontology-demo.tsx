"use client";

import { useState } from "react";
import { Arrow, FeatureIcon } from "./icons";
import Link from "next/link";

const objects = [
  {
    id: "customer",
    label: "Customer",
    type: "Core object",
    source: "Dynamics 365",
    fields: ["customer_id", "company_name", "industry", "account_owner"],
    description: "The shared context behind every commercial relationship.",
  },
  {
    id: "opportunity",
    label: "Opportunity",
    type: "Business object",
    source: "Dynamics 365",
    fields: ["opportunity_id", "customer_id", "estimated_value", "stage"],
    description: "A potential deal, connected to the customer it belongs to.",
  },
  {
    id: "quote",
    label: "Quote",
    type: "Business object",
    source: "Velosity",
    fields: ["quote_id", "customer_id", "status", "created_at"],
    description:
      "A commercial offer with its own lifecycle and source context.",
  },
  {
    id: "product",
    label: "Product",
    type: "Business object",
    source: "PostgreSQL",
    fields: ["product_id", "name", "family", "unit_price"],
    description:
      "Your product catalog, represented in the language of your business.",
  },
];

export function OntologyDemo() {
  const [selected, setSelected] = useState("customer");
  const object = objects.find((item) => item.id === selected)!;

  return (
    <div
      className="ontology-demo"
      aria-label="Interactive example of a business ontology"
    >
      <div className="demo-topline">
        <span>
          <span className="status-dot" />
          THE CONNECTED ENTERPRISE
        </span>
        <span className="demo-caption">
          Illustrative workspace <span>↗</span>
        </span>
      </div>
      <div className="demo-main">
        <div className="graph-area">
          <div className="graph-intro">
            <span className="mono">01 / BUSINESS ONTOLOGY</span>
            <h3>
              Everything starts
              <br />
              with a connection.
            </h3>
          </div>
          <svg
            className="graph-lines"
            viewBox="0 0 800 400"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g stroke="#64766b" strokeWidth="1">
              <path d="M340 170C460 170 450 80 575 80" />
              <path d="M340 170C490 170 390 295 535 295" />
              <path d="M340 170C220 170 260 310 170 310" />
              <path d="M575 80C680 80 700 295 535 295" strokeDasharray="4 5" />
            </g>
            <g fill="#c3d6ad">
              <circle cx="449" cy="123" r="3" />
              <circle cx="420" cy="249" r="3" />
              <circle cx="260" cy="248" r="3" />
            </g>
            <g fill="#a1b0a3" fontSize="10" fontFamily="monospace">
              <text x="437" y="101">
                has opportunity
              </text>
              <text x="423" y="226">
                receives
              </text>
              <text x="190" y="235">
                purchases
              </text>
              <text x="649" y="204">
                includes
              </text>
            </g>
          </svg>
          {objects.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`graph-node node-${item.id} ${selected === item.id ? "selected" : ""}`}
              aria-pressed={selected === item.id}
              onClick={() => setSelected(item.id)}
            >
              <span className="node-icon">
                <FeatureIcon kind="model" />
              </span>
              <span>
                <small>{item.type}</small>
                <strong>{item.label}</strong>
              </span>
              <span className="node-dot" />
            </button>
          ))}
          <span className="graph-hint">
            <span>⌖</span> Select an object to explore its context
          </span>
        </div>
        <aside className="object-detail" aria-live="polite" aria-atomic="true">
          <div className="object-detail-title">
            <FeatureIcon kind="model" />
            <span>OBJECT EXPLORER</span>
            <span>↗</span>
          </div>
          <h3>{object.label}</h3>
          <p>{object.description}</p>
          <div className="object-source">
            <span>Source</span>
            <strong>{object.source}</strong>
          </div>
          <span className="property-label">
            PROPERTIES{" "}
            <span>{object.fields.length.toString().padStart(2, "0")}</span>
          </span>
          <ul>
            {object.fields.map((field, index) => (
              <li key={field}>
                <span className="field-type">{index === 0 ? "#" : "Aa"}</span>
                {field}
                <span>{index === 0 ? "ID" : "string"}</span>
              </li>
            ))}
          </ul>
          <Link href="/docs/ontology" className="detail-link">
            Explore the ontology <Arrow />
          </Link>
        </aside>
      </div>
      <div className="demo-bottom">
        <span className="mono">MANY SYSTEMS. ONE BUSINESS CONTEXT.</span>
        <div>
          <span>
            <i className="source-symbol">▥</i> PostgreSQL
          </span>
          <span>
            <i className="source-symbol">◈</i> Azure SQL
          </span>
          <span>
            <i className="source-symbol">◩</i> Dynamics 365
          </span>
          <span>
            <i className="source-symbol">⌘</i> Velosity
          </span>
        </div>
      </div>
    </div>
  );
}
