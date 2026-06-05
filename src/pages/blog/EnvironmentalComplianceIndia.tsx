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
  Factory,
  ClipboardList,
  Activity,
  FileBarChart,
  Leaf,
  TrendingUp,
  Users,
  Award,
  AlertTriangle,
  BookOpen,
  Lightbulb,
  Quote,
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
import heroImage from "@/assets/environmental-compliance-india-2026.jpg";

const POST = {
  title:
    "Environmental Compliance Regulations in India: Complete Guide for Businesses (2026)",
  description:
    "Learn everything about environmental compliance regulations in India, including environmental governance, CPCB regulations, environmental clearances, ESG requirements, audits, and compliance strategies for businesses in 2026.",
  slug: "environmental-compliance-regulations-india",
  url: "https://enviroandipr.com/blogs/environmental-compliance-regulations-india",
  author: "EnviroAndIPR Editorial Team",
  category: "Environmental Compliance",
  publishedISO: "2026-01-15",
  updatedISO: "2026-06-05",
  readingTime: "14 min read",
};

const TOC = [
  { id: "what-is", label: "What is Environmental Compliance?" },
  { id: "why-matters", label: "Why It Matters in 2026" },
  { id: "governance", label: "Environmental Governance Framework" },
  { id: "laws", label: "Major Environmental Laws" },
  { id: "requirements", label: "Common Compliance Requirements" },
  { id: "benefits", label: "Benefits of Strong Compliance" },
  { id: "mistakes", label: "Common Compliance Mistakes" },
  { id: "strategy", label: "Practical Compliance Strategy" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Expert Support" },
];

const FAQS = [
  {
    q: "What is environmental compliance?",
    a: "Environmental compliance is the process of ensuring business operations meet environmental laws, regulations, permits, monitoring requirements, and reporting obligations.",
  },
  {
    q: "Who regulates environmental compliance in India?",
    a: "Environmental compliance is primarily regulated by the Ministry of Environment, Forest and Climate Change (MoEFCC), Central Pollution Control Board (CPCB), and State Pollution Control Boards (SPCBs).",
  },
  {
    q: "What is the difference between CTE and CTO?",
    a: "Consent to Establish (CTE) is obtained before establishing an industrial unit, while Consent to Operate (CTO) is required before commercial operations begin.",
  },
  {
    q: "Why is environmental compliance important?",
    a: "Environmental compliance helps businesses reduce risks, avoid penalties, improve sustainability performance, and maintain stakeholder trust.",
  },
  {
    q: "What happens if a company violates environmental regulations?",
    a: "Consequences may include fines, legal actions, permit cancellations, operational restrictions, and reputational damage.",
  },
];

const KEY_TAKEAWAYS = [
  {
    icon: ShieldCheck,
    text: "Environmental compliance ensures that businesses operate in accordance with environmental laws, permits, standards, and regulatory requirements.",
  },
  {
    icon: Activity,
    text: "Regulatory authorities in India are increasing monitoring, inspections, and enforcement actions across industries.",
  },
  {
    icon: Leaf,
    text: "Compliance supports sustainability goals, ESG performance, operational efficiency, and risk reduction.",
  },
  {
    icon: TrendingUp,
    text: "Proactive businesses are more likely to attract investors, customers, and global partners.",
  },
  {
    icon: ClipboardList,
    text: "Governance, audits, clearances, and monitoring systems form the foundation of a successful compliance strategy.",
  },
  {
    icon: AlertTriangle,
    text: "Non-compliance can lead to penalties, operational disruptions, project delays, and reputational damage.",
  },
];

const GOVERNANCE = [
  {
    level: "Level 1",
    name: "MoEFCC",
    full: "Ministry of Environment, Forest and Climate Change",
    role: "Policy-making & Planning",
    points: [
      "National environment and climate change policies",
      "Inter-sectoral coordination",
    ],
    icon: Landmark,
  },
  {
    level: "Level 2",
    name: "CPCB",
    full: "Central Pollution Control Board",
    role: "National Standard-Setting",
    points: [
      "Establishing uniform pollution standards",
      "Monitoring air and water quality",
      "Technical advisory",
    ],
    icon: Scale,
  },
  {
    level: "Level 3",
    name: "SPCBs",
    full: "State Pollution Control Boards",
    role: "State-Level Enforcement",
    points: [
      "Granting Consents (CTE / CTO)",
      "Field inspections and compliance",
      "Legal action",
    ],
    icon: Building2,
  },
  {
    level: "Level 4",
    name: "Industries & Businesses",
    full: "Operators on the ground",
    role: "Compliance Adherence",
    points: [
      "Obtaining necessary permits",
      "Implementing pollution control techniques",
    ],
    icon: Factory,
  },
];

const LIFECYCLE = [
  { label: "Environmental Clearance", icon: ShieldCheck },
  { label: "Consent to Establish (CTE)", icon: ClipboardList },
  { label: "Consent to Operate (CTO)", icon: Check },
  { label: "Monitoring", icon: Activity },
  { label: "Audits", icon: FileBarChart },
  { label: "ESG Reporting", icon: TrendingUp },
];

const BENEFITS = [
  { title: "Risk Reduction", desc: "Identify and address risks before they escalate.", icon: ShieldCheck },
  { title: "Investor Confidence", desc: "Stronger valuation and financing opportunities.", icon: TrendingUp },
  { title: "Sustainability", desc: "Lower resource consumption and emissions.", icon: Leaf },
  { title: "Reputation", desc: "Brand trust with customers and communities.", icon: Award },
  { title: "Growth", desc: "Access to global supply chains and partnerships.", icon: Users },
];

const ROADMAP = [
  { step: "01", title: "Understand Regulations", desc: "Identify all environmental laws and requirements relevant to operations." },
  { step: "02", title: "Obtain Approvals", desc: "Secure environmental clearances, CTEs, CTOs, and other permits." },
  { step: "03", title: "Monitoring", desc: "Track environmental performance regularly with real-time systems." },
  { step: "04", title: "Audits", desc: "Review compliance status and identify improvement opportunities." },
  { step: "05", title: "Training", desc: "Ensure staff understand environmental responsibilities and procedures." },
  { step: "06", title: "Continuous Improvement", desc: "Regularly update compliance programs and sustainability initiatives." },
];

const RELATED = [
  {
    title: "Environmental Impact Assessment (EIA) in India: Process, Requirements & Approval Guide",
    href: "/environmental-services",
  },
  {
    title: "Environmental Audits in India: Compliance Checklist for Industries",
    href: "/environmental-services",
  },
  {
    title: "ESG Reporting and Corporate Sustainability in India: Practical Guide",
    href: "/environmental-services",
  },
  {
    title: "CEMS & OCEMS Compliance Guide for Indian Industries",
    href: "/environmental-services",
  },
];

const EnvironmentalComplianceIndia = () => {
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
        <title>{`${POST.title}`}</title>
        <meta name="description" content={POST.description} />
        <link rel="canonical" href={POST.url} />
        <meta property="og:title" content="Environmental Compliance Regulations in India" />
        <meta
          property="og:description"
          content="Complete guide to environmental compliance, environmental governance, ESG reporting, audits, and sustainability requirements for Indian businesses."
        />
        <meta property="og:url" content={POST.url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Environmental Compliance Regulations in India (2026)" />
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
          publisher: {
            "@type": "Organization",
            name: "EnviroAndIPR",
            url: "https://enviroandipr.com",
          },
          mainEntityOfPage: POST.url,
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://enviroandipr.com/" },
            { "@type": "ListItem", position: 2, name: "Insights", item: "https://enviroandipr.com/blogs" },
            { "@type": "ListItem", position: 3, name: "Environmental Compliance", item: POST.url },
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
          "@type": "WebPage",
          name: POST.title,
          url: POST.url,
          description: POST.description,
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        <div className="container-custom pt-12 pb-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li><Link to="/blogs" className="hover:text-primary">Insights</Link></li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li className="text-foreground">Environmental Compliance</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-0">
                {POST.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                {POST.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A practical 2026 guide to environmental governance, CPCB &amp; SPCB regulations,
                clearances, audits, and ESG reporting for Indian businesses.
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
              <div className="rounded-2xl overflow-hidden shadow-card border">
                <img
                  src={heroImage}
                  alt="Environmental compliance regulations and sustainability monitoring for businesses in India"
                  title="Environmental Compliance in India 2026"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main grid: TOC + content */}
      <section className="container-custom py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Sticky TOC */}
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

          {/* Article */}
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
                Environmental compliance is no longer just a regulatory requirement. It has
                become a critical business function that influences operational continuity,
                investor confidence, sustainability performance, and long-term growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Across manufacturing, pharmaceuticals, chemicals, infrastructure, mining,
                energy, food processing, textiles, and other industrial sectors, businesses
                are facing increasing pressure from regulators, customers, investors, and
                communities to operate responsibly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Organizations that fail to meet environmental compliance requirements risk
                far more than regulatory penalties &mdash; project delays, reputational
                damage, supply chain challenges, and lost opportunities. Companies that
                adopt proactive environmental management practices are gaining competitive
                advantages through improved efficiency, stronger stakeholder trust, and
                enhanced sustainability performance.
              </p>
            </section>

            {/* What is */}
            <section id="what-is" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What is Environmental Compliance?
              </h2>

              {/* Featured snippet box */}
              <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Environmental compliance</strong> is the process of ensuring that
                  business operations adhere to environmental laws, regulations, permits,
                  monitoring requirements, and reporting obligations established by
                  regulatory authorities.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Environmental compliance involves implementing systems and processes that
                help organizations minimize environmental impacts while meeting legal and
                regulatory obligations.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-4">Key Areas of Environmental Compliance</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Air Pollution Control", d: "Monitoring and controlling industrial emissions to meet prescribed standards." },
                  { t: "Water Pollution Management", d: "Managing wastewater treatment, discharge quality, and water conservation initiatives." },
                  { t: "Hazardous Waste Management", d: "Safe storage, transportation, treatment, and disposal of hazardous materials." },
                  { t: "Environmental Clearances", d: "Obtaining required approvals before commencing specific projects and industrial activities." },
                  { t: "Consent to Establish (CTE)", d: "Permission required before establishing certain industrial operations." },
                  { t: "Consent to Operate (CTO)", d: "Approval required before commencing commercial operations." },
                  { t: "Environmental Monitoring", d: "Tracking performance through inspections, sampling, reporting, and monitoring systems." },
                  { t: "Sustainability Reporting", d: "Disclosing environmental performance metrics to stakeholders and regulators." },
                ].map((a) => (
                  <Card key={a.t} className="p-5">
                    <h4 className="font-semibold text-foreground mb-1.5">{a.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Why matters */}
            <section id="why-matters" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Environmental Compliance Matters in 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The environmental compliance landscape has changed dramatically over the
                last decade. Today, compliance affects not only regulatory relationships but
                also business competitiveness, access to capital, customer trust, and
                corporate reputation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Increasing Regulatory Expectations</h3>
              <p className="text-muted-foreground mb-3">Regulatory authorities are strengthening environmental enforcement across industries. Key trends include:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                {[
                  "Increased inspections",
                  "Digital compliance monitoring",
                  "Automated reporting systems",
                  "Real-time environmental monitoring",
                  "Stronger enforcement mechanisms",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                ))}
              </ul>

              <div className="my-8 rounded-xl bg-secondary/40 border p-6">
                <div className="flex gap-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg italic text-foreground leading-relaxed">
                    Authorities are increasingly using technology-driven compliance
                    verification, making it difficult for businesses to overlook
                    regulatory obligations.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">Growing ESG Requirements</h3>
              <p className="text-muted-foreground mb-3">Environmental, Social, and Governance (ESG) performance is becoming a major consideration for investors and stakeholders. Organizations are expected to demonstrate:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground mb-6">
                {["Environmental responsibility", "Resource efficiency", "Carbon management", "Waste reduction", "Sustainability commitments"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Environmental compliance forms the foundation of strong ESG performance.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">Investor and Market Expectations</h3>
              <p className="text-muted-foreground mb-3">Investors now evaluate environmental performance as part of risk assessments and investment decisions. Companies with robust compliance frameworks often benefit from:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground mb-6">
                {["Improved investor confidence", "Better financing opportunities", "Enhanced valuation", "Stronger business partnerships"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">Reputation and Stakeholder Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Customers, communities, and stakeholders are paying closer attention to
                environmental practices. Demonstrating responsibility helps businesses
                strengthen public trust, improve brand reputation, build customer loyalty,
                and enhance community relationships. Environmental incidents can quickly
                damage years of reputation-building efforts.
              </p>
            </section>

            {/* Governance */}
            <section id="governance" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Environmental Governance Framework in India
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Environmental governance provides the foundation for environmental
                compliance in India. Multiple authorities, laws, and regulatory mechanisms
                support the country&rsquo;s environmental framework.
              </p>

              {/* Governance flow diagram */}
              <div className="space-y-4 mb-10">
                {GOVERNANCE.map((g, idx) => (
                  <div key={g.name}>
                    <Card className="p-5 md:p-6 border-l-4 border-primary">
                      <div className="flex items-start gap-5">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <g.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-2 mb-1">
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{g.level}</span>
                            <h3 className="text-lg font-bold text-foreground">{g.name}</h3>
                            <span className="text-sm text-muted-foreground">— {g.full}</span>
                          </div>
                          <p className="text-sm font-medium text-foreground/80 mb-2">{g.role}</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {g.points.map((p) => (
                              <li key={p} className="flex items-start gap-2"><ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />{p}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                    {idx < GOVERNANCE.length - 1 && (
                      <div className="flex justify-center py-2" aria-hidden="true">
                        <div className="h-6 w-px bg-primary/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ministry of Environment, Forest and Climate Change (MoEFCC)</h3>
                  <p className="text-muted-foreground mb-2">India&rsquo;s primary environmental authority. Responsibilities include:</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                    {["Environmental policy development", "Environmental clearances", "Regulatory oversight", "Climate-related initiatives", "Environmental protection programs"].map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Central Pollution Control Board (CPCB)</h3>
                  <p className="text-muted-foreground mb-2">The CPCB develops standards and provides guidance. Key functions include:</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                    {["Setting environmental standards", "Monitoring environmental quality", "Coordinating pollution control efforts", "Supporting regulatory enforcement"].map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">State Pollution Control Boards (SPCBs)</h3>
                  <p className="text-muted-foreground mb-2">SPCBs serve as the primary regulatory interface for businesses. They are responsible for:</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                    {["Granting CTE approvals", "Granting CTO approvals", "Conducting inspections", "Reviewing compliance reports", "Taking enforcement actions"].map((i) => (
                      <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-primary/5 border border-primary/20 p-5 flex gap-4">
                <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Compliance Tip</p>
                  <p className="text-sm text-muted-foreground">Most businesses interact regularly with their respective SPCBs throughout the compliance lifecycle &mdash; build a structured engagement calendar and a single source of truth for permits.</p>
                </div>
              </div>
            </section>

            {/* Laws */}
            <section id="laws" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Major Environmental Laws Businesses Must Know
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { t: "Water (Prevention and Control of Pollution) Act, 1974", d: "Governs water pollution prevention and wastewater discharge management." },
                  { t: "Air (Prevention and Control of Pollution) Act, 1981", d: "Regulates industrial emissions and air quality management." },
                  { t: "Environment (Protection) Act, 1986", d: "India&rsquo;s umbrella environmental legislation; provides broad powers for regulation and enforcement." },
                  { t: "Hazardous Waste Management Rules", d: "Regulate the handling, storage, transportation, and disposal of hazardous waste." },
                  { t: "Plastic Waste Management Rules", d: "Establish responsibilities related to plastic waste generation and disposal." },
                  { t: "E-Waste Management Rules", d: "Govern the management and recycling of electronic waste." },
                ].map((l) => (
                  <Card key={l.t} className="p-5">
                    <div className="flex gap-3">
                      <Scale className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{l.t}</h3>
                        <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: l.d }} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Requirements + lifecycle */}
            <section id="requirements" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common Environmental Compliance Requirements
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Although requirements vary by industry, businesses commonly need to address
                the following across the compliance lifecycle:
              </p>

              {/* Lifecycle visual */}
              <div className="rounded-2xl border bg-gradient-to-br from-secondary/30 to-background p-6 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {LIFECYCLE.map((s, i) => (
                    <div key={s.label} className="relative">
                      <div className="rounded-xl bg-card border p-4 text-center h-full">
                        <div className="h-10 w-10 mx-auto mb-2 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <div className="text-xs font-semibold text-foreground">{s.label}</div>
                      </div>
                      {i < LIFECYCLE.length - 1 && (
                        <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/60" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Environmental Clearances", d: "Required for certain projects before commencement." },
                  { t: "Consent to Establish (CTE)", d: "Obtained before construction or setup activities begin." },
                  { t: "Consent to Operate (CTO)", d: "Required before operations commence." },
                  { t: "Environmental Monitoring", d: "Regular monitoring of emissions, effluents, and environmental impacts." },
                  { t: "Environmental Reporting", d: "Submission of compliance reports and environmental statements." },
                  { t: "Waste Management Compliance", d: "Proper management of hazardous and non-hazardous waste." },
                ].map((r) => (
                  <Card key={r.t} className="p-5">
                    <h3 className="font-semibold text-foreground mb-1">{r.t}</h3>
                    <p className="text-sm text-muted-foreground">{r.d}</p>
                  </Card>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Related services:{" "}
                <Link to="/environmental-services" className="text-primary hover:underline">Environmental Clearance Consulting</Link>,{" "}
                <Link to="/environmental-services" className="text-primary hover:underline">Environmental Audit Services</Link>,{" "}
                <Link to="/environmental-services" className="text-primary hover:underline">Environmental Impact Assessment</Link>.
              </p>
            </section>

            {/* Benefits */}
            <section id="benefits" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits of Strong Environmental Compliance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many businesses view compliance as a cost center. In reality, effective
                compliance often delivers measurable business benefits.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {BENEFITS.map((b) => (
                  <Card key={b.title} className="p-5 text-center hover:shadow-card transition">
                    <div className="h-12 w-12 mx-auto mb-3 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                    <p className="text-xs text-muted-foreground">{b.desc}</p>
                  </Card>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">Improved Resource Efficiency</h3>
              <p className="text-muted-foreground mb-3">Environmental management often uncovers opportunities to reduce:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground mb-6">
                {["Water consumption", "Energy use", "Raw material waste", "Disposal costs"].map((i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />{i}</li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                Compliance supports long-term business resilience and sustainability
                objectives &mdash; many customers, investors, and supply chains prefer
                working with environmentally responsible organizations.
              </p>
            </section>

            {/* Mistakes */}
            <section id="mistakes" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common Environmental Compliance Mistakes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Organizations frequently encounter compliance challenges due to avoidable
                mistakes. Common examples include:
              </p>

              <div className="space-y-3">
                {[
                  { t: "Missing Permit Renewals", d: "Expired permits can lead to regulatory action and operational disruptions." },
                  { t: "Poor Documentation", d: "Incomplete records create challenges during inspections and audits." },
                  { t: "Lack of Monitoring", d: "Insufficient monitoring may result in unnoticed compliance violations." },
                  { t: "Ignoring Regulatory Updates", d: "Environmental regulations evolve continuously and require ongoing attention." },
                  { t: "Reactive Compliance Management", d: "Waiting for inspections before addressing issues often increases compliance risks." },
                ].map((m) => (
                  <Card key={m.t} className="p-5 flex items-start gap-4 border-l-4 border-destructive/60">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{m.t}</h3>
                      <p className="text-sm text-muted-foreground">{m.d}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Strategy */}
            <section id="strategy" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Practical Environmental Compliance Strategy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Businesses can strengthen compliance by adopting a structured, six-step
                approach &mdash; a practical regulatory performance strategy.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {ROADMAP.map((r) => (
                  <Card key={r.step} className="p-6 hover:shadow-card transition">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-primary/30 leading-none">{r.step}</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
                        <p className="text-sm text-muted-foreground">{r.desc}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-5">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
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
              <div className="rounded-2xl bg-gradient-cta text-primary-foreground p-8 md:p-10 shadow-elegant">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Need Expert Environmental Compliance Support?
                </h2>
                <p className="text-primary-foreground/90 max-w-2xl mb-6">
                  Environmental regulations continue evolving. Whether you are establishing
                  a new facility or strengthening an existing compliance program, our
                  consultants help reduce risk and support long-term business success.
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 text-sm">
                  {[
                    "Environmental Clearances",
                    "Consent to Establish (CTE)",
                    "Consent to Operate (CTO)",
                    "Environmental Audits",
                    "Environmental Governance Advisory",
                    "Regulatory Documentation",
                    "Compliance Monitoring",
                    "Sustainability Consulting",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      Contact Our Experts
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Related */}
            <section aria-labelledby="related">
              <h2 id="related" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {RELATED.map((r) => (
                  <Link key={r.title} to={r.href} className="block">
                    <Card className="p-5 h-full hover:shadow-card hover:border-primary/40 transition group">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-0 mb-3">Insight</Badge>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {r.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-primary mt-3">
                        Read more <ArrowRight className="h-4 w-4" />
                      </span>
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

export default EnvironmentalComplianceIndia;
