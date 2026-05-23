/**
 * TrustSealBadge.tsx — Embeddable SVG Cryptographic Trust Seal
 * Renders a SHA-256 hardened trust seal for partner profiles.
 * Provides copy-to-clipboard embed code for external site injection.
 *
 * FIF Protocol: Foundation layer — identity anchor for all partner nodes.
 * Schema.org: Organization + CertificationCredential
 * Patent compliance: US7716216 (Reasonable Surfer) + US6285999B1 (Recursive Authority)
 */
import { useState } from "react";
import { Shield, Copy, Check, ExternalLink } from "lucide-react";

interface TrustSealBadgeProps {
  /** Partner or entity slug — used to build the verify URL */
  entitySlug?: string;
  /** Display name shown inside the seal */
  entityName?: string;
  /** SHA-256 hash of the compliance record (optional — shows "Pending" if absent) */
  hash?: string;
  /** Compact mode: renders a smaller inline badge */
  compact?: boolean;
  /** Show the embed code panel below the badge */
  showEmbed?: boolean;
}

export default function TrustSealBadge({
  entitySlug = "tcr-verified",
  entityName = "Verified Entity",
  hash,
  compact = false,
  showEmbed = false,
}: TrustSealBadgeProps) {
  const [copied, setCopied] = useState(false);

  const verifyUrl = `https://tradecompliancerecords.com/verify${hash ? `?hash=${hash}` : ""}`;
  const shortHash = hash ? `${hash.slice(0, 8)}…${hash.slice(-8)}` : "PENDING";

  const embedCode = `<!-- TCR Trust Seal — ${entityName} -->
<a href="${verifyUrl}" target="_blank" rel="noopener noreferrer" 
   style="display:inline-block;text-decoration:none;">
  <img 
    src="https://tradecompliancerecords.com/trust-seal.svg?slug=${entitySlug}" 
    alt="Trade Compliance Records — SHA-256 Verified" 
    width="160" height="52"
    style="border:0;"
  />
</a>
<!-- Schema.org CertificationCredential -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CertificationCredential",
  "name": "TCR SHA-256 Trust Seal",
  "credentialSubject": {
    "@type": "Organization",
    "name": "${entityName}",
    "url": "${verifyUrl}"
  },
  "issuer": {
    "@type": "Organization",
    "name": "Trade Compliance Records",
    "url": "https://tradecompliancerecords.com",
    "@id": "https://tradecompliancerecords.com/#organization"
  },
  "credentialStatus": {
    "@type": "CredentialStatus",
    "id": "${verifyUrl}",
    "type": "SHA256HashVerification"
  }
}
<\/script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (compact) {
    return (
      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-emerald-500/40 bg-emerald-950/30 text-emerald-400 text-xs font-mono hover:border-emerald-400 transition-colors"
        title="SHA-256 Verified by Trade Compliance Records"
      >
        <Shield className="w-3 h-3" />
        <span>TCR Verified</span>
      </a>
    );
  }

  return (
    <div className="space-y-4">
      {/* The seal itself */}
      <a
        href={verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-lg border border-emerald-500/40 bg-emerald-950/20 hover:border-emerald-400 hover:bg-emerald-950/40 transition-all group w-full max-w-xs"
      >
        {/* SVG seal */}
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 4L6 12V24C6 34.5 14.1 44.3 24 47C33.9 44.3 42 34.5 42 24V12L24 4Z"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M24 4L6 12V24C6 34.5 14.1 44.3 24 47C33.9 44.3 42 34.5 42 24V12L24 4Z"
            fill="#10b981"
            fillOpacity="0.08"
          />
          <path
            d="M16 24L21 29L32 18"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="8" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
        </svg>

        <div className="text-center">
          <div className="text-emerald-400 font-semibold text-sm">SHA-256 Verified</div>
          <div className="text-emerald-300/70 text-xs mt-0.5 truncate max-w-[200px]">{entityName}</div>
          <div className="text-emerald-500/50 text-[10px] font-mono mt-1">{shortHash}</div>
        </div>

        <div className="flex items-center gap-1 text-emerald-500/60 text-[10px]">
          <span>tradecompliancerecords.com</span>
          <ExternalLink className="w-2.5 h-2.5 group-hover:text-emerald-400 transition-colors" />
        </div>
      </a>

      {/* Embed code panel */}
      {showEmbed && (
        <div className="rounded-lg border border-zinc-700 bg-zinc-900 overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700 bg-zinc-800/50">
            <span className="text-zinc-400 text-xs font-medium">Embed Code</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2 py-1 rounded text-xs text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 text-[10px] text-zinc-400 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {embedCode}
          </pre>
        </div>
      )}
    </div>
  );
}
