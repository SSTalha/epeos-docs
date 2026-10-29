import Link from "next/link";
import { Arrow, Mark } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="wordmark" aria-label="Epeos home">
          <Mark />
          <span>epeos</span>
        </Link>
        <p>
          A clearer picture.
          <br />A more connected enterprise.
        </p>
        <Link href="/contact" className="text-link">
          Build with Epeos <Arrow />
        </Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Epeos</span>
        <nav aria-label="Footer navigation">
          <Link href="/#platform">Platform</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/docs/security">Security & privacy</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <span className="footer-note">From complexity to clarity.</span>
      </div>
    </footer>
  );
}
