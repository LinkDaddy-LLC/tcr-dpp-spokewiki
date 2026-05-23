import Navigation from "@/components/Navigation";
import { Link } from "wouter";

const WIKI_ARTICLES = [
  {
    slug: "what-is-a-digital-product-passport",
    href: "/wiki/what-is-a-digital-product-passport",
    title: "What Is a Digital Product Passport?",
    description: "The definitive reference on DPP architecture, legal basis, data carrier formats, and the EU mandate timeline from 2026 to 2030.",
    category: "Foundation",
    categoryColor: "#F59E0B",
    readTime: "12 min",
    priority: true,
  },
  {
    slug: "eu-espr-regulation",
    href: "/wiki/eu-espr-regulation",
    title: "EU ESPR Regulation 2024/1781",
    description: "Complete breakdown of the Ecodesign for Sustainable Products Regulation — product scope, delegated acts, DPP data requirements, and enforcement.",
    category: "EU Regulation",
    categoryColor: "#3B82F6",
    readTime: "15 min",
    priority: true,
  },
  {
    slug: "espr-product-categories",
    href: "/wiki/espr-product-categories",
    title: "ESPR Product Categories & Timelines",
    description: "Which product categories fall under ESPR, when delegated acts apply, and the specific DPP data fields required per category.",
    category: "EU Regulation",
    categoryColor: "#3B82F6",
    readTime: "10 min",
    priority: false,
  },
  {
    slug: "battery-carbon-footprint",
    href: "/wiki/battery-carbon-footprint",
    title: "Battery Carbon Footprint & EU Battery Regulation",
    description: "EU Battery Regulation 2023/1542 carbon intensity calculation methodology, LCA requirements, and DPP data fields for EV and industrial batteries.",
    category: "Battery Passport",
    categoryColor: "#22C55E",
    readTime: "11 min",
    priority: false,
  },
  {
    slug: "sha-256-hashing-explained",
    href: "/wiki/sha-256-hashing-explained",
    title: "SHA-256 Hashing for Compliance Records",
    description: "How cryptographic hashing creates tamper-evident compliance records, why SHA-256 is the standard for DPP integrity, and implementation patterns.",
    category: "Technical",
    categoryColor: "#A78BFA",
    readTime: "9 min",
    priority: true,
  },
  {
    slug: "customs-holds-dpp",
    href: "/wiki/customs-holds-dpp",
    title: "Customs Holds & Missing DPP Documentation",
    description: "How absent or non-compliant DPP data triggers customs holds, demurrage charges, and import license suspensions across major trade corridors.",
    category: "Compliance Risk",
    categoryColor: "#EF4444",
    readTime: "8 min",
    priority: false,
  },
  {
    slug: "cold-chain-integrity-log",
    href: "/wiki/cold-chain-integrity-log",
    title: "Cold Chain Integrity Log",
    description: "Temperature excursion recording, SHA-256 sealed cold chain logs, and how DPP data fields capture refrigerated transport compliance.",
    category: "Supply Chain",
    categoryColor: "#06B6D4",
    readTime: "9 min",
    priority: false,
  },
  {
    slug: "eudr-compliance-sa-citrus",
    href: "/wiki/eudr-compliance-sa-citrus",
    title: "EUDR Compliance for SA Citrus Exporters",
    description: "EU Deforestation Regulation requirements for South African citrus — geolocation data, due diligence statements, and DPP integration.",
    category: "EUDR",
    categoryColor: "#F59E0B",
    readTime: "10 min",
    priority: false,
  },
  {
    slug: "globalgap-digital-link",
    href: "/wiki/globalgap-digital-link",
    title: "GLOBALG.A.P. Digital Link & DPP",
    description: "How GLOBALG.A.P. certification data integrates with Digital Product Passports via GS1 Digital Link and QR code data carriers.",
    category: "Standards",
    categoryColor: "#10B981",
    readTime: "8 min",
    priority: false,
  },
  {
    slug: "pesticide-mrl-compliance",
    href: "/wiki/pesticide-mrl-compliance",
    title: "Pesticide MRL Compliance Records",
    description: "Maximum Residue Level documentation requirements, laboratory test result hashing, and DPP fields for pesticide compliance in fresh produce.",
    category: "Agri-Compliance",
    categoryColor: "#84CC16",
    readTime: "9 min",
    priority: false,
  },
  {
    slug: "phytosanitary-digital-twin",
    href: "/wiki/phytosanitary-digital-twin",
    title: "Phytosanitary Digital Twin",
    description: "Creating a cryptographically sealed digital twin of phytosanitary certificates — how DPP architecture prevents certificate fraud.",
    category: "Agri-Compliance",
    categoryColor: "#84CC16",
    readTime: "10 min",
    priority: false,
  },
  {
    slug: "agri-logistics-carbon-tracker",
    href: "/wiki/agri-logistics-carbon-tracker",
    title: "Agri-Logistics Carbon Tracker",
    description: "Scope 3 emissions tracking for agricultural supply chains, carbon footprint per ton-km calculations, and DPP carbon data fields.",
    category: "Sustainability",
    categoryColor: "#22C55E",
    readTime: "9 min",
    priority: false,
  },
  {
    slug: "ethical-trade-siza-hash",
    href: "/wiki/ethical-trade-siza-hash",
    title: "Ethical Trade & SIZA Hash Records",
    description: "SIZA audit data integration with DPP, SHA-256 sealing of ethical trade certificates, and social compliance data fields.",
    category: "Ethical Trade",
    categoryColor: "#F472B6",
    readTime: "8 min",
    priority: false,
  },
  {
    slug: "water-footprint-per-ton",
    href: "/wiki/water-footprint-per-ton",
    title: "Water Footprint Per Ton",
    description: "Water use intensity calculations for agricultural products, ISO 14046 methodology, and how water footprint data integrates into DPP records.",
    category: "Sustainability",
    categoryColor: "#22C55E",
    readTime: "8 min",
    priority: false,
  },
  {
    slug: "smart-contract-fruit-release",
    href: "/wiki/smart-contract-fruit-release",
    title: "Smart Contract Fruit Release",
    description: "Automated customs release triggered by DPP compliance verification — smart contract architecture for perishable goods clearance.",
    category: "Technical",
    categoryColor: "#A78BFA",
    readTime: "10 min",
    priority: false,
  },
  {
    slug: "cipc-verification-dpp-onboarding",
    href: "/wiki/cipc-verification-dpp-onboarding",
    title: "CIPC Verification & DPP Onboarding",
    description: "South African CIPC company verification as the identity anchor for DPP issuance — onboarding workflow and legal entity validation.",
    category: "Onboarding",
    categoryColor: "#F59E0B",
    readTime: "7 min",
    priority: false,
  },
  {
    slug: "wine-origin-forensic-hash",
    href: "/wiki/wine-origin-forensic-hash",
    title: "Wine Origin Forensic Hash",
    description: "Cryptographic provenance records for wine — appellation of origin, vintage verification, and DPP data fields for the wine sector.",
    category: "Sector Guides",
    categoryColor: "#C084FC",
    readTime: "8 min",
    priority: false,
  },
];

