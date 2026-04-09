import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, LogOut, Save, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featured_image?: string;
  published: boolean;
  author_name: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    featured_image: '',
    published: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin/login');
        return;
      }

      // Verify admin role
      const { data: roleData } = await (supabase as any)
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      if (!roleData) {
        navigate('/');
        return;
      }

      setUser(session.user);
      fetchPosts();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/admin/login');
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchPosts = async () => {
    const { data, error } = await (supabase as any)
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setLoading(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const validateInput = (data: typeof formData) => {
    const errors: string[] = [];
    
    // Title validation
    if (!data.title.trim()) {
      errors.push('Title is required');
    } else if (data.title.length > 200) {
      errors.push('Title must be less than 200 characters');
    }
    
    // Content validation
    if (!data.content.trim()) {
      errors.push('Content is required');
    } else if (data.content.length > 50000) {
      errors.push('Content must be less than 50,000 characters');
    }
    
    // Excerpt validation
    if (data.excerpt && data.excerpt.length > 500) {
      errors.push('Excerpt must be less than 500 characters');
    }
    
    // Featured image URL validation
    if (data.featured_image && !isValidUrl(data.featured_image)) {
      errors.push('Featured image must be a valid URL');
    }
    
    return errors;
  };
  
  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSavePost = async () => {
    // Validate input
    const validationErrors = validateInput(formData);
    if (validationErrors.length > 0) {
      toast.error(validationErrors[0]);
      return;
    }

    const slug = generateSlug(formData.title);
    
    // Sanitize content before saving
    const sanitizedContent = DOMPurify.sanitize(formData.content, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'blockquote', 'code', 'pre'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class']
    });
    
    const postData = {
      title: formData.title.trim(),
      content: sanitizedContent,
      excerpt: formData.excerpt?.trim() || sanitizedContent.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
      featured_image: formData.featured_image?.trim() || null,
      published: formData.published,
      slug
    };

    try {
      if (editingPost) {
        const { error } = await (supabase as any)
          .from('blog_posts')
          .update(postData)
          .eq('id', editingPost.id);

        if (error) throw error;
        toast.success('Post updated successfully!');
      } else {
        const { error } = await (supabase as any)
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
        toast.success('Post created successfully!');
      }

      setFormData({ title: '', content: '', excerpt: '', featured_image: '', published: false });
      setEditingPost(null);
      setIsCreating(false);
      fetchPosts();
    } catch (error: any) {
      toast.error('Error saving post: ' + error.message);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await (supabase as any)
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Post deleted successfully!');
      fetchPosts();
    } catch (error: any) {
      toast.error('Error deleting post: ' + error.message);
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',
      featured_image: post.featured_image || '',
      published: post.published
    });
    setIsCreating(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg font-bold text-primary">
              EnviroAndIPR
            </Link>
            <span className="text-muted-foreground">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.email}
            </span>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <Button 
            onClick={() => {
              setIsCreating(true);
              setEditingPost(null);
              setFormData({ title: '', content: '', excerpt: '', featured_image: '', published: false });
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Post Editor */}
          {(isCreating || editingPost) && (
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {editingPost ? 'Edit Post' : 'Create New Post'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter post title"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Excerpt (Optional)</label>
                    <Textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief description of the post"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Featured Image URL (Optional)</label>
                    <Input
                      value={formData.featured_image}
                      onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Content</label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your blog post content here..."
                      rows={15}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.published}
                      onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                    />
                    <label className="text-sm font-medium">
                      Publish immediately
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={handleSavePost}>
                      <Save className="mr-2 h-4 w-4" />
                      {editingPost ? 'Update Post' : 'Create Post'}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsCreating(false);
                        setEditingPost(null);
                        setFormData({ title: '', content: '', excerpt: '', featured_image: '', published: false });
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Posts List */}
          <div className={`${isCreating || editingPost ? 'lg:col-span-1' : 'lg:col-span-3'}`}>
            <Card>
              <CardHeader>
                <CardTitle>All Posts ({posts.length})</CardTitle>
                <CardDescription>
                  Manage your blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {posts.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    No blog posts yet. Create your first one!
                  </p>
                ) : (
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <div key={post.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {post.author_name}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(post.created_at).toLocaleDateString()}
                              </div>
                              <span className={`px-2 py-1 rounded text-xs ${
                                post.published 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {post.published ? 'Published' : 'Draft'}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditPost(post)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeletePost(post.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;