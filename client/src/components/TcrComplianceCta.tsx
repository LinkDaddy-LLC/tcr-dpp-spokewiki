/**
 * TcrComplianceCta.tsx — Regulation-Context-Aware Compliance CTA Widget
 * Injects a contextual call-to-action linking to TradeComplianceRecords.com
 * with regulation-specific context for each wiki hub page.
 *
 * FIF Protocol: Infrastructure layer — recursive authority bridge to TCR root.
 * Schema.org: WebSite + SiteNavigationElement
 * Patent compliance: US6285999B1 (Recursive Authority)
 */

interface TcrComplianceCtaProps {
  /** Regulation context slug — e.g. "eu-dpp", "cbam", "battery-passport" */
  regulationContext?: string;
  /** Display label for the regulation */
  regulationLabel?: string;
  /** Variant: "banner" (full-width) | "card" (sidebar card) | "inline" (text link) */
  variant?: "banner" | "card" | "inline";
}

const REGULATION_COPY: Record<string, { headline: string; sub: string; cta: string }> = {
  "eu-dpp": {
    headline: "Your DPP Needs a Tamper-Evident Hash Record",
    sub: "EU Digital Product Passport compliance requires a cryptographically sealed document trail. Create your SHA-256 verified record in 60 seconds.",
    cta: "Create DPP Record →",
  },
  "cbam": {
    headline: "CBAM Embedded Emissions Declarations Must Be Verifiable",
    sub: "Carbon Border Adjustment Mechanism requires auditable emissions declarations. Hash-seal your CBAM compliance record before the EU deadline.",
    cta: "Create CBAM Record →",
  },
  "battery-passport": {
    headline: "Battery Passport Compliance Requires a Hash-Sealed Record",
    sub: "EU Battery Regulation mandates a digital passport for every battery cell. Create a SHA-256 verified compliance record that customs can verify in real time.",
    cta: "Create Battery Record →",
  },
  "uflpa": {
    headline: "UFLPA Supply Chain Records Must Be Hash-Verifiable",
    sub: "CBP requires importers to prove goods are free from Xinjiang forced labour. Create a tamper-evident supply chain compliance record.",
    cta: "Create UFLPA Record →",
  },
  "eudr": {
    headline: "EUDR Deforestation-Free Declarations Need a Sealed Record",
    sub: "EU Deforestation Regulation requires due diligence statements for every shipment. Hash-seal your EUDR compliance record before export.",
    cta: "Create EUDR Record →",
  },
  "reach": {
    headline: "REACH Chemical Safety Data Sheets Must Be Verifiable",
    sub: "EU REACH requires importers to hold current SDS for every chemical substance. Create a SHA-256 sealed REACH compliance record.",
    cta: "Create REACH Record →",
  },
  "default": {
    headline: "This Regulation Requires a Hash-Sealed Compliance Record",
    sub: "Trade Compliance Records creates SHA-256 cryptographic proof of your compliance documents — verifiable by any customs officer, auditor, or buyer in real time.",
    cta: "Create Compliance Record →",
  },
};

export default function TcrComplianceCta({
  regulationContext = "default",
  regulationLabel,
  variant = "card",
}: TcrComplianceCtaProps) {
  const copy = REGULATION_COPY[regulationContext] || REGULATION_COPY["default"];
  const targetUrl = `https://tradecompliancerecords.com/create${regulationContext !== "default" ? `?regulation=${regulationContext}` : ""}`;

  if (variant === "inline") {
    return (
      <span className="inline">
        {" "}
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors font-medium"
        >
          Create a SHA-256 verified compliance record at TradeComplianceRecords.com
        </a>
        .
      </span>
    );
  }

  if (variant === "banner") {
    return (
      <div className="w-full rounded-lg border border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-zinc-900/60 p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-emerald-400 font-semibold text-sm">{copy.headline}</div>
          <div className="text-zinc-400 text-xs mt-1 leading-relaxed">{copy.sub}</div>
        </div>
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
        >
          {copy.cta}
        </a>
      </div>
    );
  }

  // Default: card
  return (
    <div className="rounded-xl border border-emerald-500/25 bg-zinc-900/80 overflow-hidden">
      {/* Header stripe */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
      <div className="p-4 space-y-3">
        {/* Shield icon + label */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-emerald-950 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            {regulationLabel || "Compliance Record Required"}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-white text-sm font-semibold leading-snug">{copy.headline}</h3>

        {/* Sub-copy */}
        <p className="text-zinc-400 text-xs leading-relaxed">{copy.sub}</p>

        {/* CTA button */}
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
        >
          {copy.cta}
        </a>

        {/* Trust footer */}
        <div className="flex items-center justify-center gap-1 text-zinc-600 text-[10px]">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>SHA-256 · tradecompliancerecords.com</span>
        </div>
      </div>
    </div>
  );
}
