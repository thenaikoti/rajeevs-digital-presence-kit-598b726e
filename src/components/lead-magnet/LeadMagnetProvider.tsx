import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react';
import { LeadMagnet, getLeadMagnet } from '@/data/leadMagnets';
import LeadMagnetModal from './LeadMagnetModal';

interface LeadMagnetContextValue {
  openLeadMagnet: (idOrMagnet: string | LeadMagnet) => void;
}

const LeadMagnetContext = createContext<LeadMagnetContextValue | null>(null);

export const useLeadMagnet = () => {
  const ctx = useContext(LeadMagnetContext);
  if (!ctx) throw new Error('useLeadMagnet must be used within LeadMagnetProvider');
  return ctx;
};

export const LeadMagnetProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<LeadMagnet | null>(null);

  const openLeadMagnet = useCallback((idOrMagnet: string | LeadMagnet) => {
    if (typeof idOrMagnet === 'string') {
      const m = getLeadMagnet(idOrMagnet);
      if (m) setActive(m);
    } else {
      setActive(idOrMagnet);
    }
  }, []);

  const value = useMemo(() => ({ openLeadMagnet }), [openLeadMagnet]);

  return (
    <LeadMagnetContext.Provider value={value}>
      {children}
      <LeadMagnetModal
        magnet={active}
        open={!!active}
        onOpenChange={(o) => !o && setActive(null)}
      />
    </LeadMagnetContext.Provider>
  );
};
