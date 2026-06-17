import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  Link2,
  Check,
  ChevronRight,
  ShieldCheck,
  Scale,
  Building2,
  Landmark,
  ClipboardList,
  TrendingUp,
  Users,
  Award,
  AlertTriangle,
  BookOpen,
  Lightbulb,
  Quote,
  FileText,
  Search,
  Globe2,
  Cpu,
  Cloud,
  Briefcase,
  Rocket,
  Gavel,
  Cog,
  BarChart3,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import BlogImage from "@/components/BlogImage";
import heroImage from "@/assets/legal-process-outsourcing-services.jpg";

const POST = {
  title:
    "Legal Process Outsourcing (LPO): Complete Guide to Modern Legal Support Services",
  description:
    "Discover how Legal Process Outsourcing (LPO) helps law firms and businesses reduce legal costs, improve efficiency, access specialized expertise, and scale operations through modern legal support services.",
  slug: "legal-process-outsourcing-services",
  url: "https://enviroandipr.com/blogs/legal-process-outsourcing-services",
  author: "EnviroAndIPR Editorial Team",
  category: "Legal Process Outsourcing",
  publishedISO: "2026-06-17",
  updatedISO: "2026-06-17",
  readingTime: "18 min read",
};

const TOC = [
  { id: "what-is", label: "What is LPO?" },
  { id: "why-matters", label: "Why LPO Matters in 2026" },
  { id: "core-services", label: "Core LPO Services" },
  { id: "benefits", label: "Benefits of LPO" },
  { id: "india-hub", label: "India as Global LPO Hub" },
  { id: "ipr", label: "IP Services in LPO" },
  { id: "compliance", label: "Regulatory Compliance" },
  { id: "ai", label: "AI & Future of Legal" },
  { id: "challenges", label: "Common Legal Challenges" },
  { id: "choose", label: "Choose the Right Partner" },
  { id: "trends", label: "Future Trends" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Expert Support" },
];

const KEY_TAKEAWAYS = [
  { icon: TrendingUp, text: "LPO is now a core operating lever for law firms and in-house legal teams — not a back-office cost play." },
  { icon: ShieldCheck, text: "Outsourcing legal work can cut operational costs by 40–60% while improving turnaround and quality." },
  { icon: Globe2, text: "India dominates the global LPO market with skilled common-law professionals, English fluency and time-zone advantages." },
  { icon: Cpu, text: "AI-powered contract review, e-discovery and predictive analytics are transforming how LPO delivery works." },
  { icon: Scale, text: "Specialised LPO partners unlock expertise in IP, compliance, M&A diligence and litigation support without permanent hiring." },
  { icon: Cloud, text: "Cloud-based legal operations, ESG compliance and data-privacy services are the fastest-growing LPO categories." },
];

const CORE_SERVICES = [
  {
    id: "legal-research",
    icon: Search,
    name: "Legal Research Services",
    scope: "Case law research, statutory analysis, jurisdictional surveys, regulatory updates and comparative law studies across Indian, US, UK, EU and APAC jurisdictions.",
    benefits: ["Faster turnaround for briefs and memos", "Lower research cost per matter", "Access to cross-jurisdictional expertise", "Round-the-clock research support"],
    use: "Law firms preparing arguments, in-house teams evaluating risk, GCs scoping new markets.",
  },
  {
    id: "contract-management",
    icon: FileText,
    name: "Contract Management Services",
    scope: "Drafting, reviewing, redlining, abstraction, lifecycle management, obligation tracking, renewal management and contract analytics for commercial, employment, vendor and licensing agreements.",
    benefits: ["Standardised contract quality at scale", "Faster deal closure", "Reduced contractual risk", "Centralised obligation tracking"],
    use: "Enterprises with high-volume contract pipelines, procurement teams, SaaS companies, M&A transactions.",
  },
  {
    id: "litigation-support",
    icon: Gavel,
    name: "Litigation Support Services",
    scope: "E-discovery, document review, deposition summaries, trial preparation, evidence management, pleadings drafting and case chronologies.",
    benefits: ["Massive cost savings on document review", "Defensible e-discovery workflows", "Faster trial readiness", "Scalable response to litigation surges"],
    use: "Litigation teams handling complex disputes, regulatory investigations, class actions and cross-border arbitration.",
  },
  {
    id: "ip-services",
    icon: Lightbulb,
    name: "Intellectual Property Services",
    scope: "Patent searches, patent drafting, prosecution support, trademark searches, watch services, IP portfolio docketing, copyright registration and IP licensing support.",
    benefits: ["Specialist technical patent writers", "Global IP portfolio coverage", "Faster prior-art and FTO searches", "Significant cost arbitrage vs onshore"],
    use: "IP law firms, corporate IP departments, R&D-heavy enterprises, startups building defensible IP moats.",
  },
  {
    id: "regulatory-compliance",
    icon: ShieldCheck,
    name: "Regulatory Compliance Services",
    scope: "Compliance audits, policy drafting, regulatory mapping, sanctions screening, AML/KYC support, data-privacy compliance (GDPR, DPDP), and ESG compliance reporting.",
    benefits: ["Always-on regulatory horizon scanning", "Standardised compliance playbooks", "Lower cost of compliance per entity", "Cross-jurisdictional coverage"],
    use: "Banks, fintechs, listed companies, MNCs operating in regulated industries and multi-jurisdiction businesses.",
  },
  {
    id: "document-review",
    icon: ClipboardList,
    name: "Document Review Services",
    scope: "First-pass and second-pass review, privilege review, redaction, technology-assisted review (TAR), responsiveness coding and quality control.",
    benefits: ["High-volume processing at speed", "Defensible review protocols", "AI + human hybrid workflows", "Cost-effective even on tight timelines"],
    use: "E-discovery in litigation, regulatory investigations, internal investigations and M&A due diligence.",
  },
  {
    id: "due-diligence",
    icon: Search,
    name: "Due Diligence Services",
    scope: "Legal due diligence for M&A, fundraising and joint ventures — corporate, commercial, employment, IP, litigation, regulatory and real-estate reviews with risk-flagged reporting.",
    benefits: ["Faster diligence cycle times", "Structured risk reporting", "Specialist reviewers per workstream", "Cost predictability for large deals"],
    use: "Investment banks, PE/VC funds, acquiring corporates and law firm corporate teams.",
  },
  {
    id: "legal-drafting",
    icon: FileText,
    name: "Legal Drafting Services",
    scope: "Drafting commercial agreements, NDAs, employment contracts, policies, pleadings, opinions, board resolutions, demand notices and regulatory submissions.",
    benefits: ["Consistent drafting quality", "Template libraries and playbooks", "Reduced partner/GC review time", "Multi-jurisdiction drafting expertise"],
    use: "Law firm associates, in-house counsel, HR and procurement teams seeking high-quality drafts at scale.",
  },
];

const BENEFIT_CARDS = [
  { icon: TrendingUp, t: "Cost Reduction", d: "Reduce overall legal spend by 40–60% through labour arbitrage, technology leverage and outcome-based pricing models." },
  { icon: Cog, t: "Improved Efficiency", d: "Process-driven delivery, standardised playbooks and 24/7 coverage cut turnaround times across research, drafting and review." },
  { icon: Scale, t: "Legal Expertise", d: "On-demand access to specialists in IP, M&A, litigation, ESG, data privacy and cross-border regulatory matters." },
  { icon: Cog, t: "Operational Flexibility", d: "Scale capacity up or down without permanent hiring — ideal for cyclical workloads, litigation surges and project mandates." },
  { icon: ShieldCheck, t: "Better Compliance", d: "Continuous regulatory monitoring, standardised audit trails and structured documentation reduce compliance risk." },
  { icon: Rocket, t: "Faster Service Delivery", d: "Time-zone advantage enables overnight delivery — work submitted at close of business returns ready by morning." },
];

const INDIA_PILLARS = [
  { icon: Users, name: "Skilled Legal Talent", role: "Over 1.4 million enrolled advocates and a deep bench of LLM-qualified professionals trained in commercial law." },
  { icon: Landmark, name: "Common Law System", role: "Indian jurisprudence shares the same common-law DNA as the US, UK, Canada, Australia and Singapore." },
  { icon: Globe2, name: "English Proficiency", role: "English is the operating language of Indian higher courts, law schools and corporate legal practice." },
  { icon: TrendingUp, name: "Cost Advantage", role: "Delivery costs 50–70% lower than onshore equivalents in the US, UK and EU — without quality compromise." },
  { icon: Cloud, name: "Technology Infrastructure", role: "World-class legal-tech ecosystem with CLM, e-discovery, contract AI and secure cloud delivery centres." },
  { icon: ShieldCheck, name: "Data Security Maturity", role: "ISO 27001, SOC 2 Type II and DPDP-aligned delivery models with bank-grade information security." },
];

const CHALLENGES = [
  { t: "Rising Legal Costs", d: "Hourly billing models and senior-talent inflation make every legal function more expensive year on year." },
  { t: "Talent Shortages", d: "Specialised counsel in IP, data privacy and ESG are scarce — and increasingly difficult to retain." },
  { t: "Regulatory Complexity", d: "Multi-jurisdictional compliance, frequent regulatory change and overlapping frameworks overwhelm small legal teams." },
  { t: "Document Overload", d: "Contracts, policies, litigation files and regulatory submissions grow faster than internal capacity to manage them." },
  { t: "Data Management Issues", d: "Legacy DMS, siloed repositories and inconsistent metadata create discovery and compliance risk." },
  { t: "Slow Turnaround", d: "Bottlenecks at partner or GC level delay deals, board approvals and litigation responses." },
];

const CHOOSE_CHECKLIST = [
  { t: "Domain Experience", d: "Proven delivery in your industry — IP, litigation, contracts, ESG, financial services or healthcare." },
  { t: "Subject-Matter Expertise", d: "Specialist teams with relevant qualifications (patent agents, qualified solicitors, CSs, CAs) not generalists." },
  { t: "Security Standards", d: "ISO 27001, SOC 2, ABA-aligned protocols, encrypted delivery and clear data-residency policies." },
  { t: "Compliance Capabilities", d: "DPDP, GDPR, HIPAA and sector-specific compliance built into delivery — not added as an afterthought." },
  { t: "Technology Stack", d: "Modern CLM, e-discovery, contract AI, secure VDRs and integration with your existing legal tech." },
  { t: "Scalability", d: "Ability to absorb 5x volume during litigation surges, M&A peaks or regulatory deadlines without quality drift." },
  { t: "Engagement Models", d: "Flexible pricing — FTE, project-based, outcome-based, retainer — aligned to how your matters actually run." },
  { t: "Transparent Governance", d: "Named delivery leads, SLA-backed reporting, quality scorecards and clear escalation paths." },
];

const TRENDS = [
  { icon: Cpu, t: "AI-Powered Legal Automation", d: "Generative AI for contract review, clause extraction, summarisation, brief generation and predictive case outcomes." },
  { icon: ShieldCheck, t: "ESG Compliance Support", d: "BRSR, CSRD, SEC climate-disclosure and supply-chain due-diligence reporting becoming a core LPO service line." },
  { icon: Landmark, t: "Data Privacy Services", d: "DPDP, GDPR, CPRA and cross-border transfer governance driving demand for privacy-focused legal operations." },
  { icon: Cloud, t: "Cloud-Based Legal Operations", d: "Cloud-native CLM, matter management and e-billing replacing on-premise legal tech across enterprises." },
  { icon: BarChart3, t: "Legal Analytics", d: "Data-driven insights on contract risk, litigation outcomes, vendor performance and legal-spend optimisation." },
  { icon: Globe2, t: "Global Outsourcing Expansion", d: "LPO footprints expanding beyond US/UK clients to EU, Middle East, APAC and African corporate legal teams." },
];

const FAQS = [
  { q: "What is Legal Process Outsourcing?", a: "Legal Process Outsourcing (LPO) is the practice of delegating legal work — research, drafting, contract management, litigation support, IP services, compliance and document review — to specialised external service providers, typically operating from cost-effective jurisdictions such as India." },
  { q: "What are LPO services?", a: "LPO services include legal research, contract drafting and review, contract lifecycle management, litigation support and e-discovery, intellectual property services, regulatory compliance, document review, due diligence and legal drafting — delivered by qualified legal professionals using secure, technology-enabled workflows." },
  { q: "Why do companies outsource legal processes?", a: "Companies outsource legal processes to reduce cost, access specialised expertise, scale capacity without permanent hiring, improve turnaround through 24/7 delivery, free up senior counsel for strategic work, and bring technology and process discipline into legal operations." },
  { q: "What are the benefits of LPO?", a: "Key benefits include 40–60% cost savings, faster delivery, access to specialist expertise, operational flexibility, improved compliance, standardised quality, technology-enabled workflows and the ability to scale up or down based on workload." },
  { q: "Is Legal Process Outsourcing secure?", a: "Yes. Reputable LPO providers operate under ISO 27001, SOC 2 Type II and DPDP/GDPR-aligned frameworks with encrypted transmission, secure VDRs, role-based access, NDAs, conflict checks and dedicated information-security teams." },
  { q: "Why is India a leading LPO destination?", a: "India offers a deep pool of common-law trained legal professionals, English-language fluency, mature legal-tech infrastructure, ISO/SOC-aligned security practices, favourable time-zone overlap with the US and UK, and 50–70% cost arbitrage versus onshore delivery." },
  { q: "What services are included in LPO?", a: "LPO covers legal research, contract management, litigation support, e-discovery, document review, IP services, regulatory compliance, due diligence, legal drafting, secretarial and corporate support, and increasingly AI-driven analytics and ESG compliance reporting." },
  { q: "How does AI impact legal outsourcing?", a: "AI accelerates contract review, clause extraction, document classification, e-discovery, legal research and predictive analytics. LPO providers combine AI tooling with qualified legal review to deliver higher accuracy, faster turnaround and better cost economics than either humans or AI alone." },
  { q: "What is contract management outsourcing?", a: "Contract management outsourcing covers the full contract lifecycle — drafting, review, negotiation support, abstraction, obligation tracking, renewals and analytics — delivered by specialist teams using contract lifecycle management (CLM) and AI tools." },
  { q: "What is litigation support?", a: "Litigation support includes e-discovery, document review, deposition summaries, evidence indexing, case chronologies, pleadings drafting, trial preparation and post-trial analysis — typically delivered at a fraction of the cost of onshore associates." },
  { q: "Who uses LPO services?", a: "Global law firms, corporate legal departments, in-house GCs, startups, SMEs, investment banks, PE/VC funds, IP-heavy enterprises and compliance teams across regulated industries all use LPO services." },
  { q: "How is LPO different from in-house legal teams?", a: "In-house teams handle strategic, advisory and decision-critical work close to the business. LPO partners handle high-volume, process-driven and specialist work — research, contract review, e-discovery, compliance monitoring — that does not require physical presence." },
  { q: "What is legal due diligence outsourcing?", a: "Legal due diligence outsourcing involves external teams reviewing target-company documents — corporate, commercial, employment, IP, litigation and regulatory — and producing structured, risk-flagged diligence reports for M&A, fundraising or JV transactions." },
  { q: "How much can businesses save through LPO?", a: "Most businesses achieve 40–60% savings on equivalent in-house or onshore legal spend, with some high-volume functions (document review, contract abstraction, IP docketing) saving up to 70%." },
  { q: "How do I choose the right LPO partner?", a: "Evaluate domain experience, subject-matter expertise, security certifications (ISO 27001, SOC 2), compliance capability (DPDP, GDPR), technology stack, scalability, engagement model flexibility and governance transparency. Run a pilot project before committing to a long-term engagement." },
  { q: "What does the future of LPO look like?", a: "The future of LPO is AI-augmented, cloud-native and increasingly specialised — with strong growth in ESG compliance, data-privacy services, legal analytics and cross-border regulatory support, while routine work is automated end-to-end." },
];

const RELATED = [
  { title: "Intellectual Property Services for Modern Businesses", href: "/ipr-services" },
  { title: "Environmental Compliance Regulations in India (2026)", href: "/blogs/environmental-compliance-regulations-india" },
  { title: "IPR Protection for Small Businesses in India", href: "/blogs/ipr-protection-small-business-india" },
  { title: "Legal Process Outsourcing Services", href: "/lpo-services" },
];

const LegalProcessOutsourcingServices = () => {
  const [activeId, setActiveId] = useState<string>(TOC[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    TOC.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const share = (network: "linkedin" | "twitter" | "facebook" | "copy") => {
    const url = encodeURIComponent(POST.url);
    const title = encodeURIComponent(POST.title);
    if (network === "copy") {
      navigator.clipboard.writeText(POST.url);
      toast({ title: "Link copied", description: "Article URL copied to clipboard." });
      return;
    }
    const links = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    } as const;
    window.open(links[network], "_blank", "noopener,noreferrer,width=600,height=600");
  };

  return (
    <Layout>
      <Helmet>
        <title>Legal Process Outsourcing (LPO) Services: Benefits, Solutions & Future Trends (2026)</title>
        <meta name="description" content={POST.description} />
        <link rel="canonical" href={POST.url} />
        <meta property="og:title" content="Legal Process Outsourcing (LPO) Services (2026)" />
        <meta property="og:description" content={POST.description} />
        <meta property="og:url" content={POST.url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Legal Process Outsourcing (LPO) Services (2026)" />
        <meta name="twitter:description" content={POST.description} />
        <meta name="twitter:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: POST.title,
          description: POST.description,
          image: [heroImage],
          datePublished: POST.publishedISO,
          dateModified: POST.updatedISO,
          author: { "@type": "Organization", name: POST.author },
          publisher: { "@type": "Organization", name: "EnviroAndIPR", url: "https://enviroandipr.com" },
          mainEntityOfPage: POST.url,
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://enviroandipr.com/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "https://enviroandipr.com/blogs" },
            { "@type": "ListItem", position: 3, name: "Legal Process Outsourcing Services", item: POST.url },
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EnviroAndIPR",
          url: "https://enviroandipr.com",
          logo: "https://enviroandipr.com/favicon.ico",
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        <div className="container-custom pt-12 pb-10">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li><Link to="/blogs" className="hover:text-primary">Insights</Link></li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li className="text-foreground">Legal Process Outsourcing Services</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-0">
                {POST.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Legal Process Outsourcing (LPO): Complete Guide to Modern Legal Support Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A 2026 guide to how law firms, corporates, startups and compliance teams use LPO to reduce legal costs, scale specialised expertise, and modernise legal operations with AI-enabled workflows.
              </p>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground pt-2">
                <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{POST.author}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />Updated {new Date(POST.updatedISO).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{POST.readingTime}</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground mr-1 inline-flex items-center gap-1"><Share2 className="h-3.5 w-3.5" /> Share</span>
                <Button size="icon" variant="outline" aria-label="Share on LinkedIn" onClick={() => share("linkedin")}><Linkedin className="h-4 w-4" /></Button>
                <Button size="icon" variant="outline" aria-label="Share on Twitter" onClick={() => share("twitter")}><Twitter className="h-4 w-4" /></Button>
                <Button size="icon" variant="outline" aria-label="Share on Facebook" onClick={() => share("facebook")}><Facebook className="h-4 w-4" /></Button>
                <Button size="icon" variant="outline" aria-label="Copy link" onClick={() => share("copy")}><Link2 className="h-4 w-4" /></Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BlogImage
                src={heroImage}
                alt="Modern legal operations center with diverse lawyers analysing AI-powered contract dashboards"
                title="Legal Process Outsourcing — Modern Legal Support Services"
                eager
                wrapperClassName="rounded-2xl shadow-card border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="container-custom py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-xl border bg-card p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" /> Table of Contents
                </h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1.5 text-sm">
                    {TOC.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className={`block py-1.5 pl-3 border-l-2 transition-colors ${
                            activeId === t.id
                              ? "border-primary text-primary font-medium"
                              : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted"
                          }`}
                        >
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-9 order-1 lg:order-2 space-y-14">
            {/* Key Takeaways */}
            <section aria-labelledby="key-takeaways">
              <h2 id="key-takeaways" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Key Takeaways
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {KEY_TAKEAWAYS.map((k, i) => (
                  <Card key={i} className="p-5 flex gap-4 hover:shadow-card transition">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <k.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{k.text}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Intro */}
            <section className="prose prose-slate max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The legal industry is in the middle of its biggest operational reset in a generation. Legal workloads are expanding faster than legal headcount, regulatory complexity is compounding across jurisdictions, in-house GCs are being asked to do more with the same budget, and law firms are under sustained pressure to deliver better outcomes at predictable cost. Against that backdrop, <strong>Legal Process Outsourcing (LPO)</strong> has moved from a back-office cost play to a strategic operating model adopted by some of the largest law firms and Fortune 500 legal departments in the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What began two decades ago as a niche labour-arbitrage market for document review has matured into a sophisticated, technology-enabled discipline that covers contract management, litigation support, intellectual property prosecution, regulatory compliance, due diligence and AI-augmented legal research. The global LPO market has crossed <strong>USD 25 billion</strong> and is projected to grow at a compounded rate of 20%+ through the rest of the decade — a trajectory driven less by cost and more by capability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For Indian businesses, multinational law firms and global compliance teams, the question in 2026 is no longer <em>whether</em> to outsource legal work, but <em>which</em> functions, to <em>whom</em>, and on <em>what governance model</em>. This guide unpacks how modern LPO works, the service lines it covers, the benefits and challenges, the role of AI and ESG in reshaping demand, and how to evaluate the right outsourcing partner for your legal operations.
              </p>
            </section>

            {/* What is */}
            <section id="what-is" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What is Legal Process Outsourcing (LPO)?
              </h2>

              <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Legal Process Outsourcing (LPO)</strong> is the practice of delegating legal and legal-support work — such as research, drafting, contract management, litigation support, IP services, compliance and document review — to specialised external service providers, typically operating from jurisdictions with strong legal talent and favourable cost economics. LPO combines qualified legal professionals, defined delivery processes and modern legal technology to deliver legal work at higher quality, faster turnaround and lower cost than traditional in-house or onshore models.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                In practical terms, an LPO engagement looks like an extension of your legal team: dedicated lawyers, paralegals and process specialists who operate inside your matter-management systems, follow your playbooks, and produce work product that integrates seamlessly with your in-house workflow. The provider brings the people, the technology and the process discipline; the client retains strategic control, decision rights and client privilege.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">In-house vs outsourced legal services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-5">
                  <h4 className="font-semibold text-foreground mb-1.5">In-House Legal Teams</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Best suited for strategic advisory, business partnering, board-level matters, regulatory engagement and decisions requiring deep institutional context. Fixed cost, limited scalability.</p>
                </Card>
                <Card className="p-5">
                  <h4 className="font-semibold text-foreground mb-1.5">Outsourced Legal Services</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Best suited for high-volume, process-driven and specialist work — research, contract review, e-discovery, IP docketing, compliance monitoring. Variable cost, highly scalable, technology-enabled.</p>
                </Card>
              </div>
            </section>

            {/* Why matters */}
            <section id="why-matters" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Legal Process Outsourcing Matters in 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Five structural pressures explain why LPO adoption is accelerating across law firms, corporates and startups simultaneously — each one independently sufficient, and together compounding into a clear operating mandate.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { t: "Cost Efficiency", d: "Law firm hourly rates and senior in-house compensation continue to rise. LPO delivers comparable work at 40–60% lower fully-loaded cost." },
                  { t: "Specialised Expertise", d: "Domains like data privacy, ESG, fintech regulation and life-sciences IP need specialist talent that is scarce and expensive onshore." },
                  { t: "Scalability", d: "Litigation surges, M&A peaks and regulatory deadlines require capacity that cannot be hired and retained on a permanent basis." },
                  { t: "Faster Turnaround", d: "Time-zone overlap with India enables overnight delivery — work sent at COB returns reviewed and ready by next morning." },
                  { t: "Risk Reduction", d: "Standardised playbooks, AI-assisted QC and structured documentation lower the rate of contract, compliance and litigation errors." },
                  { t: "Technology Leverage", d: "LPO partners bring CLM, e-discovery and contract-AI investments that most in-house teams cannot justify standalone." },
                ].map((b) => (
                  <Card key={b.t} className="p-5">
                    <h4 className="font-semibold text-foreground mb-1.5">{b.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                  </Card>
                ))}
              </div>

              <div className="rounded-xl border bg-secondary/30 p-6">
                <div className="flex gap-3 items-start">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-foreground italic leading-relaxed">
                    Industry benchmark: enterprises that route 25–40% of their legal workload to specialist LPO partners typically report a 35–50% reduction in legal spend per matter, a 30% improvement in contract cycle times, and meaningful improvements in compliance audit outcomes within the first 12 months.
                  </p>
                </div>
              </div>
            </section>

            {/* Core services */}
            <section id="core-services" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Core Legal Process Outsourcing Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Modern LPO covers a layered stack of services. Most clients begin with one or two functions — typically contract review or research — and progressively expand the scope as governance, security and quality are proven.
              </p>

              <div className="space-y-6">
                {CORE_SERVICES.map((t) => (
                  <Card key={t.id} id={t.id} className="p-6 scroll-mt-24">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <t.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{t.name}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">Scope:</strong> {t.scope}</p>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Benefits</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {t.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Typical use cases:</strong> {t.use}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits cards */}
            <section id="benefits" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Legal Process Outsourcing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The benefits of LPO compound across financial, operational and strategic dimensions. The most disciplined adopters treat LPO not as a cost-cutting tactic, but as a capability play.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {BENEFIT_CARDS.map((b) => (
                  <Card key={b.t} className="p-5">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1.5">{b.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* India hub */}
            <section id="india-hub" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why India is a Global Hub for Legal Process Outsourcing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                India accounts for the dominant share of the global LPO market — and the reasons go far beyond cost. The combination of legal talent, common-law jurisprudence, language fluency, technology maturity and security infrastructure is structurally difficult for any other jurisdiction to replicate at scale.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {INDIA_PILLARS.map((f) => (
                  <Card key={f.name} className="p-5 flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{f.name}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.role}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/5 p-6">
                <p className="text-foreground leading-relaxed">
                  India's LPO sector now serves clients across the <strong>US, UK, EU, Australia, Singapore, the Middle East and Africa</strong> — and is increasingly the delivery backbone for AI-augmented legal services rolled out by global Tier-1 law firms and Fortune 500 in-house teams.
                </p>
              </div>
            </section>

            {/* IPR */}
            <section id="ipr" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Intellectual Property Services in LPO
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IP is one of the highest-value, fastest-growing categories within LPO. Patent prosecution, trademark management and IP portfolio docketing combine deep technical expertise with high-volume process work — exactly the profile where specialist LPO delivery outperforms in-house models.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { t: "Patent Support", d: "Patent searches, prior-art analysis, drafting, claim charting, office-action responses, and PCT/national-phase prosecution." },
                  { t: "Trademark Services", d: "Trademark searches, classification, filings, watch services, opposition handling, renewals and Madrid Protocol filings." },
                  { t: "Copyright Services", d: "Copyright registration for software, content, music and creative works; assignment and licensing documentation." },
                  { t: "IP Portfolio Management", d: "Docketing, renewal management, infringement monitoring, customs recordal and IP valuation support." },
                ].map((b) => (
                  <Card key={b.t} className="p-5">
                    <h4 className="font-semibold text-foreground mb-1.5">{b.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Explore our specialist offerings under <Link to="/ipr-services" className="text-primary font-medium hover:underline">Intellectual Property Services</Link> and our complete <Link to="/blogs/ipr-protection-small-business-india" className="text-primary font-medium hover:underline">guide to IPR protection for small businesses in India</Link>.
              </p>
            </section>

            {/* Compliance */}
            <section id="compliance" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Regulatory Compliance and Risk Management
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Regulatory complexity is the single biggest reason in-house legal teams are turning to specialist LPO partners. Whether it is data privacy, ESG, environmental compliance, sanctions or sector regulation, the cost and risk of getting it wrong now outweigh the cost of getting expert support.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { t: "Corporate Compliance", d: "Companies Act, SEBI, RBI and listing-obligation compliance — calendars, filings, board documentation and audit-readiness." },
                  { t: "Environmental Compliance", d: "CPCB/SPCB approvals, EIA, environmental audits, BRSR reporting and pollution-control compliance." },
                  { t: "Contract Compliance", d: "Obligation tracking, SLA monitoring, vendor compliance and contract-driven risk reporting." },
                  { t: "Governance Frameworks", d: "Policy drafting, code of conduct, anti-bribery, whistle-blower and ESG governance frameworks." },
                ].map((b) => (
                  <Card key={b.t} className="p-5">
                    <h4 className="font-semibold text-foreground mb-1.5">{b.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Read our complete <Link to="/blogs/environmental-compliance-regulations-india" className="text-primary font-medium hover:underline">guide to Environmental Compliance Regulations in India</Link> and explore our <Link to="/environmental-services" className="text-primary font-medium hover:underline">Environmental Consulting Services</Link>.
              </p>
            </section>

            {/* AI */}
            <section id="ai" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Artificial Intelligence and the Future of Legal Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                AI is not replacing legal professionals — it is reshaping what legal professionals spend their time on. The best LPO providers in 2026 operate as <em>AI-augmented</em> delivery teams: combining qualified lawyers with modern tooling to deliver outcomes that neither humans nor AI could achieve alone.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: FileText, t: "AI Contract Review", d: "Automated clause extraction, deviation detection, risk scoring and playbook-based redlining accelerate contract review by 60–80%." },
                  { icon: Search, t: "Legal Document Analysis", d: "Large-language-model classification of documents for responsiveness, privilege and substantive review in e-discovery." },
                  { icon: BarChart3, t: "Predictive Legal Analytics", d: "Models trained on historical matter data forecast case outcomes, settlement ranges and litigation cost trajectories." },
                  { icon: ShieldCheck, t: "Compliance Automation", d: "Continuous regulatory monitoring, control testing and exception reporting reduce manual compliance effort dramatically." },
                  { icon: Cpu, t: "AI-Powered Legal Research", d: "Generative-AI research tools deliver synthesised, citation-backed answers in minutes instead of hours." },
                  { icon: Cog, t: "Workflow Orchestration", d: "AI-driven matter routing, intake triage and SLA management transform legal operations end-to-end." },
                ].map((s) => (
                  <Card key={s.t} className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-semibold text-foreground">{s.t}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common Challenges in Legal Operations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Six recurring pain points appear in nearly every legal-operations diagnostic — and each maps cleanly to an LPO solution.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {CHALLENGES.map((m) => (
                  <Card key={m.t} className="p-5 border-l-4 border-l-destructive/60">
                    <div className="flex gap-3 items-start">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{m.t}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Choose */}
            <section id="choose" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How to Choose the Right LPO Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Selecting an LPO partner is a multi-year decision. The right evaluation framework looks beyond cost cards to delivery quality, security maturity, technology depth and governance discipline.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {CHOOSE_CHECKLIST.map((c) => (
                  <Card key={c.t} className="p-5">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{c.t}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Trends */}
            <section id="trends" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Future Trends in Legal Process Outsourcing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The next phase of LPO is defined by specialisation, AI augmentation and cross-border regulatory complexity. Six trends will shape demand through the rest of the decade.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {TRENDS.map((s) => (
                  <Card key={s.t} className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <s.icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-semibold text-foreground">{s.t}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* CTA */}
            <section id="cta" className="scroll-mt-24">
              <Card className="p-8 md:p-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Need Professional Legal Process Outsourcing Support?
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl">
                  Partner with EnviroAndIPR to extend your legal capacity with specialist LPO delivery — from contract management and litigation support to IP, compliance and corporate legal operations.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {[
                    "Legal Research",
                    "Contract Management",
                    "Litigation Support",
                    "Intellectual Property Services",
                    "Regulatory Compliance Support",
                    "Legal Documentation",
                    "Due Diligence Services",
                    "Corporate Legal Support",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-primary-foreground/95">
                      <Check className="h-4 w-4 flex-shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact">
                    <Button size="lg" variant="secondary">
                      Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/lpo-services">
                    <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                      Speak with an Expert
                    </Button>
                  </Link>
                </div>
              </Card>
            </section>

            {/* Related */}
            <section aria-labelledby="related">
              <h2 id="related" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {RELATED.map((r) => (
                  <Link key={r.title} to={r.href} className="group">
                    <Card className="p-5 hover:shadow-card transition h-full">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition mb-2">{r.title}</h3>
                      <span className="inline-flex items-center text-sm text-primary">Read more <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition" /></span>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default LegalProcessOutsourcingServices;
