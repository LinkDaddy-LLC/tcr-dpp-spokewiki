import TcrComplianceCta from "@/components/TcrComplianceCta";
import { Link } from "wouter";

const BATTERY_TIMELINE = [
  { date: "July 28, 2023", event: "EU Battery Regulation 2023/1542 published — repeals Directive 2006/66/EC" },
  { date: "August 17, 2023", event: "Regulation entered into force" },
  { date: "February 18, 2024", event: "Most provisions applicable — CE marking, due diligence requirements" },
  { date: "August 18, 2025", event: "Carbon footprint declaration mandatory for EV and industrial batteries" },
  { date: "February 18, 2027", event: "Battery Passport mandatory for EV, industrial, and LMT batteries ≥ 2 kWh" },
  { date: "August 18, 2027", event: "Carbon footprint performance classes apply" },
  { date: "2030", event: "Minimum recycled content thresholds apply (cobalt 12%, lithium 4%, nickel 4%)" },
];

const BATTERY_PASSPORT_FIELDS = [
  "Battery model identifier and batch/serial number",
  "Manufacturer name, address, and EU authorised representative",
  "Carbon footprint per kWh (lifecycle assessment)",
  "Carbon footprint performance class (A–E)",
  "Recycled content by material (cobalt, lithium, nickel, lead)",
  "Supply chain due diligence report reference",
  "State of health and expected lifetime",
  "Capacity (Ah) and rated energy (kWh)",
  "Minimum rated capacity and voltage",
  "Original power capability",
  "Hazardous substance declarations",
  "Responsible sourcing certifications",
  "End-of-life instructions and collection point information",
  "SHA-256 hash of the compliance record",
];

const BATTERY_CATEGORIES = [
  { type: "EV Batteries", threshold: "All EV batteries", passport: "Feb 2027", notes: "Carbon footprint declaration from Aug 2025" },
  { type: "Industrial Batteries", threshold: "≥ 2 kWh capacity", passport: "Feb 2027", notes: "Includes stationary storage" },
  { type: "LMT Batteries", threshold: "Light means of transport (e-bikes, scooters)", passport: "Feb 2027", notes: "Excludes portable batteries" },
  { type: "Portable Batteries", threshold: "< 2 kWh, consumer devices", passport: "Not required (2027)", notes: "Separate labelling requirements apply" },
  { type: "SLI Batteries", threshold: "Starting, lighting, ignition", passport: "Under review", notes: "Separate delegated act expected" },
];

export default function BatteryPassportPage() {
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
            <Link href="/battery-passport" className="text-emerald-400 font-medium no-underline">Battery Passport</Link>
            <Link href="/textile-traceability" className="hover:text-white transition-colors no-underline">Textile Traceability</Link>
          </nav>
          <a
            href="https://tradecompliancerecords.com/create?type=digital-product-passport"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
          >
            Create Battery Record →
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
              <span className="text-zinc-300 text-xs">Battery Passport</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-medium mb-5">
              EU Regulation 2023/1542 · Mandatory from February 2027
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              EU Battery Passport:<br />
              <span className="text-emerald-400">Complete Compliance Reference</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed mb-6 max-w-2xl">
              The EU Battery Regulation 2023/1542 mandates a Digital Product Passport for every industrial,
              EV, and light means of transport (LMT) battery placed on the EU market from February 18, 2027.
              The Battery Passport must include carbon footprint, recycled content, supply chain due diligence,
              and state-of-health data — all cryptographically verifiable.
            </p>
            <TcrComplianceCta
              regulationContext="battery-passport"
              regulationLabel="EU Battery Passport"
              variant="banner"
            />
          </div>
        </section>

        {/* Battery Categories */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">Battery Categories & Passport Requirements</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The Battery Regulation applies differently depending on battery type and capacity. The passport
              requirement is not universal — it targets industrial, EV, and LMT batteries above the 2 kWh threshold.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ borderBottom: "1px solid oklch(0.22 0.008 240)" }}>
                    <th className="text-left text-zinc-500 font-medium pb-3 pr-4">Battery Type</th>
                    <th className="text-left text-zinc-500 font-medium pb-3 pr-4">Scope</th>
                    <th className="text-left text-zinc-500 font-medium pb-3 pr-4">Passport Deadline</th>
                    <th className="text-left text-zinc-500 font-medium pb-3">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {BATTERY_CATEGORIES.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid oklch(0.15 0.008 240)" }}>
                      <td className="text-zinc-200 py-3 pr-4 font-medium">{row.type}</td>
                      <td className="text-zinc-400 py-3 pr-4">{row.threshold}</td>
                      <td className="text-emerald-400 py-3 pr-4 font-semibold">{row.passport}</td>
                      <td className="text-zinc-500 py-3">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Required Data Fields */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-3">Battery Passport Data Requirements</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The Battery Regulation specifies 14 categories of information that must be included in the
              Battery Passport. The data must be accessible via a QR code on the battery and stored in a
              system ensuring data integrity and long-term accessibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {BATTERY_PASSPORT_FIELDS.map((field, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
                  <div className="w-4 h-4 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-zinc-300 text-xs leading-relaxed">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Carbon Footprint Requirements */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-4">Carbon Footprint Declaration</h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The carbon footprint declaration is one of the most technically demanding requirements of the
              Battery Regulation. It applies to EV and industrial batteries from August 2025 — before the
              full Battery Passport mandate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Lifecycle Assessment Required",
                  desc: "Carbon footprint must be calculated across the full lifecycle: raw material extraction, manufacturing, distribution, use phase, and end-of-life. ISO 14040/14044 methodology applies.",
                },
                {
                  title: "Performance Classes (A–E)",
                  desc: "From August 2027, batteries must be assigned a carbon footprint performance class (A = best, E = worst). Class A batteries will have a market access advantage.",
                },
                {
                  title: "Third-Party Verification",
                  desc: "Carbon footprint declarations must be verified by an accredited conformity assessment body. The verification certificate reference must be included in the Battery Passport.",
                },
                {
                  title: "Maximum Threshold",
                  desc: "From 2028, batteries exceeding the maximum carbon footprint threshold will be prohibited from the EU market. Thresholds are set per product category by delegated act.",
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

        {/* Implementation Timeline */}
        <section className="py-14" style={{ borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container max-w-4xl">
            <h2 className="text-white text-xl font-bold mb-6">Battery Regulation Implementation Timeline</h2>
            <div className="relative pl-6 space-y-0">
              {BATTERY_TIMELINE.map((item, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  {i < BATTERY_TIMELINE.length - 1 && (
                    <div className="absolute left-[-13px] top-5 bottom-0 w-px bg-zinc-800" />
                  )}
                  <div className="absolute left-[-17px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-zinc-900" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <span className="text-emerald-400 text-xs font-semibold shrink-0 w-32">{item.date}</span>
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
              regulationContext="battery-passport"
              regulationLabel="EU Battery Passport"
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
