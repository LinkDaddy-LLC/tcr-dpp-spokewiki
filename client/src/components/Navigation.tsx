import { useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { href: "/wiki", label: "All Articles" },
  { href: "/eu-espr", label: "EU ESPR" },
  { href: "/battery-passport", label: "Battery Passport" },
  { href: "/textile-traceability", label: "Textile Traceability" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "oklch(0.10 0.005 240)",
        borderBottom: "1px solid oklch(0.25 0.008 240)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="container max-w-6xl py-0">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 6,
                background: "oklch(0.19 0.007 240)",
                border: "1px solid oklch(0.75 0.18 65 / 40%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="oklch(0.75 0.18 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "oklch(0.55 0.010 65)", textTransform: "uppercase", lineHeight: 1 }}>
                Knowledge Hub
              </div>
              <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "oklch(0.92 0.005 65)", letterSpacing: "0.03em", lineHeight: 1.2 }}>
                Digital Product Passports
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href || (link.href !== "/" && location.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="no-underline px-3 py-1.5 rounded text-xs font-medium transition-colors"
                  style={{
                    color: isActive ? "oklch(0.75 0.18 65)" : "oklch(0.60 0.010 65)",
                    backgroundColor: isActive ? "oklch(0.19 0.007 240)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://tradecompliancerecords.com/create?type=digital-product-passport"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-semibold transition-all"
              style={{
                background: "oklch(0.75 0.18 65)",
                color: "oklch(0.09 0.005 240)",
              }}
            >
              Create DPP Record
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-1.5 rounded"
              style={{ color: "oklch(0.60 0.010 65)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{ borderTop: "1px solid oklch(0.25 0.008 240)", paddingBottom: "0.75rem" }}
            className="md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="no-underline block px-2 py-2.5 text-sm"
                style={{ color: "oklch(0.78 0.008 65)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://tradecompliancerecords.com/create?type=digital-product-passport"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline block mt-2 px-3 py-2 rounded text-sm font-semibold text-center"
              style={{ background: "oklch(0.75 0.18 65)", color: "oklch(0.09 0.005 240)" }}
            >
              Create DPP Record →
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
