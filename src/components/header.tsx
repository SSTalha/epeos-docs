"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Arrow, Mark } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (
        !nav.current?.contains(event.target as Node) &&
        !toggle.current?.contains(event.target as Node)
      )
        setOpen(false);
    }
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);

  return (
    <header className="site-header">
      <Link
        href="/"
        className="wordmark"
        aria-label="Epeos home"
        onClick={() => setOpen(false)}
      >
        <Mark />
        <span>epeos</span>
        <span className="wordmark-divider" />
        <span className="wordmark-label">Enterprise foundry</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        ref={nav}
        id="navigation"
        className={`navigation ${open ? "is-open" : ""}`}
        aria-label="Main navigation"
        onClick={() => setOpen(false)}
      >
        <Link href="/#platform">Platform</Link>
        <Link href="/#solutions">Solutions</Link>
        <Link href="/#governance">Governance</Link>
        <Link
          href="/docs"
          aria-current={pathname.startsWith("/docs") ? "page" : undefined}
        >
          Documentation <span className="nav-external">↗</span>
        </Link>
        <Link className="button button-small" href="/contact">
          Let’s talk <Arrow />
        </Link>
      </nav>
    </header>
  );
}
