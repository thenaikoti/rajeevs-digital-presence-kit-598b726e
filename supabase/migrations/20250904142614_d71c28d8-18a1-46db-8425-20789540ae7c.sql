-- Fix security warning by setting proper search_path for the function
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN lower(regexp_replace(trim(title), '[^a-zA-Z0-9\s]', '', 'g')) 
    |> regexp_replace('\s+', '-', 'g');
END;
$$;