import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { ProjectBrief } from "@/components/project-brief";

export const metadata: Metadata = {
  title: "Let’s build your foundation",
  description:
    "Prepare your Epeos project brief. Start with your systems, your teams, and the business context that connects them.",
};

export default function Contact() {
  const configuredEmail = process.env.CONTACT_EMAIL?.trim();
  // This public contact address must be a single plain mailbox, never an arbitrary URL.
  const contactEmail =
    configuredEmail &&
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(
      configuredEmail,
    )
      ? configuredEmail
      : undefined;
  return (
    <main id="main" className="contact-page container">
      <div className="contact-heading">
        <span className="eyebrow">
          <span className="status-dot" /> MAKE THE CONNECTION
        </span>
        <h1>
          Start with
          <br />
          your big picture.
        </h1>
        <p>
          Your systems. Your people. Your next chapter. Let’s find the
          foundation that connects them.
        </p>
        <div className="contact-expectations">
          <h2>A useful first conversation.</h2>
          <ol>
            <li>Map your current systems and data sources.</li>
            <li>Identify a workflow that matters to your team.</li>
            <li>Explore what Epeos can support today.</li>
          </ol>
        </div>
        <Link href="/docs" className="text-link">
          Get to know the platform first <Arrow />
        </Link>
      </div>
      <ProjectBrief contactEmail={contactEmail} />
    </main>
  );
}
