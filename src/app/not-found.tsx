import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <span className="eyebrow">404 / A MISSING CONNECTION</span>
      <h1>Let’s find your way back.</h1>
      <p>
        This page isn’t part of the picture. Explore the platform or find your
        next step in the documentation.
      </p>
      <Link className="button" href="/">
        Back to Epeos <Arrow />
      </Link>
      <Link className="text-link" href="/docs">
        Browse documentation <Arrow />
      </Link>
    </main>
  );
}
