"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Arrow } from "./icons";

export function ProjectBrief({ contactEmail }: { contactEmail?: string }) {
  const [brief, setBrief] = useState("");
  const [message, setMessage] = useState("");
  const result = useRef<HTMLDivElement>(null);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) ?? "").trim();
    setBrief(
      `EPEOS — PROJECT BRIEF\n\nName: ${value("name")}\nWork email: ${value("email")}\nCompany: ${value("company")}\nPrimary focus: ${value("focus")}\n\nOur challenge\n${value("challenge")}\n`,
    );
    setMessage("");
    requestAnimationFrame(() => result.current?.focus());
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(brief);
      setMessage("Brief copied to your clipboard.");
    } catch {
      setMessage(
        "Clipboard access is unavailable. Download the brief or select the text below to copy it.",
      );
    }
  }

  function download() {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "epeos-project-brief.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setMessage("Your brief is ready to save.");
  }

  return (
    <form className="brief-form" onSubmit={prepare}>
      <h2>Tell us what you’re building.</h2>
      <p>
        Prepare a short project brief to share with your Epeos contact. Your
        details stay in this browser until you choose to share them.
      </p>
      <div className="form-row">
        <label htmlFor="name">
          Your name
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Alex Morgan"
          />
        </label>
        <label htmlFor="email">
          Work email
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="alex@company.com"
          />
        </label>
      </div>
      <label htmlFor="company">
        Company
        <input
          id="company"
          name="company"
          autoComplete="organization"
          required
          maxLength={160}
          placeholder="Your organization"
        />
      </label>
      <label htmlFor="focus">
        What would you like to explore?
        <select id="focus" name="focus" defaultValue="">
          <option value="" disabled>
            Select your focus
          </option>
          <option>Connected data & business ontology</option>
          <option>Data sync & operational reporting</option>
          <option>Governed AI & MCP tools</option>
          <option>Unstructured knowledge — future capabilities</option>
          <option>Explore the platform together</option>
        </select>
      </label>
      <label htmlFor="challenge">
        What’s the challenge?
        <textarea
          id="challenge"
          name="challenge"
          required
          minLength={15}
          maxLength={3000}
          rows={4}
          placeholder="Tell us about your systems, your teams, and what you want to make possible."
        />
      </label>
      <button type="submit" className="button">
        Prepare my project brief <Arrow />
      </button>
      <p className="privacy-note">
        No automatic submission. No mailing lists.{" "}
        <Link href="/docs/security">How we handle your information ↗</Link>
      </p>
      {brief && (
        <div className="brief-result" ref={result} tabIndex={-1}>
          <h3>Your brief is ready.</h3>
          <p>
            Download or copy it, then share it with your Epeos contact to start
            the conversation.
          </p>
          <div className="result-actions">
            <button type="button" onClick={copy}>
              Copy brief
            </button>
            <button type="button" onClick={download}>
              Download .txt
            </button>
            {contactEmail && (
              <a
                href={`mailto:${contactEmail}?subject=${encodeURIComponent("Let’s build with Epeos")}&body=${encodeURIComponent(brief)}`}
              >
                Email brief ↗
              </a>
            )}
          </div>
          <p role="status" className="form-message">
            {message}
          </p>
          <div className="brief-preview">{brief}</div>
        </div>
      )}
    </form>
  );
}
