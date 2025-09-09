-- Update RLS policies for blog_posts to restrict admin access to admin role only
DROP POLICY IF EXISTS "Authenticated users can manage all blog posts" ON public.blog_posts;

-- Create new secure admin policy
CREATE POLICY "Only admins can manage blog posts"
  ON public.blog_posts
  FOR ALL
  USING (public.get_user_role(auth.uid()) = 'admin');