const SCHEMA_ORG = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://digitalproductpassports.co.za/#website",
      "url": "https://digitalproductpassports.co.za/",
      "name": "Digital Product Passports",
      "description": "The world's most comprehensive knowledge hub for Digital Product Passports — EU ESPR, Battery Regulation, Textile Traceability, and supply chain compliance.",
      "publisher": { "@id": "https://digitalproductpassports.co.za/#organization" },
      "inLanguage": "en",
    },
    {
      "@type": "Organization",
      "@id": "https://digitalproductpassports.co.za/#organization",
      "name": "Digital Product Passports Knowledge Hub",
      "url": "https://digitalproductpassports.co.za/",
      "sameAs": ["https://tradecompliancerecords.com", "https://linkdaddybuild.com"],
      "founder": {
        "@type": "Person",
        "@id": "https://anthonyjamespeacock.com/#person",
        "name": "Anthony James Peacock",
        "sameAs": "https://www.linkedin.com/in/anthonyjamespeacock/",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://digitalproductpassports.co.za/#collection",
      "name": "Digital Product Passports — Complete Reference Library",
      "url": "https://digitalproductpassports.co.za/",
      "description": "17 authoritative reference articles covering EU ESPR, Battery Passport, Textile Traceability, SHA-256 compliance records, and global DPP implementation.",
      "isPartOf": { "@id": "https://digitalproductpassports.co.za/#website" },
    },
  ],
};

