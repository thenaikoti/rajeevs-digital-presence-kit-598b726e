import { useEffect, useMemo, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Eye, RefreshCw, Search } from 'lucide-react';
import { LEAD_MAGNETS } from '@/data/leadMagnets';

interface LeadMagnetRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  organization: string | null;
  service_interest: string | null;
  requested_resource: string;
  page_url: string | null;
  lead_source: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

const STATUS_OPTIONS = [
  'New',
  'Resource Sent',
  'Follow Up Required',
  'Qualified Lead',
  'Converted Client',
];

const statusVariant = (status: string): 'default' | 'secondary' | 'outline' | 'destructive' => {
  switch (status) {
    case 'New':
      return 'default';
    case 'Resource Sent':
      return 'secondary';
    case 'Converted Client':
      return 'default';
    case 'Qualified Lead':
      return 'secondary';
    default:
      return 'outline';
  }
};

const LeadMagnetRequests = () => {
  const [rows, setRows] = useState<LeadMagnetRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [resourceFilter, setResourceFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<LeadMagnetRequest | null>(null);
  const [editStatus, setEditStatus] = useState<string>('New');
  const [editNotes, setEditNotes] = useState<string>('');
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await (supabase as any)
      .from('lead_magnet_requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast.error('Could not load lead magnet requests');
    } else {
      setRows(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      if (statusFilter !== 'all' && r.status !== statusFilter) return false;
      if (resourceFilter !== 'all' && r.requested_resource !== resourceFilter) return false;
      if (search) {
        const s = search.toLowerCase();
        const hay = `${r.full_name} ${r.email} ${r.phone} ${r.organization ?? ''}`.toLowerCase();
        if (!hay.includes(s)) return false;
      }
      return true;
    });
  }, [rows, statusFilter, resourceFilter, search]);

  const openRow = (r: LeadMagnetRequest) => {
    setSelected(r);
    setEditStatus(r.status);
    setEditNotes(r.notes ?? '');
  };

  const saveChanges = async () => {
    if (!selected) return;
    setSaving(true);
    const { error } = await (supabase as any)
      .from('lead_magnet_requests')
      .update({ status: editStatus, notes: editNotes })
      .eq('id', selected.id);
    setSaving(false);
    if (error) {
      toast.error('Could not update the request');
      return;
    }
    toast.success('Request updated');
    setSelected(null);
    fetchData();
  };

  const newCount = rows.filter((r) => r.status === 'New').length;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <CardTitle>Lead Magnet Requests</CardTitle>
            <CardDescription>
              {rows.length} total • <span className="text-brand-green font-medium">{newCount} new</span>
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={fetchData}>
            <RefreshCw className="w-4 h-4 mr-2" /> Refresh
          </Button>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search name, email, phone, org"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {STATUS_OPTIONS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={resourceFilter} onValueChange={setResourceFilter}>
            <SelectTrigger className="w-[220px]"><SelectValue placeholder="Resource" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All resources</SelectItem>
              {LEAD_MAGNETS.map((m) => (
                <SelectItem key={m.id} value={m.title}>{m.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <p className="text-center py-10 text-muted-foreground">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center py-10 text-muted-foreground">No requests match your filters.</p>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Organization</TableHead>
                  <TableHead>Requested Resource</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="whitespace-nowrap text-sm">
                      {new Date(r.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="font-medium">{r.full_name}</TableCell>
                    <TableCell><a href={`mailto:${r.email}`} className="text-brand-green hover:underline">{r.email}</a></TableCell>
                    <TableCell>{r.phone}</TableCell>
                    <TableCell>{r.organization ?? '—'}</TableCell>
                    <TableCell className="max-w-[220px] truncate" title={r.requested_resource}>
                      {r.requested_resource}
                    </TableCell>
                    <TableCell><Badge variant={statusVariant(r.status)}>{r.status}</Badge></TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => openRow(r)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.full_name}</DialogTitle>
                <DialogDescription>
                  Requested: <span className="font-medium">{selected.requested_resource}</span>
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Email:</span> <a className="text-brand-green hover:underline" href={`mailto:${selected.email}`}>{selected.email}</a></div>
                <div><span className="text-muted-foreground">Phone:</span> {selected.phone}</div>
                <div><span className="text-muted-foreground">Organization:</span> {selected.organization ?? '—'}</div>
                <div><span className="text-muted-foreground">Service Interest:</span> {selected.service_interest ?? '—'}</div>
                <div className="md:col-span-2"><span className="text-muted-foreground">Page URL:</span> {selected.page_url ? <a href={selected.page_url} target="_blank" rel="noreferrer" className="text-brand-green hover:underline break-all">{selected.page_url}</a> : '—'}</div>
                <div><span className="text-muted-foreground">Lead Source:</span> {selected.lead_source ?? '—'}</div>
                <div><span className="text-muted-foreground">Submitted:</span> {new Date(selected.created_at).toLocaleString()}</div>
              </div>

              <div className="grid gap-4 mt-2">
                <div>
                  <label className="text-sm font-medium block mb-1">Status</label>
                  <Select value={editStatus} onValueChange={setEditStatus}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">Notes</label>
                  <Textarea
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    rows={4}
                    placeholder="Internal notes about this lead..."
                  />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
                <Button onClick={saveChanges} disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default LeadMagnetRequests;
