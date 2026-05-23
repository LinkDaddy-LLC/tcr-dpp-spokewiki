import TcrComplianceCta from "@/components/TcrComplianceCta";
import { Link } from "wouter";

const TEXTILE_TIMELINE = [
  { date: "March 2022", event: "EU Textile Strategy for Sustainability and Circularity published" },
  { date: "July 2024", event: "ESPR Regulation 2024/1781 entered into force — textiles in first wave" },
  { date: "2025", event: "Textile ESPR delegated act consultation and drafting phase" },
  { date: "July 19, 2026", event: "First ESPR delegated act applies — textiles expected in first batch" },
  { date: "2026–2027", event: "Textile DPP mandate expected via ESPR delegated act" },
  { date: "2030", event: "EU Textile Strategy 2030 targets: 100% recyclable textiles on EU market" },
];

const TEXTILE_DPP_FIELDS = [
  "Fibre composition by weight percentage",
  "Country of origin (spinning, weaving, dyeing, final assembly)",
  "Manufacturer and brand name",
  "Care and washing instructions",
  "Repair and reuse instructions",
  "Hazardous substance declarations (REACH compliance)",
  "Recycled content percentage by fibre type",
  "Recyclability rating and end-of-life instructions",
  "Durability and quality indicators",
  "Certification references (GOTS, OEKO-TEX, bluesign, etc.)",
  "Social compliance audit references",
  "Carbon footprint per garment (lifecycle)",
  "Water consumption in production",
  "SHA-256 hash of the compliance record",
];

const TEXTILE_REGULATIONS = [
  {
    name: "EU ESPR Delegated Act (Textiles)",
    scope: "All textiles placed on EU market",
    status: "Expected 2026",
    requirement: "Digital Product Passport with full traceability",
  },
  {
    name: "EU Textile Labelling Regulation",
    scope: "Consumer textile products",
    status: "In force (Regulation 1007/2011)",
    requirement: "Fibre composition labelling — DPP will extend this",
  },
  {
    name: "EU Green Claims Directive",
    scope: "All environmental claims on products",
    status: "Adopted 2024",
    requirement: "Substantiated, third-party verified green claims",
  },
  {
    name: "Corporate Sustainability Due Diligence (CSDDD)",
    scope: "Large companies with EU operations",
    status: "Adopted 2024",
    requirement: "Supply chain due diligence including textile suppliers",
  },
];

export default function TextileTraceabilityPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "oklch(0.09 0.008 240)", color: "oklch(0.92 0.005 240)" }}
    >
      {/* Nav */}
      <header style={{ borderBottom: "1px solid oklch(0.18 0.008 240)", backgroundColor: "oklch(0.09 0.008 240)" }}>
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
            <Link href="/textile-traceability" className="text-violet-400 font-medium no-underline">Textile Traceability</Link>
          </nav>
          <a
            href="https://tradecompliancerecords.com/create?type=digital-product-passport"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold transition-colors"
          >
            Create Textile Record →
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors no-underline">Digital Product Passports</Link>
              <span className="text-zinc-700 text-xs">/</span>
              <span className="text-zinc-300 text-xs">Textile Traceability</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-400 text-xs font-medium mb-5">
              EU Textile Strategy 2030 · ESPR Delegated Act Expected 2026
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Textile Traceability & Digital Product Passport:<br />
              <span className="text-violet-400">Complete Compliance Reference</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-2xl">
              Textiles are among the first product categories targeted by the EU Ecodesign for Sustainable
              Products Regulation (ESPR). The forthcoming ESPR delegated act for textiles will mandate a
              Digital Product Passport covering fibre composition, country of origin, care instructions,
              recycled content, and end-of-life guidance — all cryptographically verifiable.
            </p>
            <TcrComplianceCta
              regulationContext="default"
              regulationLabel="Textile DPP Compliance"
              variant="banner"
            />
          </div>
        </section>

        {/* Why Textiles First */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-4">Why Textiles Are in the First ESPR Wave</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              The EU Commission identified textiles as a priority sector for ESPR due to the industry's
              significant environmental footprint. The global textile industry accounts for approximately
              10% of global carbon emissions, 20% of global wastewater, and generates 92 million tonnes of
              waste annually.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The EU Textile Strategy 2030, published in March 2022, set out a roadmap for making all
              textiles placed on the EU market sustainable, repairable, and recyclable by 2030. The ESPR
              delegated act for textiles is the primary legislative instrument to achieve this goal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stat: "10%", label: "of global CO₂ emissions from textiles" },
                { stat: "20%", label: "of global wastewater from textile dyeing" },
                { stat: "92M t", label: "of textile waste generated annually" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800 text-center">
                  <div className="text-violet-400 text-2xl font-bold mb-1">{item.stat}</div>
                  <div className="text-zinc-400 text-xs">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Data Fields */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">Expected Textile DPP Data Requirements</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Based on the EU Commission's ESPR working documents and the Textile Strategy, the following
              data fields are expected to be required in the textile DPP delegated act. Final requirements
              will be confirmed when the delegated act is published.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {TEXTILE_DPP_FIELDS.map((field, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                  <div className="w-4 h-4 rounded-full bg-violet-950 border border-violet-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 text-xs leading-relaxed">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regulatory Framework */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">Textile Regulatory Framework</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The textile DPP sits within a broader EU regulatory framework for sustainable textiles.
              Manufacturers and importers must navigate multiple overlapping requirements.
            </p>
            <div className="space-y-3">
              {TEXTILE_REGULATIONS.map((reg, i) => (
                <div key={i} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-white text-sm font-semibold">{reg.name}</h3>
                    <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-400 font-medium">
                      {reg.status}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-xs">
                    <div>
                      <span className="text-zinc-600">Scope: </span>
                      <span className="text-zinc-400">{reg.scope}</span>
                    </div>
                    <div>
                      <span className="text-zinc-600">Requirement: </span>
                      <span className="text-zinc-400">{reg.requirement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-6">Textile DPP Implementation Timeline</h2>
            <div className="relative pl-6 space-y-0">
              {TEXTILE_TIMELINE.map((item, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  {i < TEXTILE_TIMELINE.length - 1 && (
                    <div className="absolute left-[-13px] top-5 bottom-0 w-px bg-zinc-800" />
                  )}
                  <div className="absolute left-[-17px] top-1.5 w-2 h-2 rounded-full bg-violet-500 border-2 border-zinc-900" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <span className="text-violet-400 text-xs font-semibold shrink-0 w-28">{item.date}</span>
                    <span className="text-zinc-300 text-xs leading-relaxed">{item.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <TcrComplianceCta
              regulationContext="default"
              regulationLabel="Textile DPP Compliance"
              variant="card"
            />
          </div>
        </section>

        {/* Related */}
        <section className="py-10" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-4">Related DPP References</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/eu-espr" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs transition-colors no-underline">
                EU ESPR →
              </Link>
              <Link href="/battery-passport" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs transition-colors no-underline">
                Battery Passport →
              </Link>
              <a href="https://tradecompliancerecords.com/regulations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs transition-colors">
                TCR Regulations Vault →
              </a>
            </div>
          </div>
        </section>
      </main>

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
