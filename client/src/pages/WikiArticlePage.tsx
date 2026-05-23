import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import Navigation from "@/components/Navigation";

interface FaqItem {
  question: string;
  answer: string;
}

interface TermItem {
  name: string;
  description: string;
}

const ARTICLE_META: Record<string, {
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  readTime: string;
  datePublished: string;
  dateModified: string;
  city: string;
  country: string;
}> = {
  "what-is-a-digital-product-passport": {
    title: "What Is a Digital Product Passport?",
    description: "The definitive reference on DPP architecture, legal basis, data carrier formats, and the EU mandate timeline from 2026 to 2030.",
    category: "Foundation",
    categoryColor: "#F59E0B",
    readTime: "12 min",
    datePublished: "2026-05-15",
    dateModified: "2026-05-23",
    city: "BRUSSELS",
    country: "BELGIUM",
  },
  "eu-espr-regulation": {
    title: "EU ESPR Regulation 2024/1781",
    description: "Complete breakdown of the Ecodesign for Sustainable Products Regulation — product scope, delegated acts, DPP data requirements, and enforcement.",
    category: "EU Regulation",
    categoryColor: "#3B82F6",
    readTime: "15 min",
    datePublished: "2026-05-16",
    dateModified: "2026-05-23",
    city: "BRUSSELS",
    country: "BELGIUM",
  },
  "espr-product-categories": {
    title: "ESPR Product Categories & Timelines",
    description: "Which product categories fall under ESPR, when delegated acts apply, and the specific DPP data fields required per category.",
    category: "EU Regulation",
    categoryColor: "#3B82F6",
    readTime: "10 min",
    datePublished: "2026-05-17",
    dateModified: "2026-05-23",
    city: "BRUSSELS",
    country: "BELGIUM",
  },
  "battery-carbon-footprint": {
    title: "Battery Carbon Footprint & EU Battery Regulation",
    description: "EU Battery Regulation 2023/1542 carbon intensity calculation methodology, LCA requirements, and DPP data fields for EV and industrial batteries.",
    category: "Battery Passport",
    categoryColor: "#22C55E",
    readTime: "11 min",
    datePublished: "2026-05-18",
    dateModified: "2026-05-23",
    city: "BRUSSELS",
    country: "BELGIUM",
  },
  "sha-256-hashing-explained": {
    title: "SHA-256 Hashing for Compliance Records",
    description: "How cryptographic hashing creates tamper-evident compliance records, why SHA-256 is the standard for DPP integrity, and implementation patterns.",
    category: "Technical",
    categoryColor: "#A78BFA",
    readTime: "9 min",
    datePublished: "2026-05-15",
    dateModified: "2026-05-23",
    city: "CLEARWATER",
    country: "FLORIDA",
  },
  "customs-holds-dpp": {
    title: "Customs Holds & Missing DPP Documentation",
    description: "How absent or non-compliant DPP data triggers customs holds, demurrage charges, and import license suspensions across major trade corridors.",
    category: "Compliance Risk",
    categoryColor: "#EF4444",
    readTime: "8 min",
    datePublished: "2026-05-19",
    dateModified: "2026-05-23",
    city: "ROTTERDAM",
    country: "NETHERLANDS",
  },
  "cold-chain-integrity-log": {
    title: "Cold Chain Integrity Log",
    description: "Temperature excursion recording, SHA-256 sealed cold chain logs, and how DPP data fields capture refrigerated transport compliance.",
    category: "Supply Chain",
    categoryColor: "#06B6D4",
    readTime: "9 min",
    datePublished: "2026-05-20",
    dateModified: "2026-05-23",
    city: "ROTTERDAM",
    country: "NETHERLANDS",
  },
  "eudr-compliance-sa-citrus": {
    title: "EUDR Compliance for SA Citrus Exporters",
    description: "EU Deforestation Regulation requirements for South African citrus — geolocation data, due diligence statements, and DPP integration.",
    category: "EUDR",
    categoryColor: "#F59E0B",
    readTime: "10 min",
    datePublished: "2026-05-20",
    dateModified: "2026-05-23",
    city: "CAPE TOWN",
    country: "SOUTH AFRICA",
  },
  "globalgap-digital-link": {
    title: "GLOBALG.A.P. Digital Link & DPP",
    description: "How GLOBALG.A.P. certification data integrates with Digital Product Passports via GS1 Digital Link and QR code data carriers.",
    category: "Standards",
    categoryColor: "#10B981",
    readTime: "8 min",
    datePublished: "2026-05-21",
    dateModified: "2026-05-23",
    city: "COLOGNE",
    country: "GERMANY",
  },
  "pesticide-mrl-compliance": {
    title: "Pesticide MRL Compliance Records",
    description: "Maximum Residue Level documentation requirements, laboratory test result hashing, and DPP fields for pesticide compliance in fresh produce.",
    category: "Agri-Compliance",
    categoryColor: "#84CC16",
    readTime: "9 min",
    datePublished: "2026-05-21",
    dateModified: "2026-05-23",
    city: "CAPE TOWN",
    country: "SOUTH AFRICA",
  },
  "phytosanitary-digital-twin": {
    title: "Phytosanitary Digital Twin",
    description: "Creating a cryptographically sealed digital twin of phytosanitary certificates — how DPP architecture prevents certificate fraud.",
    category: "Agri-Compliance",
    categoryColor: "#84CC16",
    readTime: "10 min",
    datePublished: "2026-05-22",
    dateModified: "2026-05-23",
    city: "PRETORIA",
    country: "SOUTH AFRICA",
  },
  "agri-logistics-carbon-tracker": {
    title: "Agri-Logistics Carbon Tracker",
    description: "Scope 3 emissions tracking for agricultural supply chains, carbon footprint per ton-km calculations, and DPP carbon data fields.",
    category: "Sustainability",
    categoryColor: "#22C55E",
    readTime: "9 min",
    datePublished: "2026-05-22",
    dateModified: "2026-05-23",
    city: "JOHANNESBURG",
    country: "SOUTH AFRICA",
  },
  "ethical-trade-siza-hash": {
    title: "Ethical Trade & SIZA Hash Records",
    description: "SIZA audit data integration with DPP, SHA-256 sealing of ethical trade certificates, and social compliance data fields.",
    category: "Ethical Trade",
    categoryColor: "#F472B6",
    readTime: "8 min",
    datePublished: "2026-05-22",
    dateModified: "2026-05-23",
    city: "STELLENBOSCH",
    country: "SOUTH AFRICA",
  },
  "water-footprint-per-ton": {
    title: "Water Footprint Per Ton",
    description: "Water use intensity calculations for agricultural products, ISO 14046 methodology, and how water footprint data integrates into DPP records.",
    category: "Sustainability",
    categoryColor: "#22C55E",
    readTime: "8 min",
    datePublished: "2026-05-22",
    dateModified: "2026-05-23",
    city: "CAPE TOWN",
    country: "SOUTH AFRICA",
  },
  "smart-contract-fruit-release": {
    title: "Smart Contract Fruit Release",
    description: "Automated customs release triggered by DPP compliance verification — smart contract architecture for perishable goods clearance.",
    category: "Technical",
    categoryColor: "#A78BFA",
    readTime: "10 min",
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    city: "CLEARWATER",
    country: "FLORIDA",
  },
  "cipc-verification-dpp-onboarding": {
    title: "CIPC Verification & DPP Onboarding",
    description: "South African CIPC company verification as the identity anchor for DPP issuance — onboarding workflow and legal entity validation.",
    category: "Onboarding",
    categoryColor: "#F59E0B",
    readTime: "7 min",
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    city: "PRETORIA",
    country: "SOUTH AFRICA",
  },
  "wine-origin-forensic-hash": {
    title: "Wine Origin Forensic Hash",
    description: "Cryptographic provenance records for wine — appellation of origin, vintage verification, and DPP data fields for the wine sector.",
    category: "Sector Guides",
    categoryColor: "#C084FC",
    readTime: "8 min",
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    city: "STELLENBOSCH",
    country: "SOUTH AFRICA",
  },
};