const CATEGORIES_ORDER = [
  "EU Regulation", "Battery Passport", "Technical", "Compliance Risk",
  "Supply Chain", "EUDR", "Standards", "Agri-Compliance",
  "Sustainability", "Ethical Trade", "Onboarding", "Sector Guides",
];

export default function WikiHomePage() {
  const priorityArticles = WIKI_ARTICLES.filter((a) => a.priority);
  const regularArticles = WIKI_ARTICLES.filter((a) => !a.priority);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_ORG) }}
      />
      <div style={{ minHeight: "100vh", backgroundColor: "oklch(0.10 0.005 240)", color: "oklch(0.92 0.005 65)" }}>
        <Navigation />

        {/* Hero */}
        <section style={{ borderBottom: "1px solid oklch(0.25 0.008 240)", padding: "3.5rem 0 3rem" }}>
          <div className="container max-w-6xl">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <span style={{ display: "inline-block", width: 28, height: 2, background: "oklch(0.75 0.18 65)" }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "oklch(0.55 0.010 65)", textTransform: "uppercase" }}>
                Global Reference Authority · 17 Articles
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, color: "oklch(0.92 0.005 65)", marginBottom: "1.25rem", maxWidth: "680px" }}>
              Digital Product Passports
              <span style={{ display: "block", color: "oklch(0.75 0.18 65)" }}>Complete Reference Library</span>
            </h1>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "oklch(0.65 0.010 65)", maxWidth: "620px", marginBottom: "2rem" }}>
              The EU mandates machine-readable Digital Product Passports for every industrial, EV, and LMT product from 2026. This reference covers the full regulatory stack — EU ESPR 2024/1781, Battery Regulation 2023/1542, Textile Traceability, and SHA-256 cryptographic compliance records.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {[
                { value: "17", label: "Reference Articles" },
                { value: "EU 2024/1781", label: "Primary Regulation" },
                { value: "July 2026", label: "First DPP Deadline" },
                { value: "SHA-256", label: "Integrity Standard" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "oklch(0.75 0.18 65)" }}>{stat.value}</div>
                  <div style={{ fontSize: "0.75rem", color: "oklch(0.55 0.010 65)", marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Priority / Start Here */}
        <section style={{ padding: "3rem 0 2rem" }}>
          <div className="container max-w-6xl">
            <SectionHeader label="Start Here — Foundation Articles" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {priorityArticles.map((a) => <ArticleCard key={a.slug} article={a} featured />)}
            </div>
          </div>
        </section>

        {/* Articles by category */}
        {CATEGORIES_ORDER.map((cat) => {
          const articles = regularArticles.filter((a) => a.category === cat);
          if (articles.length === 0) return null;
          return (
            <section key={cat} style={{ padding: "1.5rem 0" }}>
              <div className="container max-w-6xl">
                <SectionHeader label={cat} color={articles[0].categoryColor} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                  {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
                </div>
              </div>
            </section>
          );
        })}

        {/* TCR CTA */}
        <section style={{ padding: "3.5rem 0 4rem", borderTop: "1px solid oklch(0.25 0.008 240)", marginTop: "2rem" }}>
          <div className="container max-w-6xl">
            <div style={{ background: "oklch(0.14 0.006 240)", border: "1px solid oklch(0.25 0.008 240)", borderRadius: "0.75rem", padding: "2.5rem", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ maxWidth: "520px" }}>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "oklch(0.75 0.18 65)", textTransform: "uppercase", marginBottom: "0.75rem" }}>Create Your DPP Record</div>
                <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "oklch(0.92 0.005 65)", marginBottom: "0.75rem" }}>Your DPP Needs a Tamper-Evident Hash Record</h2>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "oklch(0.65 0.010 65)" }}>
                  EU Digital Product Passport compliance requires a cryptographically sealed document trail. Trade Compliance Records creates an immutable SHA-256 hash of your compliance declaration — your forensic defence against asset forfeiture.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "flex-start" }}>
                <a href="https://tradecompliancerecords.com/create?type=digital-product-passport" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "oklch(0.75 0.18 65)", color: "oklch(0.09 0.005 240)", borderRadius: "0.5rem", fontWeight: 700, fontSize: "0.9375rem", textDecoration: "none" }}>
                  Create a Record →
                </a>
                <a href="https://tradecompliancerecords.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8125rem", color: "oklch(0.55 0.010 65)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  tradecompliancerecords.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid oklch(0.25 0.008 240)", padding: "1.5rem 0" }}>
          <div className="container max-w-6xl">
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: "0.8125rem", color: "oklch(0.45 0.008 65)" }}>DigitalProductPassports.co.za — Informational reference only · Not legal advice</p>
              <p style={{ fontSize: "0.8125rem", color: "oklch(0.45 0.008 65)" }}>
                Powered by{" "}
                <a href="https://tradecompliancerecords.com" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.75 0.18 65)", textDecoration: "none" }}>TradeComplianceRecords.com</a>
                {" · "}LinkDaddy® LLC
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function SectionHeader({ label, color }: { label: string; color?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
      <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: color || "oklch(0.55 0.010 65)", textTransform: "uppercase", fontWeight: 600 }}>{label}</span>
      <span style={{ flex: 1, height: 1, background: "oklch(0.25 0.008 240)" }} />
    </div>
  );
}

