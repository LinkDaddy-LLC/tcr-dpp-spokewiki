import TcrComplianceCta from "@/components/TcrComplianceCta";
import TrustSealBadge from "@/components/TrustSealBadge";
import { Link } from "wouter";

const DPP_TOPICS = [
  {
    slug: "eu-espr",
    href: "/eu-espr",
    badge: "EU Regulation 2024/1781",
    badgeColor: "blue",
    title: "EU ESPR Digital Product Passport",
    description:
      "The Ecodesign for Sustainable Products Regulation mandates a machine-readable Digital Product Passport for every product category placed on the EU market. First delegated acts apply from July 2026.",
    deadline: "July 19, 2026",
    deadlineLabel: "First DPP Deadline",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    slug: "battery-passport",
    href: "/battery-passport",
    badge: "EU Regulation 2023/1542",
    badgeColor: "emerald",
    title: "Battery Passport",
    description:
      "The EU Battery Regulation requires a digital passport for every industrial, EV, and LMT battery placed on the EU market from February 2027. The passport must include carbon footprint, recycled content, and supply chain data.",
    deadline: "February 18, 2027",
    deadlineLabel: "Battery Passport Mandate",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    slug: "textile-traceability",
    href: "/textile-traceability",
    badge: "EU Textile Strategy 2030",
    badgeColor: "violet",
    title: "Textile Traceability & DPP",
    description:
      "The EU Textile Strategy and forthcoming ESPR delegated act for textiles will require a Digital Product Passport covering fibre composition, country of origin, repair instructions, and end-of-life guidance.",
    deadline: "2026–2027",
    deadlineLabel: "Delegated Act Expected",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
      </svg>
    ),
  },
];

const badgeStyles: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-950/30 text-blue-400",
  emerald: "border-emerald-500/30 bg-emerald-950/30 text-emerald-400",
  violet: "border-violet-500/30 bg-violet-950/30 text-violet-400",
};

const deadlineStyles: Record<string, string> = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  violet: "text-violet-400",
};

export default function WikiHomePage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "oklch(0.09 0.008 240)", color: "oklch(0.92 0.005 240)" }}
    >
      {/* Nav */}
      <header
        style={{
          borderBottom: "1px solid oklch(0.18 0.008 240)",
          backgroundColor: "oklch(0.09 0.008 240)",
        }}
      >
        <div className="container max-w-5xl py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-7 h-7 rounded-md bg-blue-950 border border-blue-500/40 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M12 18v-6M9 15l3 3 3-3" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm">Digital Product Passports</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400">
            <Link href="/eu-espr" className="hover:text-white transition-colors no-underline">EU ESPR</Link>
            <Link href="/battery-passport" className="hover:text-white transition-colors no-underline">Battery Passport</Link>
            <Link href="/textile-traceability" className="hover:text-white transition-colors no-underline">Textile Traceability</Link>
          </nav>
          <a
            href="https://tradecompliancerecords.com/create?type=digital-product-passport"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            Create DPP Record →
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs font-medium mb-6">
              EU ESPR · Battery Regulation · Textile Strategy · SHA-256 Verified
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              Digital Product Passport<br />
              <span className="text-blue-400">Reference & Compliance Hub</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-2xl">
              The EU is mandating machine-readable Digital Product Passports across product categories
              from 2026 onward. This reference covers the three primary DPP mandates — EU ESPR,
              Battery Passport, and Textile Traceability — with SHA-256 verified compliance record
              creation via <a href="https://tradecompliancerecords.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">TradeComplianceRecords.com</a>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://tradecompliancerecords.com/create?type=digital-product-passport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
              >
                Create DPP Compliance Record →
              </a>
              <a
                href="https://tradecompliancerecords.com/regulations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold text-sm transition-colors"
              >
                View Regulations Vault
              </a>
            </div>
          </div>
        </section>

        {/* Topic Cards */}
        <section
          className="py-16"
          style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}
        >
          <div className="container max-w-5xl">
            <h2 className="text-white text-xl font-bold mb-2">DPP Mandate Reference Pages</h2>
            <p className="text-zinc-500 text-sm mb-8">
              Each page provides a comprehensive breakdown of the regulation, scope, data requirements, and compliance timeline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DPP_TOPICS.map((topic) => (
                <Link
                  key={topic.slug}
                  href={topic.href}
                  className="group block rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900/60 hover:bg-zinc-900 transition-all overflow-hidden no-underline"
                >
                  <div className="p-5 space-y-3">
                    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${badgeStyles[topic.badgeColor]}`}>
                      {topic.badge}
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                        {topic.icon}
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-blue-300 transition-colors">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed">{topic.description}</p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-zinc-600 text-[10px] uppercase tracking-wider">{topic.deadlineLabel}:</span>
                      <span className={`text-[11px] font-semibold ${deadlineStyles[topic.badgeColor]}`}>{topic.deadline}</span>
                    </div>
                  </div>
                  <div className="px-5 pb-4">
                    <span className="text-blue-400 text-xs font-medium group-hover:text-blue-300 transition-colors">
                      Read full reference →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What is a DPP section */}
        <section
          className="py-16"
          style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}
        >
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-white text-xl font-bold mb-4">What Is a Digital Product Passport?</h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  A Digital Product Passport (DPP) is a machine-readable data carrier — typically a QR code or
                  RFID tag — linked to a structured dataset containing a product's lifecycle information. The EU
                  requires DPPs to be accessible to consumers, customs authorities, market surveillance bodies,
                  and recyclers throughout the product's life.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Under the EU Ecodesign for Sustainable Products Regulation (ESPR), DPPs must be stored in a
                  system that ensures data integrity, authenticity, and long-term accessibility. SHA-256
                  cryptographic hashing provides tamper-evident proof that the underlying compliance data has
                  not been altered since issuance.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  <a href="https://tradecompliancerecords.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">TradeComplianceRecords.com</a> provides
                  the infrastructure to create, hash-seal, and publish DPP-compliant records for EU market access.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Data Carrier", value: "QR code, RFID, NFC, or URL" },
                  { label: "Data Format", value: "Machine-readable (JSON-LD, XML)" },
                  { label: "Integrity Proof", value: "SHA-256 cryptographic hash" },
                  { label: "Access", value: "Consumers, customs, recyclers, auditors" },
                  { label: "Legal Basis", value: "EU Regulation 2024/1781 (ESPR)" },
                  { label: "First Deadline", value: "July 19, 2026 (first delegated act)" },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <span className="text-zinc-500 text-xs w-28 shrink-0 pt-0.5">{row.label}</span>
                    <span className="text-zinc-200 text-xs font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section
          className="py-12"
          style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}
        >
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <TcrComplianceCta
                  regulationContext="eu-dpp"
                  regulationLabel="EU Digital Product Passport"
                  variant="banner"
                />
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-zinc-500 text-xs mb-1">Verified by:</p>
                <TrustSealBadge
                  entitySlug="dpp-registry"
                  entityName="Digital Product Passports"
                  showEmbed={false}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "oklch(0.08 0.008 240)", borderTop: "1px solid oklch(0.18 0.008 240)" }}>
        <div className="container max-w-5xl py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zinc-600 text-xs">
              DigitalProductPassports.co.za · Informational reference only · Not legal advice
            </div>
            <div className="text-zinc-600 text-xs text-center md:text-right">
              Powered by{" "}
              <a href="https://tradecompliancerecords.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">
                TradeComplianceRecords.com
              </a>
              {" · "}
              <a href="https://linkdaddybuild.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
                LinkDaddy® LLC
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
