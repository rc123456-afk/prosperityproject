/* Footer — site footer, mirrors nav IA so the whole site reads as one
   publication. Ported from the Claude Design Footer.jsx with real app routes. */

import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__mark">
            <p className="deva">समृद्धि की पाठशाला</p>
            <p className="roman">A school of prosperity</p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                lineHeight: 1.55,
                color: "rgba(242,235,220,0.70)",
                marginTop: 24,
                maxWidth: "22rem",
              }}
            >
              Financial literacy for the people the financial system has
              historically ignored. Run with Bandhan NGO in West Bengal and
              expanding to the UAE.
            </p>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">For Women</div>
            <ul>
              <li>
                <Link href="/curriculum/women">Curriculum</Link>
              </li>
              <li>
                <Link href="/workshops/women">Workshops</Link>
              </li>
              <li>
                <Link href="/resources/women">Resources</Link>
              </li>
              <li>
                <Link href="/stories/women">Stories</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">For Blue-Collar Workers</div>
            <ul>
              <li>
                <Link href="/curriculum/blue-collar-workers">
                  Curriculum<span className="meta">In development</span>
                </Link>
              </li>
              <li>
                <Link href="/workshops/blue-collar-workers">
                  Workshops<span className="meta">In development</span>
                </Link>
              </li>
              <li>
                <Link href="/resources/blue-collar-workers">
                  Resources<span className="meta">In development</span>
                </Link>
              </li>
              <li>
                <Link href="/stories/blue-collar-workers">
                  Stories<span className="meta">In development</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">The project</div>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/impact">Impact</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/about#partners">Bandhan partnership</Link>
              </li>
              <li>
                <Link href="/about#facilitators">Facilitators</Link>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-label">Contact</div>
            <ul>
              <li>
                <a href="mailto:hello@prosperity.in">hello@prosperity.in</a>
                <span className="meta">For partners and press</span>
              </li>
              <li style={{ color: "rgba(242,235,220,0.78)", marginTop: 16 }}>
                Salt Lake, Sector V
                <span className="meta">Kolkata · 700091 · West Bengal</span>
              </li>
              <li style={{ color: "rgba(242,235,220,0.78)" }}>
                Karama
                <span className="meta">Dubai · United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <span>
            © 2026 The Prosperity Project &nbsp;·&nbsp; Reg. 80G &nbsp;·&nbsp;
            CSR-1
          </span>
          <span>
            <Link href="/about#partners">In partnership with Bandhan NGO</Link>
            &nbsp;·&nbsp;
            <Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