function ArticleCard({ article, featured = false }: { article: typeof WIKI_ARTICLES[0]; featured?: boolean }) {
  return (
    <Link href={article.href} className="no-underline block group">
      <div
        style={{ background: featured ? "oklch(0.14 0.006 240)" : "oklch(0.12 0.005 240)", border: `1px solid ${featured ? "oklch(0.28 0.008 240)" : "oklch(0.22 0.007 240)"}`, borderRadius: "0.625rem", padding: featured ? "1.5rem" : "1.25rem", height: "100%", transition: "border-color 0.15s ease, background 0.15s ease", cursor: "pointer" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = article.categoryColor + "60"; (e.currentTarget as HTMLDivElement).style.background = "oklch(0.16 0.006 240)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = featured ? "oklch(0.28 0.008 240)" : "oklch(0.22 0.007 240)"; (e.currentTarget as HTMLDivElement).style.background = featured ? "oklch(0.14 0.006 240)" : "oklch(0.12 0.005 240)"; }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: article.categoryColor, background: article.categoryColor + "18", padding: "0.2rem 0.5rem", borderRadius: "0.25rem" }}>{article.category}</span>
          <span style={{ fontSize: "0.7rem", color: "oklch(0.45 0.008 65)" }}>{article.readTime}</span>
        </div>
        <h3 style={{ fontSize: featured ? "1.0625rem" : "0.9375rem", fontWeight: 700, color: "oklch(0.92 0.005 65)", marginBottom: "0.5rem", lineHeight: 1.35 }}>{article.title}</h3>
        <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "oklch(0.58 0.010 65)", margin: 0 }}>{article.description}</p>
        <div style={{ marginTop: "1rem", fontSize: "0.8125rem", color: article.categoryColor, display: "flex", alignItems: "center", gap: "0.25rem" }}>
          Read article
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </div>
      </div>
    </Link>
  );
}
