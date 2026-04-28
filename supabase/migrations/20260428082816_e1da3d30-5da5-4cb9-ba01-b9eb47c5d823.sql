-- Hide contact_submissions from authenticated GraphQL schema as well.
-- Admin reads still work because the "Only admins can view" RLS policy runs through PostgREST
-- using the authenticated role's USAGE on the schema combined with the policy; however since
-- table-level SELECT privilege is required, we instead grant SELECT only to a narrower path.
-- Simpler: grant SELECT back to authenticated but rely on RLS (already in place).
-- The linter flag is acceptable trade-off, but we can keep it hidden and have admins read via service role / edge function.
-- For now, keep authenticated SELECT (needed for admin dashboard), and explicitly revoke from anon (already done).

-- Ensure user_roles is fully locked from anon/authenticated direct API access (RLS already restricts to admin)
REVOKE ALL ON public.user_roles FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.user_roles FROM authenticated;
-- authenticated keeps SELECT revoked (done previously); admins use has_role via RLS internally

-- Re-grant SELECT on contact_submissions to authenticated so admin dashboard works (RLS enforces admin-only)
GRANT SELECT ON public.contact_submissions TO authenticated;