import { useEffect, useState } from 'react';
import { CheckCircle2, FileDown, Loader2, Mail, Phone } from 'lucide-react';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { LeadMagnet } from '@/data/leadMagnets';

const schema = z.object({
  full_name: z.string().trim().min(2, 'Please enter your full name').max(200),
  email: z.string().trim().email('Please enter a valid email').max(320),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .max(50)
    .regex(/^[0-9+\-\s()]+$/, 'Phone can contain digits, +, -, () and spaces only'),
  organization: z.string().trim().max(200).optional().or(z.literal('')),
  service_interest: z.string().trim().max(200).optional().or(z.literal('')),
});

interface Props {
  magnet: LeadMagnet | null;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}

const initial = {
  full_name: '',
  email: '',
  phone: '',
  organization: '',
  service_interest: '',
};

const LeadMagnetModal = ({ magnet, open, onOpenChange }: Props) => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      setSuccess(false);
      setErrors({});
    }
  }, [open, magnet?.id]);

  const update = (k: keyof typeof initial, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!magnet) return;

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fe[String(i.path[0])] = i.message;
      });
      setErrors(fe);
      return;
    }

    setSubmitting(true);
    const payload = {
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      organization: parsed.data.organization || null,
      service_interest: parsed.data.service_interest || magnet.category,
      requested_resource: magnet.title,
      page_url: typeof window !== 'undefined' ? window.location.href : null,
      lead_source: 'Lead Magnet Modal',
      status: 'New',
    };

    const { error } = await (supabase as any)
      .from('lead_magnet_requests')
      .insert([payload]);

    setSubmitting(false);

    if (error) {
      toast.error('Could not submit your request. Please try again.');
      return;
    }

    setForm(initial);
    setSuccess(true);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="text-center py-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Request Submitted Successfully</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for your interest. Your request has been received successfully. Our team will
              review your request and share the requested resource via email shortly.
              <br />
              <br />
              If your requirement is urgent, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Return to Website
              </Button>
              <Button asChild>
                <Link to="/contact" onClick={() => onOpenChange(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileDown className="w-5 h-5 text-brand-green" />
                {magnet && <Badge variant="secondary">{magnet.category}</Badge>}
              </div>
              <DialogTitle className="text-2xl">{magnet?.title}</DialogTitle>
              <DialogDescription>
                Share a few details and our team will email you the resource shortly. We respect your
                privacy — your information is only used to send the requested resource and relevant
                follow-up.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="lm-name">Full Name *</Label>
                <Input
                  id="lm-name"
                  value={form.full_name}
                  onChange={(e) => update('full_name', e.target.value)}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                />
                {errors.full_name && <p className="text-xs text-destructive mt-1">{errors.full_name}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="lm-email">Email Address *</Label>
                  <Input
                    id="lm-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="lm-phone">Phone Number *</Label>
                  <Input
                    id="lm-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+91 9876543210"
                    autoComplete="tel"
                    required
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="lm-org">Organization Name</Label>
                <Input
                  id="lm-org"
                  value={form.organization}
                  onChange={(e) => update('organization', e.target.value)}
                  placeholder="Company / Institution"
                  autoComplete="organization"
                />
              </div>

              <div>
                <Label htmlFor="lm-svc">Service Interested In</Label>
                <Input
                  id="lm-svc"
                  value={form.service_interest}
                  onChange={(e) => update('service_interest', e.target.value)}
                  placeholder={magnet ? `${magnet.category} (default)` : 'Environmental / IPR / LPO'}
                />
              </div>

              <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-muted-foreground">
                Requested Resource: <span className="font-medium text-foreground">{magnet?.title}</span>
              </div>

              <Button type="submit" disabled={submitting} className="w-full bg-brand-green hover:bg-brand-green/90 text-white">
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>Request Resource</>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                <Mail className="inline w-3 h-3 mr-1" /> rajeev@enviroandipr.com
                <span className="mx-2">•</span>
                <Phone className="inline w-3 h-3 mr-1" /> Manual delivery within 24 hours
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadMagnetModal;
