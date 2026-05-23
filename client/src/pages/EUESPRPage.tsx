import TcrComplianceCta from "@/components/TcrComplianceCta";
import { Link } from "wouter";

const ESPR_TIMELINE = [
  { date: "March 2024", event: "ESPR Regulation 2024/1781 published in EU Official Journal" },
  { date: "July 19, 2024", event: "ESPR entered into force" },
  { date: "July 19, 2026", event: "First delegated act applies — batteries and textiles first in scope" },
  { date: "2026–2027", event: "Electronics, furniture, and construction products delegated acts expected" },
  { date: "2030", event: "All major product categories expected to require DPP" },
];

const ESPR_DATA_FIELDS = [
  "Product identifier (unique product model identifier)",
  "Manufacturer name and contact details",
  "Country of origin / manufacturing location",
  "Material composition (substance list, recycled content %)",
  "Carbon footprint per functional unit",
  "Energy efficiency class and consumption data",
  "Repairability score and spare parts availability",
  "Hazardous substance declarations (REACH compliance)",
  "End-of-life instructions and recyclability data",
  "Conformity assessment body and CE marking reference",
  "SHA-256 hash of the compliance record",
];

const ESPR_PRODUCT_CATEGORIES = [
  { category: "Textiles & Apparel", deadline: "July 2026", status: "Delegated act in progress" },
  { category: "Batteries (EV, Industrial, LMT)", deadline: "Feb 2027", status: "Battery Regulation 2023/1542" },
  { category: "Electronics & ICT Equipment", deadline: "2026–2027", status: "Delegated act expected" },
  { category: "Furniture", deadline: "2027", status: "Delegated act expected" },
  { category: "Construction Products", deadline: "2027–2028", status: "Delegated act expected" },
  { category: "Chemicals & Paints", deadline: "2028", status: "Under consultation" },
];

export default function EUESPRPage() {
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
            <Link href="/eu-espr" className="text-blue-400 font-medium no-underline">EU ESPR</Link>
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
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors no-underline">Digital Product Passports</Link>
              <span className="text-zinc-700 text-xs">/</span>
              <span className="text-zinc-300 text-xs">EU ESPR</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs font-medium mb-5">
              EU Regulation 2024/1781 · In Force July 2024
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              EU ESPR Digital Product Passport:<br />
              <span className="text-blue-400">Complete Compliance Reference</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-2xl">
              The EU Ecodesign for Sustainable Products Regulation (ESPR) — Regulation 2024/1781 — establishes
              the legal framework for Digital Product Passports across all product categories placed on the EU
              market. The first delegated acts apply from July 19, 2026, starting with textiles and batteries.
            </p>
            <TcrComplianceCta
              regulationContext="eu-dpp"
              regulationLabel="EU ESPR Digital Product Passport"
              variant="banner"
            />
          </div>
        </section>

        {/* What ESPR Requires */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">What ESPR Requires</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              ESPR creates a horizontal framework for ecodesign requirements across all product categories.
              Unlike the old Ecodesign Directive (2009/125/EC), which focused only on energy-related products,
              ESPR covers all physical goods placed on the EU market — including imports. The Digital Product
              Passport is the central compliance instrument.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Machine-Readable Data Carrier",
                  desc: "Every product must carry a QR code, RFID, NFC, or URL linking to the DPP dataset. The carrier must be durable and accessible throughout the product's lifecycle.",
                },
                {
                  title: "Unique Product Identifier",
                  desc: "Each product model must have a unique identifier registered in the EU Product Registry (EUDAMED equivalent for non-medical products). This identifier links the physical product to its DPP.",
                },
                {
                  title: "Data Integrity & Authenticity",
                  desc: "The DPP dataset must be stored in a system that ensures data integrity and prevents unauthorised modification. SHA-256 cryptographic hashing provides tamper-evident proof.",
                },
                {
                  title: "Long-Term Accessibility",
                  desc: "DPP data must remain accessible for the full product lifetime plus 10 years. Manufacturers are responsible for ensuring continuity even after business cessation.",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <h3 className="text-white text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Data Fields */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">Required DPP Data Fields</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The specific data fields required vary by product category and delegated act. The following
              fields are common across most ESPR delegated acts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {ESPR_DATA_FIELDS.map((field, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                  <div className="w-4 h-4 rounded-full bg-blue-950 border border-blue-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 text-xs leading-relaxed">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Category Timeline */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">Product Category Deadlines</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              ESPR applies through delegated acts — secondary legislation that sets product-specific
              requirements. The European Commission publishes delegated acts on a rolling basis.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ borderBottom: "1px solid oklch(0.22 0.008 240)" }}>
                    <th className="text-left text-zinc-500 font-medium pb-3 pr-6">Product Category</th>
                    <th className="text-left text-zinc-500 font-medium pb-3 pr-6">DPP Deadline</th>
                    <th className="text-left text-zinc-500 font-medium pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ESPR_PRODUCT_CATEGORIES.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid oklch(0.15 0.008 240)" }}>
                      <td className="text-zinc-200 py-3 pr-6 font-medium">{row.category}</td>
                      <td className="text-blue-400 py-3 pr-6 font-semibold">{row.deadline}</td>
                      <td className="text-zinc-400 py-3">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-6">ESPR Implementation Timeline</h2>
            <div className="relative pl-6 space-y-0">
              {ESPR_TIMELINE.map((item, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  {i < ESPR_TIMELINE.length - 1 && (
                    <div className="absolute left-[-13px] top-5 bottom-0 w-px bg-zinc-800" />
                  )}
                  <div className="absolute left-[-17px] top-1.5 w-2 h-2 rounded-full bg-blue-500 border-2 border-zinc-900" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <span className="text-blue-400 text-xs font-semibold shrink-0 w-28">{item.date}</span>
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
              regulationContext="eu-dpp"
              regulationLabel="EU ESPR Digital Product Passport"
              variant="card"
            />
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-10" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-4">Related DPP References</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/battery-passport" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs transition-colors no-underline">
                Battery Passport →
              </Link>
              <Link href="/textile-traceability" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-xs transition-colors no-underline">
                Textile Traceability →
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
