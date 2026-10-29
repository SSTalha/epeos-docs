export type Article = {
  slug: string;
  title: string;
  summary: string;
  status: "Available" | "Available & planned";
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
};

// Content reflects epeos-fe/README.md, epeos-be/README.md, and ../foundry.md.
export const articles: Article[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    summary:
      "From your first connection to a published business model. A practical introduction to the Epeos workspace.",
    status: "Available",
    sections: [
      {
        title: "Start with a workspace",
        paragraphs: [
          "An Epeos workspace brings together your connections, ontology, tools, and endpoints. Sign in with your organization’s configured identity provider and select the workspace you administer. Company provisioning and the first administrator are managed by your Epeos operator.",
          "Access depends on your organization, role, and workspace membership. Ask your administrator if the workspace you need is not visible.",
        ],
      },
      {
        title: "Connect a source",
        paragraphs: [
          "Open Data connections and add a supported database or business application. Test the connection, give it a recognizable name, and save it to the workspace. Credentials are encrypted in the platform and are not returned with the connection listing.",
        ],
        bullets: [
          "PostgreSQL and Azure SQL / SQL Server for database sources.",
          "Dynamics 365 and Velosity for supported business application operations.",
          "Use a dedicated database account with only the permissions required by your workflow.",
        ],
      },
      {
        title: "Model and publish",
        paragraphs: [
          "In Ontology, import from a connection to generate a draft of business objects, properties, and relationships. Review the suggestions and refine your model before publishing.",
          "Publishing makes a version available to the workspace. It does not automatically begin a data sync. If you want to copy objects into your own database, configure a destination and copy settings separately.",
        ],
      },
      {
        title: "Choose your next step",
        paragraphs: [
          "Use Data sync to materialize selected published objects into customer-owned tables. Use the tool builder to define validated operations, then publish selected tools through a scoped MCP endpoint for an AI client.",
          "These are separate workflows. You do not need a tool or an MCP endpoint to use ontology and data sync.",
        ],
      },
    ],
  },
  {
    slug: "connections",
    title: "Data connections",
    summary:
      "Bring supported databases and business applications into a shared workspace, with explicit credentials and clear source boundaries.",
    status: "Available",
    sections: [
      {
        title: "Connect your existing systems",
        paragraphs: [
          "Epeos supports PostgreSQL, Azure SQL, SQL Server 2022 and later, and curated application connectors for Dynamics 365 and Velosity. Connectors expose the operations implemented for that source; they do not provide arbitrary access to every vendor API.",
          "Database catalogs expose the schemas, tables, columns, and declared foreign keys visible to the connected database user.",
        ],
      },
      {
        title: "Test before you build",
        paragraphs: [
          "Test a new connection before saving it, or check a saved connection from the workspace. A successful test confirms access at that point in time. Available data still depends on the permissions of the source account.",
          "Use recognizable connection names so your team can distinguish sources from synchronization destinations.",
        ],
      },
      {
        title: "Keep credentials deliberate",
        paragraphs: [
          "Saved connection secrets are encrypted in the platform. Use dedicated read-only database accounts for source access. A sync destination needs write access to its designated schema, so configure a separate account with only the required privileges.",
          "Application connections use shared connector credentials. Epeos access groups govern access to published tools; they do not delegate each caller’s individual vendor permissions through a shared key.",
        ],
      },
      {
        title: "Know the current boundaries",
        paragraphs: [
          "Connections currently cover structured databases and supported application APIs. Document uploads, document parsing, OCR, vector indexing, and unstructured search are not implemented in the reviewed repositories.",
          "A connection does not automatically resolve matching customers across different systems. Review any cross-source relationship as a modeling decision.",
        ],
      },
    ],
  },
  {
    slug: "ontology",
    title: "Business ontology",
    summary:
      "Describe your business through objects, properties, and relationships. Build a model people can recognize and systems can use.",
    status: "Available",
    sections: [
      {
        title: "Model the business, not just the schema",
        paragraphs: [
          "An object represents a business concept such as a customer, opportunity, quote, or product. Properties describe that object, and links represent relationships between object types.",
          "Database suggestions use selected tables, identifiers, and declared foreign keys. Application connectors provide curated object catalogs where supported.",
        ],
      },
      {
        title: "Review suggestions",
        paragraphs: [
          "Import from a saved connection to create or update the draft. Inspect object properties and relationships in the graph, then rename, remove, or connect objects as appropriate.",
          "A suggested relationship is not proof that records from different systems describe the same real-world entity. Automatic cross-system identity resolution is deferred.",
        ],
      },
      {
        title: "Separate draft from published",
        paragraphs: [
          "Draft changes are separate from the published version. Publish after review so downstream sync uses the version you intended.",
          "Reimporting suggestions from the same connection replaces that connection’s objects in the draft. Review copy settings again before publishing. Publishing alone does not start a sync.",
        ],
      },
      {
        title: "Prepare objects for synchronization",
        paragraphs: [
          "Choose a destination table name and either Replace or Keep history for each object you want to copy. Only objects with destination mappings in the latest published version are synchronized.",
          "Some API objects cannot be bulk copied because they lack a collection operation or require a specific record ID. Preview your sync plan to identify those limits.",
        ],
      },
    ],
  },
  {
    slug: "data-sync",
    title: "Data sync",
    summary:
      "Materialize selected published objects into your own PostgreSQL or Azure SQL database, with previews, scheduled runs, and run history.",
    status: "Available",
    sections: [
      {
        title: "Your destination, your database",
        paragraphs: [
          "Epeos stores platform metadata separately from your business rows. Synchronized rows are copied into one saved destination connection and one schema per workspace. No Epeos-owned warehouse is required.",
          "Open Settings → Data sync to select the destination, schema, daily UTC schedule, and enabled state. The default daily schedule is 00:00 UTC.",
        ],
      },
      {
        title: "Choose how each object is written",
        paragraphs: [
          "Replace deletes the previous contents and reloads the full source. Keep history retains daily snapshots with a snapshot_date column; rerunning the same UTC day replaces that day’s snapshot.",
        ],
        bullets: [
          "Preview the generated plan and column types before running.",
          "Use Sync now for a manual run, or enable the daily schedule.",
          "Review per-table outcomes in run history. Mixed results are reported as partial.",
          "History tables have no automatic retention and will continue to grow.",
        ],
      },
      {
        title: "Table-level protection",
        paragraphs: [
          "A table’s create, delete, and insert work runs within one transaction. A source read, conversion, insertion, or row-limit failure rolls that table back. One failed table does not stop other tables from being processed.",
          "Epeos refuses to overwrite unrelated destination tables or ontology source tables. Destination ownership is scoped to the specific workspace, object, connection, schema, and table. There is no distributed transaction between customer data and platform metadata.",
        ],
      },
      {
        title: "Current limits",
        paragraphs: [
          "Sync uses full extraction. Incremental change capture, upserts, per-object schedules, multiple destinations per workspace, automatic history retention, and automatic job retries are deferred.",
          "The default row limit is 2,000,000 per table with batches of 5,000. Exceeding the limit fails the table rather than silently truncating it. These settings are operator configurable.",
        ],
      },
    ],
  },
  {
    slug: "mcp",
    title: "Tools & MCP",
    summary:
      "Create validated operations and make selected tools available to AI clients through authenticated, scoped MCP endpoints.",
    status: "Available",
    sections: [
      {
        title: "Define a reusable tool",
        paragraphs: [
          "The tool builder uses a saved connection to define a database query or a supported application operation. Choose exposed inputs, fixed values, output fields, sorting, and row limits as appropriate to the source.",
          "Validate the definition against the source and preview sample results before saving. Validation checks the definition; a successful preview does not replace your own review of data access or business meaning.",
        ],
      },
      {
        title: "Publish selected operations",
        paragraphs: [
          "In Connect your AI, create a named endpoint and select the workspace tools it should expose. OAuth is the default mode and requires an approved user with access through an assigned group. Service API-key mode is available explicitly for service integrations.",
          "A group receives access to the tools exposed by its assigned endpoints. There is no separate tool-to-group assignment. API-key service credentials grant service access independently of group membership.",
        ],
      },
      {
        title: "Keep access current",
        paragraphs: [
          "Tool discovery reads the enabled tools assigned to the endpoint. Calls load the tool again and recheck endpoint membership before source access. Disabling a tool blocks subsequent calls even if a client discovered it earlier.",
          "Refresh your AI client’s tool list after adding, renaming, or changing tools. Cloud clients need a reachable HTTPS backend.",
        ],
      },
      {
        title: "Follow the execution history",
        paragraphs: [
          "Saved-tool API and MCP calls record tool identity, source, supplied parameters, row count, execution duration, status, and a safe error message. Invalid or rejected calls are also recorded.",
          "Result rows and database credentials are not stored in the audit history. Supplied parameter values are stored, so avoid passing unnecessary sensitive data. Builder validation and unsaved previews are not tool calls.",
        ],
      },
    ],
  },
  {
    slug: "security",
    title: "Security & governance",
    summary:
      "Understand the current authentication, access, credential, and audit controls—and the responsibilities that remain with your organization.",
    status: "Available",
    sections: [
      {
        title: "Identity and workspace access",
        paragraphs: [
          "Backend routes require OAuth access tokens. Microsoft sign-in is handled by the backend, which uses an HttpOnly session cookie for the frontend. Identity-provider tokens are not stored in browser local storage.",
          "Organization scope, workspace access, administration roles, and group assignments determine the actions available to a person. Configure users and groups through People & access.",
        ],
      },
      {
        title: "Connection and endpoint credentials",
        paragraphs: [
          "Saved source secrets are encrypted using the platform’s configured encryption key and are not returned in connection listings. Use least-privilege source accounts and restrict sync destination access to its designated schema.",
          "MCP endpoints support user OAuth or explicitly selected service API keys. Rotating a service key immediately revokes the previous key. Service keys can be revealed through an audited administration action.",
        ],
      },
      {
        title: "Audit scope and retention",
        paragraphs: [
          "Saved-tool API and MCP calls have append-only application audit records. Parameters are recorded; result rows and database credentials are not. Audit records are retained for 365 days, while completed sync-run metadata is retained for 90 days.",
          "This is tool execution auditing, not a claim that every user action or data transformation is recorded. Object-level and property-level policies beyond current workspace administration are deferred.",
        ],
      },
      {
        title: "Privacy on this website",
        paragraphs: [
          "This marketing website includes no advertising analytics, third-party tracking scripts, or external font requests. The project brief form prepares a brief in your browser and does not submit it to a server.",
          "Copying or downloading a brief is an explicit action. If a contact email is configured, choosing Email brief opens your email application; sending remains under your control. Standard hosting access logs may still be collected by the hosting provider.",
        ],
      },
      {
        title: "Evaluate for your environment",
        paragraphs: [
          "The current product documentation does not establish SOC 2, ISO 27001, HIPAA, or other compliance certifications. Review your deployment, identity provider, database controls, logging, data residency, and retention obligations before production use.",
          "Keep framework and application dependencies patched and perform security reviews appropriate to your deployment. A dependency audit is a point-in-time check, not a guarantee that software is free of vulnerabilities.",
        ],
      },
    ],
  },
  {
    slug: "roadmap",
    title: "Available today. Building toward tomorrow.",
    summary:
      "An honest view of the current platform and the broader enterprise knowledge vision.",
    status: "Available & planned",
    sections: [
      {
        title: "Available in the current platform",
        paragraphs: [
          "The reviewed frontend and backend implement a connected foundation for supported structured data and application sources.",
        ],
        bullets: [
          "PostgreSQL, Azure SQL / SQL Server, Dynamics 365, and Velosity source workflows.",
          "Draft and published ontology objects, properties, and relationships.",
          "Manual and daily full-extraction copies into a customer database.",
          "Validated saved tools and authenticated MCP endpoints.",
          "Organization and workspace administration, access groups, and tool-call audit history.",
        ],
      },
      {
        title: "The unstructured-data vision",
        paragraphs: [
          "The direction for Epeos is an enterprise foundry where unstructured knowledge can connect with operational business context. Documents and other knowledge assets could become part of the same picture as your customers, products, and systems.",
          "Document ingestion, OCR, document search, vector indexing, and unstructured question answering are not implemented in the repositories reviewed for this site. These are planned areas, not available product capabilities. No delivery dates are committed here.",
        ],
      },
      {
        title: "Other deferred capabilities",
        paragraphs: [
          "Current implementation notes also defer incremental sync and upserts, multiple sync destinations, automatic history retention, automatic cross-source entity resolution, record browsing, AI question answering, approved metrics, and Foundry-specific MCP tools.",
          "The existing saved-tool MCP workflow is available separately. Its presence should not be interpreted as an implementation of every planned Foundry or knowledge-retrieval feature.",
        ],
      },
      {
        title: "Shape the next chapter",
        paragraphs: [
          "Bring a concrete workflow: the systems involved, the knowledge your teams need, and the action they want to take. Start with an available integration and a defined business object, then identify the missing capabilities together.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
