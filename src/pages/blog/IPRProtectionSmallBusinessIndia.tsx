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
  Stamp,
  Palette,
  MapPin,
  Lock,
  Briefcase,
  Rocket,
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
import heroImage from "@/assets/ipr-protection-small-business-india.jpg";

const POST = {
  title:
    "IPR Protection for Small Businesses in India: Complete Guide to Patents, Trademarks, Copyrights & Trade Secrets",
  description:
    "Learn how small businesses in India can protect intellectual property through patents, trademarks, copyrights, design registrations, NDAs, trade secrets, and strategic IPR management.",
  slug: "ipr-protection-small-business-india",
  url: "https://enviroandipr.com/blogs/ipr-protection-small-business-india",
  author: "EnviroAndIPR Editorial Team",
  category: "Intellectual Property",
  publishedISO: "2026-06-09",
  updatedISO: "2026-06-09",
  readingTime: "16 min read",
};

const TOC = [
  { id: "what-is", label: "What is IPR?" },
  { id: "why-matters", label: "Why IPR is Critical" },
  { id: "types", label: "Types of Intellectual Property" },
  { id: "framework", label: "Indian IPR Framework" },
  { id: "ndas", label: "Role of NDAs" },
  { id: "mistakes", label: "Common IPR Mistakes" },
  { id: "strategy", label: "IPR as Business Strategy" },
  { id: "build", label: "Build Your IPR Strategy" },
  { id: "consultants", label: "How Consultants Help" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Expert Support" },
];

const KEY_TAKEAWAYS = [
  { icon: ShieldCheck, text: "Intellectual property is one of the most valuable, defensible assets a small business can build." },
  { icon: Stamp, text: "Patents, trademarks, copyrights, designs, GIs, and trade secrets each protect a different layer of your business." },
  { icon: Lock, text: "NDAs are the first line of defence whenever you share ideas with employees, vendors, or investors." },
  { icon: TrendingUp, text: "A protected IP portfolio improves valuation, investor confidence, and licensing revenue." },
  { icon: AlertTriangle, text: "Delays in registration, public disclosure before filing, and weak contracts cause most avoidable IP losses." },
  { icon: Rocket, text: "MSMEs and startups in India get expedited examination and significant fee concessions on patents and trademarks." },
];

const TYPES = [
  {
    id: "patents",
    icon: Lightbulb,
    name: "Patents",
    focus: "Inventions & Processes",
    term: "20 years",
    what: "New, non-obvious, industrially applicable inventions — products, processes, methods, formulations, devices.",
    benefits: ["Exclusive right to commercialise the invention", "Block competitors from copying", "Licensing & royalty income", "Strong investor signal"],
  },
  {
    id: "trademarks",
    icon: Stamp,
    name: "Trademarks",
    focus: "Brand Identity",
    term: "10 years, renewable indefinitely",
    what: "Names, logos, slogans, sounds, colour combinations and packaging that identify your goods or services in the market.",
    benefits: ["Exclusive right to your brand", "Legal action against counterfeiters", "Asset that appreciates with goodwill", "Foundation for franchising"],
  },
  {
    id: "copyright",
    icon: FileText,
    name: "Copyright",
    focus: "Creative Works",
    term: "Lifetime of author + 60 years",
    what: "Software code, written content, books, music, films, photographs, artistic works, website designs and databases.",
    benefits: ["Automatic protection on creation", "Registration strengthens enforcement", "Licensing of digital works", "Protection across 170+ Berne countries"],
  },
  {
    id: "designs",
    icon: Palette,
    name: "Design Registration",
    focus: "Product Aesthetics",
    term: "10 years, extendable by 5",
    what: "Shape, configuration, pattern, ornamentation or composition of lines and colours applied to a product — packaging, industrial designs, product appearance.",
    benefits: ["Stops visual copying", "Critical for D2C and consumer brands", "Defends against lookalikes", "Strengthens brand differentiation"],
  },
  {
    id: "gi",
    icon: MapPin,
    name: "Geographical Indication",
    focus: "Geographical Indication",
    term: "10 years, renewable",
    what: "Products with a specific geographical origin and qualities tied to that origin — Darjeeling Tea, Mysore Silk, Banarasi Saree, Alphonso Mango.",
    benefits: ["Collective right for producers", "Premium pricing for authentic goods", "Export market recognition", "Protection against passing off"],
  },
  {
    id: "trade-secrets",
    icon: Lock,
    name: "Trade Secrets",
    focus: "Confidential Know-How",
    term: "Indefinite — as long as secrecy is maintained",
    what: "Formulas, recipes, manufacturing processes, customer lists, pricing models, algorithms and proprietary methodologies.",
    benefits: ["No registration cost", "No expiry if managed well", "Protects what cannot be patented", "Best for know-how and processes"],
  },
];

const FRAMEWORK = [
  { icon: Landmark, name: "Indian Patent Office (IPO)", role: "Patents & Designs — under CGPDTM, Ministry of Commerce & Industry" },
  { icon: Stamp, name: "Trademark Registry", role: "Five regional offices — Mumbai, Delhi, Chennai, Kolkata, Ahmedabad" },
  { icon: FileText, name: "Copyright Office", role: "Registration under the Copyright Act, 1957" },
  { icon: Palette, name: "Design Registry (Kolkata)", role: "Registration under the Designs Act, 2000" },
  { icon: MapPin, name: "GI Registry (Chennai)", role: "Registration under the GI of Goods Act, 1999" },
];

const NDA_CHECKLIST = [
  "Before sharing a business idea with a potential co-founder",
  "Onboarding employees who will access proprietary information",
  "Engaging freelancers, agencies, or contract developers",
  "Discussions with manufacturers, suppliers, or OEM partners",
  "Investor pitches and due diligence (mutual NDA)",
  "Licensing and distribution negotiations",
  "Joint ventures, M&A discussions, and technology transfer",
];

const MISTAKES = [
  { t: "Delayed trademark registration", d: "Launching a brand publicly before filing — third parties can register your mark first." },
  { t: "Public disclosure before patent filing", d: "Pitching, exhibiting, or publishing the invention destroys novelty in most jurisdictions." },
  { t: "No NDAs in place", d: "Sharing ideas, source code, or formulations with vendors and employees with no written confidentiality." },
  { t: "Weak founder & IP-assignment contracts", d: "Founders, freelancers, and employees retaining IP ownership instead of assigning it to the company." },
  { t: "Poor documentation", d: "No lab notebooks, version histories, or dated records — making it hard to prove first use or authorship." },
  { t: "Ignoring international filing windows", d: "Missing the 12-month Paris Convention and 30/31-month PCT national-phase deadlines." },
];

const STRATEGY_STEPS = [
  { step: "01", title: "Identify Intellectual Assets", desc: "Audit everything your business creates — brand assets, products, software, designs, processes, customer data, content." },
  { step: "02", title: "Prioritise Protection", desc: "Classify each asset by commercial value, copy-risk and time-sensitivity. Trademarks and patents typically lead the queue." },
  { step: "03", title: "Register Rights", desc: "File trademarks, patents, designs, copyrights and GIs in the right order, in the right classes, in the right jurisdictions." },
  { step: "04", title: "Implement NDAs & Contracts", desc: "Standardise NDAs, employment IP assignments, vendor confidentiality clauses, and licensing templates." },
  { step: "05", title: "Monitor Infringement", desc: "Set up brand watch, market surveillance, marketplace takedowns and customs recordal to catch infringers early." },
  { step: "06", title: "Commercialise IP", desc: "Use your IP — licensing, franchising, collateral for funding, joint ventures and export market entry." },
];

const FAQS = [
  { q: "What is IPR?", a: "Intellectual Property Rights (IPR) are legal rights granted to creators and businesses over their inventions, brands, creative works, designs and confidential information, allowing them exclusive use and commercial exploitation." },
  { q: "How do small businesses protect intellectual property in India?", a: "By registering trademarks for brand identity, filing patents for inventions, registering copyrights for creative works and designs for product aesthetics, signing NDAs with everyone who handles confidential information, and putting IP-assignment clauses in employment and vendor contracts." },
  { q: "What is the difference between a patent and a trademark?", a: "A patent protects a new invention or process for up to 20 years, while a trademark protects a brand identifier (name, logo, slogan) used in trade and can be renewed indefinitely." },
  { q: "What is copyright protection?", a: "Copyright protects original literary, artistic, musical, dramatic, cinematographic and software works. In India it is automatic upon creation, but registration provides strong evidentiary value in disputes." },
  { q: "What is a trade secret?", a: "A trade secret is confidential business information — formula, process, customer list, algorithm — that gives a competitive edge and is protected through secrecy, NDAs and access controls rather than registration." },
  { q: "How long does trademark protection last in India?", a: "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely for further 10-year periods on payment of renewal fees." },
  { q: "What is an NDA?", a: "A Non-Disclosure Agreement (NDA) is a contract that legally binds parties to keep specified information confidential and restricts its use to a defined purpose." },
  { q: "What is design registration?", a: "Design registration under the Designs Act, 2000 protects the visual appearance of a product — its shape, configuration, pattern and ornamentation — for 10 years, extendable by 5." },
  { q: "What is a GI tag?", a: "A Geographical Indication is a sign used on products that have a specific geographical origin and possess qualities or a reputation due to that origin, such as Darjeeling Tea or Banarasi Saree." },
  { q: "Can startups file patents in India?", a: "Yes. Recognised startups and MSMEs get up to 80% fee concession and access to expedited examination, which can reduce grant timelines significantly." },
  { q: "How much does trademark registration cost in India?", a: "Government fee for individuals, startups, small enterprises and MSMEs is ₹4,500 per class for e-filing; for other applicants it is ₹9,000 per class. Professional fees are additional." },
  { q: "When should I file a patent — before or after launching?", a: "Always before any public disclosure, demo, exhibition, sale or publication. Public disclosure before filing destroys novelty in most jurisdictions and can permanently bar protection." },
  { q: "Do I need to register copyright if it is automatic?", a: "Registration is not mandatory, but a Copyright Registration Certificate is strong prima-facie evidence of ownership and substantially strengthens enforcement and licensing." },
  { q: "How do I protect my brand internationally?", a: "Through the Madrid Protocol for trademarks, the Patent Cooperation Treaty (PCT) for patents, the Hague System for designs, and direct national filings in priority markets." },
  { q: "What happens if someone infringes my IP?", a: "You can issue a cease-and-desist notice, file a civil suit for injunction and damages, initiate criminal action where applicable (trademarks, copyright), and pursue marketplace takedowns and customs seizure of counterfeit goods." },
];

const RELATED = [
  { title: "Trademark Registration in India: Step-by-Step Guide for Founders", href: "/ipr-services" },
  { title: "Patent Filing in India: Process, Costs and Timelines Explained", href: "/ipr-services" },
  { title: "Copyright Registration for Software & Digital Content", href: "/ipr-services" },
  { title: "Drafting Bullet-Proof NDAs for Startups and MSMEs", href: "/ipr-services" },
];

const IPRProtectionSmallBusinessIndia = () => {
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
        <title>IPR Protection for Small Businesses in India: Complete Guide to Patents, Trademarks & Copyrights (2026)</title>
        <meta name="description" content={POST.description} />
        <link rel="canonical" href={POST.url} />
        <meta property="og:title" content="IPR Protection for Small Businesses in India (2026)" />
        <meta property="og:description" content={POST.description} />
        <meta property="og:url" content={POST.url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPR Protection for Small Businesses in India (2026)" />
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
            { "@type": "ListItem", position: 3, name: "IPR Protection for Small Businesses", item: POST.url },
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
              <li className="text-foreground">IPR Protection for Small Businesses</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15 border-0">
                {POST.category}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                IPR Protection for Small Businesses in India: Complete Guide to Patents, Trademarks, Copyrights &amp; Trade Secrets
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A practical, founder-friendly playbook for MSMEs, startups, manufacturers, software companies and creative professionals to protect every layer of their intellectual property in India.
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
                alt="Indian small business founder reviewing patent and trademark documents in a modern office"
                title="IPR Protection for Small Businesses in India"
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
                For most small businesses in India, the most valuable asset on the balance sheet is invisible. It is the brand customers recognise, the product design competitors envy, the source code that powers the platform, and the formula behind the bestseller. Together, these intangible assets are the company's <strong>intellectual property</strong> — and in 2026, they are increasingly the difference between a defensible business and a copyable one.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                And yet, intellectual property protection remains one of the most under-managed areas in Indian small business. Founders launch products before filing trademarks. Startups pitch ideas to investors with no NDA in place. Manufacturers share specifications with vendors using nothing more than an email thread. Creative agencies hand over deliverables without an IP-assignment clause. The pattern repeats across MSMEs, software companies, D2C brands, exporters and creative professionals — and the cost is rarely visible until something has already been lost.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The good news: the Indian intellectual property framework is mature, accessible, and unusually friendly to small businesses. Recognised startups and MSMEs enjoy up to <strong>80% concessions</strong> on patent fees, expedited examination, dedicated facilitation under the Startup India IPR scheme (SIPP), and a digitised filing infrastructure across trademarks, patents, designs, copyrights and GIs. The barrier is no longer cost or complexity — it is awareness and prioritisation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This guide is the practical playbook we wish every founder had when they started. It covers what each type of IP protects, how the Indian framework is structured, where small businesses typically lose IP and how to avoid it, and how to turn intellectual property from a defensive cost line into an active driver of valuation, licensing revenue and competitive advantage.
              </p>
            </section>

            {/* What is */}
            <section id="what-is" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                What is Intellectual Property Rights (IPR)?
              </h2>

              <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Intellectual Property Rights (IPR)</strong> are legal rights granted to creators, inventors and businesses over the intangible assets they create — inventions, brand identifiers, creative works, designs and confidential information. These rights give the owner an exclusive period to use, license, sell, or otherwise commercially exploit the asset, while preventing unauthorised copying or imitation.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                IPR exists because innovation, branding and creative effort have economic value — but unlike physical goods, intangible assets are easy to copy and hard to control without a legal framework. The Indian IPR framework formalises four things every business needs: <strong>ownership</strong> of the asset, <strong>exclusive commercial rights</strong> for a defined period, <strong>recourse</strong> against infringement, and a recognised <strong>transferable property right</strong> that can be licensed, assigned, valued or used as collateral.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Intellectual Property", d: "The intangible output of human creativity — inventions, brands, designs, content, software, formulas." },
                  { t: "IPR Framework", d: "The body of statutes, registries and courts that recognise, register, and enforce ownership of intellectual property." },
                  { t: "Ownership Rights", d: "Exclusive legal entitlement to use, license, transfer or prevent others from using your protected IP." },
                  { t: "Commercial Value", d: "IP can be licensed, sold, valued for fundraising, used as collateral, and accounted for as a balance-sheet asset." },
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
                Why IPR Protection is Critical for Small Businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For a large enterprise, losing a single trademark dispute is a manageable cost. For a small business, the same loss can erase years of brand-building. The asymmetry is the point: small businesses have <em>more</em> to lose proportionally from weak IP — and <em>more</em> to gain from strong IP — than any other category of company.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { t: "Competitive Advantage", d: "Registered IP creates a legal moat — competitors cannot copy your brand, design or invention without infringement risk." },
                  { t: "Business Valuation", d: "A documented IP portfolio measurably increases enterprise value, especially during fundraising, M&A or exit." },
                  { t: "Investor Confidence", d: "Sophisticated investors run IP diligence — clean ownership, filed trademarks and IP-assignment chains are non-negotiable." },
                  { t: "Market Differentiation", d: "Trademarks, designs and GIs are how customers tell you apart from lookalikes in crowded marketplaces." },
                  { t: "Revenue Generation", d: "IP can be licensed, franchised, sub-licensed and used to enter new markets without capital expenditure." },
                  { t: "Export Readiness", d: "International buyers, marketplaces and customs authorities increasingly require proof of IP ownership for market access." },
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
                    Real-world pattern: a D2C food brand built a loyal customer base for three years on Instagram and Amazon without filing its trademark. When a copycat seller registered the identical mark in the same class, the founder spent 18 months and significant legal cost in opposition and rectification proceedings — all of which a ₹4,500 filing on day one would have prevented.
                  </p>
                </div>
              </div>
            </section>

            {/* Types */}
            <section id="types" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Types of Intellectual Property Every Business Should Know
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Indian law recognises six principal categories of intellectual property. Most small businesses need at least three of them — and the best portfolios layer them together so that what one category does not cover, another does.
              </p>

              <div className="space-y-6">
                {TYPES.map((t) => (
                  <Card key={t.id} id={t.id} className="p-6 scroll-mt-24">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <t.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{t.name}</h3>
                          <Badge variant="outline" className="text-xs">{t.focus}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground"><strong>Protection term:</strong> {t.term}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">What it protects:</strong> {t.what}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Business benefits</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {t.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Framework */}
            <section id="framework" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Understanding the Indian IPR Framework
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Intellectual property in India is administered by specialised registries under the Office of the Controller General of Patents, Designs and Trademarks (CGPDTM), with copyright administered separately by the Copyright Office. Each registry has its own statute, examination procedure, fee schedule and appellate route.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {FRAMEWORK.map((f) => (
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
                  India is a signatory to the <strong>TRIPS Agreement, Paris Convention, Berne Convention, PCT, Madrid Protocol</strong> and the <strong>Hague System</strong>. This means a single well-structured Indian filing can be extended into 100+ jurisdictions through international routes — a crucial lever for exporters and global startups.
                </p>
              </div>
            </section>

            {/* NDAs */}
            <section id="ndas" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Role of NDAs in Intellectual Property Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Non-Disclosure Agreements (NDAs)</strong> are the first line of defence in any IP strategy. Patents protect inventions only after filing, trademarks protect brands only after use or registration, and trade secrets only stay secret if you legally bind everyone who sees them. A well-drafted NDA is the contractual layer that holds everything else together.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Why NDAs Matter</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Creates a legal obligation of confidentiality — without one, information shared in business meetings is generally not protected.",
                  "Defines exactly what is confidential, what is not, and what the recipient may use it for.",
                  "Establishes the remedies available in case of breach — injunction, damages, return of materials.",
                  "Strengthens trade-secret protection by demonstrating reasonable steps to maintain secrecy.",
                  "Sets the foundation for downstream agreements — licensing, joint ventures, employment.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" /> {p}
                  </li>
                ))}
              </ul>

              <Card className="p-6 bg-secondary/30">
                <h3 className="text-lg font-bold text-foreground mb-4 inline-flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-primary" /> When Should You Use an NDA?
                </h3>
                <ul className="space-y-2">
                  {NDA_CHECKLIST.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {/* Mistakes */}
            <section id="mistakes" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Common Intellectual Property Mistakes Made by Small Businesses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most IP losses in Indian small business are not caused by sophisticated infringers — they are caused by avoidable internal mistakes. Six patterns account for the vast majority of disputes our team sees.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {MISTAKES.map((m) => (
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

            {/* Strategy */}
            <section id="strategy" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                IPR as a Business Strategy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The shift from <em>defensive</em> IP (registering to avoid loss) to <em>strategic</em> IP (registering to generate value) is what separates a good portfolio from a great one. Intellectual property, properly managed, is a revenue stream, an investor magnet, a market-entry lever and a balance-sheet asset.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Briefcase, t: "Licensing", d: "License your patent, trademark or copyright to third parties for royalties — recurring revenue from IP you already own." },
                  { icon: Building2, t: "Franchising", d: "Trademarks and trade dress are the foundation of every franchise model — no registered mark, no franchise." },
                  { icon: TrendingUp, t: "Valuation", d: "IP valuation directly affects company valuation in fundraising, M&A and ESOP pricing." },
                  { icon: Users, t: "Investor Attraction", d: "VCs treat clean IP ownership and filed protection as a minimum hygiene check during diligence." },
                  { icon: Rocket, t: "Business Expansion", d: "Madrid Protocol and PCT filings open international markets without setting up local entities first." },
                  { icon: Award, t: "Collateralisation", d: "Indian banks and NBFCs increasingly accept IP as collateral for business loans, especially for MSMEs." },
                ].map((s) => (
                  <Card key={s.t} className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <s.icon className="h-4.5 w-4.5" />
                      </div>
                      <h4 className="font-semibold text-foreground">{s.t}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Build strategy */}
            <section id="build" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How to Build an IPR Protection Strategy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A workable IPR strategy for a small business is a six-step loop. Done sequentially in the first 90 days of operations, it costs less than most marketing campaigns and protects every asset the business creates for years afterwards.
              </p>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
                <div className="space-y-5">
                  {STRATEGY_STEPS.map((s) => (
                    <div key={s.step} className="relative flex gap-4">
                      <div className="hidden sm:flex h-10 w-10 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-sm flex-shrink-0 relative z-10">
                        {s.step}
                      </div>
                      <Card className="p-5 flex-1">
                        <div className="flex items-center gap-2 mb-1.5 sm:hidden">
                          <Badge className="bg-primary text-primary-foreground">{s.step}</Badge>
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">{s.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Consultants */}
            <section id="consultants" className="scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                How Professional IPR Consultants Help
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                IPR is one of those domains where the cost of getting it wrong dwarfs the cost of getting professional help. An experienced IPR consultant brings registry-side relationships, drafting expertise, prior-art search capability, classification accuracy and ongoing portfolio management — areas where DIY filings most often fail.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Patent Filing & Prosecution", d: "Drafting specifications, claims, prior-art search, examination responses, and PCT/national-phase filings." },
                  { t: "Trademark Registration", d: "Classification, search, filing, opposition handling, renewal, watch service, and Madrid Protocol filings." },
                  { t: "Copyright Registration", d: "Filing for software, content, music, films, artistic works and database compilations." },
                  { t: "Design Registration", d: "Drafting representations, novelty assessment, classification under Locarno, and Hague filings." },
                  { t: "IP Strategy Consulting", d: "Portfolio planning, asset audits, freedom-to-operate analysis, valuation and licensing structuring." },
                  { t: "Portfolio Management", d: "Renewal tracking, infringement monitoring, marketplace takedowns, customs recordal and litigation support." },
                ].map((c) => (
                  <Card key={c.t} className="p-5">
                    <h4 className="font-semibold text-foreground mb-1.5">{c.t}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.d}</p>
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
                  Need Help Protecting Your Intellectual Property?
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl">
                  Work with EnviroAndIPR's IPR experts to register, manage and commercialise every layer of your intellectual property — from your first trademark to your global patent portfolio.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {[
                    "Patent Registration",
                    "Trademark Registration",
                    "Copyright Registration",
                    "Design Registration",
                    "GI Registration",
                    "NDA Drafting",
                    "IP Portfolio Management",
                    "IPR Strategy Consulting",
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
                  <Link to="/ipr-services">
                    <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10">
                      Speak with an IPR Expert
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

export default IPRProtectionSmallBusinessIndia;
