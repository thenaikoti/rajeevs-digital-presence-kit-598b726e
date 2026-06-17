import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import BlogImage from '@/components/BlogImage';
import envComplianceHero from '@/assets/environmental-compliance-india-2026.jpg';
import iprPillarHero from '@/assets/ipr-protection-small-business-india.jpg';
import lpoPillarHero from '@/assets/legal-process-outsourcing-services.jpg';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featured_image: string;
  author_name: string;
  created_at: string;
}

const FEATURED = [
  {
    slug: 'legal-process-outsourcing-services',
    image: lpoPillarHero,
    category: 'Legal Process Outsourcing',
    title: 'Legal Process Outsourcing (LPO): Complete Guide to Modern Legal Support Services (2026)',
    excerpt:
      'How law firms, corporates and compliance teams use LPO to reduce legal costs, scale specialised expertise and modernise legal operations with AI.',
    alt: 'Modern legal operations team analysing AI-powered contract dashboards in a global LPO delivery centre',
  },
  {
    slug: 'environmental-compliance-regulations-india',
    image: envComplianceHero,
    category: 'Environmental Compliance',
    title: 'Environmental Compliance Regulations in India: Complete Guide for Businesses (2026)',
    excerpt:
      'A practical 2026 guide to environmental governance, CPCB & SPCB regulations, clearances, audits, and ESG reporting for Indian businesses.',
    alt: 'Environmental compliance regulations and sustainability monitoring for businesses in India',
  },
  {
    slug: 'ipr-protection-small-business-india',
    image: iprPillarHero,
    category: 'Intellectual Property',
    title: 'IPR Protection for Small Businesses in India: Complete Guide to Patents, Trademarks & Copyrights (2026)',
    excerpt:
      'A founder-friendly playbook for MSMEs and startups to protect every layer of intellectual property — patents, trademarks, copyrights, designs, GIs, NDAs and trade secrets.',
    alt: 'Indian small business founder reviewing intellectual property documents',
  },
];

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await (supabase as any)
        .from('blog_posts')
        .select('id, title, excerpt, slug, featured_image, author_name, created_at')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insights & Updates | EnviroAndIPR Blog</title>
        <meta name="description" content="Latest articles on environmental compliance, sustainability, and intellectual property from EnviroAndIPR." />
        <link rel="canonical" href="https://enviroandipr.com/blogs" />
        <meta property="og:title" content="Insights & Updates | EnviroAndIPR Blog" />
        <meta property="og:description" content="Latest articles on environmental compliance and IP protection." />
        <meta property="og:url" content="https://enviroandipr.com/blogs" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest Insights & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest trends in environmental compliance and intellectual property protection
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">Featured Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map((f) => (
              <Link key={f.slug} to={`/blogs/${f.slug}`} className="block group">
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                  <BlogImage
                    src={f.image}
                    alt={f.alt}
                    wrapperClassName="rounded-none"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">{f.category}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-1">{f.excerpt}</p>
                    <span className="inline-flex items-center text-primary font-medium">
                      Read the guide <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[0, 1, 2].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="aspect-[16/9] w-full rounded-none" />
                  <div className="p-6 space-y-3">
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </Card>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">More articles coming soon</h2>
              <p className="text-muted-foreground mb-8">
                We're working on creating valuable content for you. Check back soon!
              </p>
              <Link to="/">
                <Button>
                  Back to Home <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col">
                  <BlogImage
                    src={post.featured_image}
                    alt={post.title}
                    wrapperClassName="rounded-none"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author_name}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <Link to={`/blogs/${post.slug}`} className="mt-auto">
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
