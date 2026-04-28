-- 1. Tighten contact_submissions INSERT policy (replace WITH CHECK true)
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;

CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(name)) BETWEEN 1 AND 200
  AND length(trim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(trim(message)) BETWEEN 1 AND 5000
  AND (phone IS NULL OR length(phone) <= 50)
  AND (company IS NULL OR length(company) <= 200)
  AND (service IS NULL OR length(service) <= 200)
);

-- 2. Hide user_roles and contact_submissions from GraphQL discovery for anon/authenticated.
-- RLS still controls actual row access; this revokes table-level SELECT so the objects
-- don't appear in the auto-generated GraphQL schema for unprivileged roles.
REVOKE SELECT ON public.user_roles FROM anon, authenticated;
REVOKE SELECT ON public.contact_submissions FROM anon;
-- Keep authenticated SELECT on contact_submissions since admin reads go through RLS via PostgREST

-- 3. Restrict EXECUTE on SECURITY DEFINER helper has_role to roles that need it.
-- It's used inside RLS policies (run as definer), so revoking from anon/authenticated
-- does not break policy evaluation.
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;