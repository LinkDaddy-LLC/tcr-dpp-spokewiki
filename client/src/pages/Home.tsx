import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Streamdown } from 'streamdown';
import TcrComplianceCta from "@/components/TcrComplianceCta";
import TrustSealBadge from "@/components/TrustSealBadge";

/**
 * All content in this page are only for example, replace with your own feature implementation
 * When building pages, remember your instructions in Frontend Best Practices, Design Guide and Common Pitfalls
 */
export default function Home() {
  // If theme is switchable in App.tsx, we can implement theme toggling like this:
  // const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "oklch(0.09 0.008 240)", color: "oklch(0.92 0.005 240)" }}>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/30 text-blue-400 text-xs font-medium mb-6">
              EU ESPR Regulation 2024/1781 · SHA-256 Verified
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              ESPR Compliance<br />
              <span className="text-blue-400">Digital Product Passports</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              The EU Ecodesign for Sustainable Products Regulation (ESPR) mandates Digital Product
              Passports for all product categories entering the EU market from July 19, 2026.
              Every DPP requires a cryptographically-hashed, machine-readable compliance record
              verifiable by EU customs and market surveillance authorities.
            </p>
            <a
              href="https://tradecompliancerecords.com/create?regulation=eu-dpp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Create DPP Compliance Record →
            </a>
          </div>
        </section>

        <section className="py-12" style={{ backgroundColor: "oklch(0.09 0.008 240)", borderTop: "1px solid oklch(0.18 0.008 240)" }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <TcrComplianceCta
                  regulationContext="eu-dpp"
                  regulationLabel="EU ESPR Digital Product Passport"
                  variant="banner"
                />
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <p className="text-zinc-500 text-xs mb-1">Embed this seal on your site:</p>
                <TrustSealBadge
                  entitySlug="esprregistry"
                  entityName="ESPR Registry"
                  showEmbed={false}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "oklch(0.08 0.008 240)", borderTop: "1px solid oklch(0.18 0.008 240)" }}>
        <div className="container py-8">
          <div className="text-zinc-500 text-xs text-center">
            ESPR Registry · Powered by{" "}
            <a href="https://tradecompliancerecords.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors">TradeComplianceRecords.com</a>
            {" · "}
            <a href="https://linkdaddy.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">LinkDaddy® LLC</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
