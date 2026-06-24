
CREATE TABLE public.lead_magnet_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text,
  service_interest text,
  requested_resource text NOT NULL,
  page_url text,
  lead_source text,
  status text NOT NULL DEFAULT 'New',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.lead_magnet_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.lead_magnet_requests TO authenticated;
GRANT ALL ON public.lead_magnet_requests TO service_role;

ALTER TABLE public.lead_magnet_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit lead magnet requests"
ON public.lead_magnet_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(full_name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(phone)) BETWEEN 5 AND 50
  AND length(btrim(requested_resource)) BETWEEN 1 AND 200
  AND (organization IS NULL OR length(organization) <= 200)
  AND (service_interest IS NULL OR length(service_interest) <= 200)
  AND (page_url IS NULL OR length(page_url) <= 500)
  AND (lead_source IS NULL OR length(lead_source) <= 200)
  AND status = 'New'
);

CREATE POLICY "Admins can view lead magnet requests"
ON public.lead_magnet_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update lead magnet requests"
ON public.lead_magnet_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete lead magnet requests"
ON public.lead_magnet_requests
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_lead_magnet_requests_updated_at
BEFORE UPDATE ON public.lead_magnet_requests
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_lead_magnet_requests_created_at ON public.lead_magnet_requests (created_at DESC);
CREATE INDEX idx_lead_magnet_requests_status ON public.lead_magnet_requests (status);