function formatDateline(dateStr: string, city: string, country: string): string {
  const d = new Date(dateStr + "T00:00:00Z");
  const formatted = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  return `${city}, ${country} — ${formatted}`;
}

function buildJsonLd(slug: string, meta: typeof ARTICLE_META[string], faqs: FaqItem[], terms: TermItem[]) {
  const url = `https://digitalproductpassports.co.za/wiki/${slug}`;
  const graph: object[] = [
    {
      "@type": "TechArticle",
      "@id": `${url}#article`,
      "headline": meta.title,
      "description": meta.description,
      "url": url,
      "mainEntityOfPage": { "@type": "WebPage", "@id": url },
      "datePublished": meta.datePublished,
      "dateModified": meta.dateModified,
      "author": {
        "@type": "Person",
        "@id": "https://anthonyjamespeacock.com/#person",
        "name": "Anthony James Peacock",
        "jobTitle": "Industrial Infrastructure Architect",
        "sameAs": "https://www.linkedin.com/in/anthonyjamespeacock/",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://digitalproductpassports.co.za/#organization",
        "name": "Digital Product Passports Knowledge Hub",
        "url": "https://digitalproductpassports.co.za/",
      },
      "isPartOf": { "@id": "https://digitalproductpassports.co.za/#website" },
      "about": { "@type": "Thing", "name": "Digital Product Passport" },
      "inLanguage": "en",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitalproductpassports.co.za/" },
        { "@type": "ListItem", "position": 2, "name": "Wiki", "item": "https://digitalproductpassports.co.za/wiki" },
        { "@type": "ListItem", "position": 3, "name": meta.title, "item": url },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
      })),
    });
  }

  if (terms.length > 0) {
    graph.push({
      "@type": "DefinedTermSet",
      "@id": `${url}#termset`,
      "name": `${meta.title} — Defined Terms`,
      "hasDefinedTerm": terms.map((t) => ({
        "@type": "DefinedTerm",
        "name": t.name,
        "description": t.description,
        "inDefinedTermSet": `${url}#termset`,
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export default function WikiArticlePage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const meta = ARTICLE_META[slug];

  const [bodyHtml, setBodyHtml] = useState<string>("");
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [terms, setTerms] = useState<TermItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug || !meta) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    setLoading(true);
    setNotFound(false);

    const fetchBody = fetch(`/wiki-bodies/${slug}.html`).then((r) => r.ok ? r.text() : Promise.reject("not found"));
    const fetchFaqs = fetch(`/wiki-bodies/${slug}-faqs.json`).then((r) => r.ok ? r.json() : []).catch(() => []);
    const fetchTerms = fetch(`/wiki-bodies/${slug}-terms.json`).then((r) => r.ok ? r.json() : []).catch(() => []);

    Promise.all([fetchBody, fetchFaqs, fetchTerms])
      .then(([html, faqData, termData]) => {
        setBodyHtml(html);
        setFaqs(Array.isArray(faqData) ? faqData : []);
        setTerms(Array.isArray(termData) ? termData : []);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (!meta || notFound) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "oklch(0.10 0.005 240)", color: "oklch(0.92 0.005 65)" }}>
        <Navigation />
        <div className="container max-w-4xl" style={{ padding: "4rem 1rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>Article Not Found</h1>
          <Link href="/wiki" style={{ color: "oklch(0.75 0.18 65)" }}>← Back to all articles</Link>
        </div>
      </div>
    );
  }

  const jsonLd = buildJsonLd(slug, meta, faqs, terms);
  const dateline = formatDateline(meta.datePublished, meta.city, meta.country);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ minHeight: "100vh", backgroundColor: "oklch(0.10 0.005 240)", color: "oklch(0.92 0.005 65)" }}>
        <Navigation />

        {/* Article header */}
        <header style={{ borderBottom: "1px solid oklch(0.25 0.008 240)", padding: "2.5rem 0 2rem" }}>
          <div className="container max-w-4xl">
            {/* Breadcrumb */}
            <nav style={{ fontSize: "0.75rem", color: "oklch(0.50 0.008 65)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <Link href="/" style={{ color: "oklch(0.50 0.008 65)", textDecoration: "none" }}>Home</Link>
              <span>›</span>
              <Link href="/wiki" style={{ color: "oklch(0.50 0.008 65)", textDecoration: "none" }}>Wiki</Link>
              <span>›</span>
              <span style={{ color: "oklch(0.70 0.008 65)" }}>{meta.title}</span>
            </nav>

            {/* Category badge */}
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, color: meta.categoryColor, background: meta.categoryColor + "18", padding: "0.2rem 0.5rem", borderRadius: "0.25rem", marginBottom: "1rem", display: "inline-block" }}>
              {meta.category}
            </span>

            <h1 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, lineHeight: 1.2, color: "oklch(0.92 0.005 65)", marginBottom: "1rem", marginTop: "0.5rem" }}>
              {meta.title}
            </h1>

            <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "oklch(0.65 0.010 65)", marginBottom: "1.5rem", maxWidth: "640px" }}>
              {meta.description}
            </p>

            {/* Meta row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", fontSize: "0.8rem", color: "oklch(0.50 0.008 65)" }}>
              <span>
                <span style={{ color: "oklch(0.75 0.18 65)", fontFamily: "monospace", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                  {dateline}
                </span>
              </span>
              <span>{meta.readTime} read</span>
              <span>Updated {new Date(meta.dateModified + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}</span>
            </div>
          </div>
        </header>

        {/* Article body + sidebar */}
        <div className="container max-w-4xl" style={{ padding: "2.5rem 1rem 4rem", display: "grid", gridTemplateColumns: "1fr min(260px, 30%)", gap: "3rem", alignItems: "start" }}>
          {/* Main content */}
          <main>
            {loading ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} style={{ height: i % 3 === 0 ? 24 : 16, background: "oklch(0.19 0.007 240)", borderRadius: 4, width: i % 2 === 0 ? "100%" : "80%" }} />
                ))}
              </div>
            ) : (
              <article
                className="wiki-body"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <section style={{ marginTop: "3rem", borderTop: "1px solid oklch(0.25 0.008 240)", paddingTop: "2rem" }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "oklch(0.92 0.005 65)", marginBottom: "1.5rem" }}>
                  Frequently Asked Questions
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {faqs.map((faq, i) => (
                    <div key={i} style={{ background: "oklch(0.14 0.006 240)", border: "1px solid oklch(0.22 0.007 240)", borderRadius: "0.5rem", padding: "1.25rem" }}>
                      <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "oklch(0.92 0.005 65)", marginBottom: "0.625rem" }}>{faq.question}</h3>
                      <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "oklch(0.65 0.010 65)", margin: 0 }}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Defined Terms */}
            {terms.length > 0 && (
              <section style={{ marginTop: "2.5rem", borderTop: "1px solid oklch(0.25 0.008 240)", paddingTop: "2rem" }}>
                <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "oklch(0.92 0.005 65)", marginBottom: "1.25rem" }}>
                  Key Terms
                </h2>
                <dl style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {terms.map((term, i) => (
                    <div key={i}>
                      <dt style={{ fontSize: "0.875rem", fontWeight: 600, color: meta.categoryColor }}>{term.name}</dt>
                      <dd style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "oklch(0.60 0.010 65)", marginLeft: 0, marginTop: "0.25rem" }}>{term.description}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* About TCR */}
            <section style={{ marginTop: "3rem", borderTop: "1px solid oklch(0.25 0.008 240)", paddingTop: "2rem" }}>
              <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "oklch(0.75 0.18 65)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                About Trade Compliance Records
              </h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "oklch(0.60 0.010 65)" }}>
                Trade Compliance Records is the global cryptographic ledger for cross-border logistics compliance. Built on the Foundation-Infrastructure-Fortress (FIF) Protocol by LinkDaddy® LLC, it creates immutable SHA-256 hash records of customs declarations, Digital Product Passports, and regulatory compliance documents. Patent-compliant architecture under US7716216 (Reasonable Surfer) and US6285999B1 (Recursive Authority). Infrastructure by{" "}
                <a href="https://www.linkedin.com/in/anthonyjamespeacock/" target="_blank" rel="noopener noreferrer" style={{ color: "oklch(0.75 0.18 65)" }}>Anthony James Peacock</a>.
              </p>
              <p style={{ fontSize: "0.8125rem", color: "oklch(0.50 0.008 65)", marginTop: "0.5rem" }}>
                Media contact:{" "}
                <a href="mailto:press@tradecompliancerecords.com" style={{ color: "oklch(0.75 0.18 65)" }}>press@tradecompliancerecords.com</a>
              </p>
            </section>

            {/* Back link */}
            <div style={{ marginTop: "2.5rem" }}>
              <Link href="/wiki" style={{ fontSize: "0.875rem", color: "oklch(0.55 0.010 65)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.375rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                Back to all articles
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: "4.5rem" }}>
            <div style={{ background: "oklch(0.14 0.006 240)", border: "1px solid oklch(0.75 0.18 65 / 30%)", borderRadius: "0.625rem", padding: "1.25rem" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "oklch(0.75 0.18 65)", fontWeight: 600, marginBottom: "0.75rem" }}>
                DPP Compliance Intelligence
              </div>
              <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "oklch(0.92 0.005 65)", marginBottom: "0.625rem", lineHeight: 1.35 }}>
                Secure your compliance declaration before the deadline closes.
              </h4>
              <p style={{ fontSize: "0.8125rem", lineHeight: 1.65, color: "oklch(0.60 0.010 65)", marginBottom: "1rem" }}>
                A TCR Verified Record creates an immutable SHA-256 hash of your compliance declaration — your forensic defence against asset forfeiture.
              </p>
              <a
                href="https://tradecompliancerecords.com/create?type=digital-product-passport"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textAlign: "center", padding: "0.625rem 1rem", background: "oklch(0.75 0.18 65)", color: "oklch(0.09 0.005 240)", borderRadius: "0.375rem", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none" }}
              >
                Create a Record →
              </a>
            </div>
          </aside>
        </div>

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
