
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Invoice {
  id: string;
  invoice_number: string;
  amount: number;
  status: string | null;
  client_id: string | null;
  project_id: string | null;
  issue_date: string | null;
  due_date: string | null;
  created_at: string | null;
  updated_at: string | null;
  clients?: {
    name: string;
  };
  projects?: {
    name: string;
  };
}

export const useInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchInvoices = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('invoices')
        .select(`
          *,
          clients (
            name
          ),
          projects (
            name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInvoices(data || []);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      toast({
        title: "Error",
        description: "Failed to fetch invoices",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const addInvoice = async (invoiceData: Omit<Invoice, 'id' | 'created_at' | 'updated_at' | 'clients' | 'projects'>) => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('invoices')
        .insert([{ ...invoiceData, user_id: user.id }])
        .select(`
          *,
          clients (
            name
          ),
          projects (
            name
          )
        `)
        .single();

      if (error) throw error;
      
      setInvoices(prev => [data, ...prev]);
      toast({
        title: "Success",
        description: "Invoice added successfully"
      });
    } catch (error) {
      console.error('Error adding invoice:', error);
      toast({
        title: "Error",
        description: "Failed to add invoice",
        variant: "destructive"
      });
    }
  };

  const updateInvoice = async (id: string, updates: Partial<Invoice>) => {
    try {
      const { error } = await supabase
        .from('invoices')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      
      setInvoices(prev => prev.map(invoice => 
        invoice.id === id ? { ...invoice, ...updates } : invoice
      ));
      
      toast({
        title: "Success",
        description: "Invoice updated successfully"
      });
    } catch (error) {
      console.error('Error updating invoice:', error);
      toast({
        title: "Error",
        description: "Failed to update invoice",
        variant: "destructive"
      });
    }
  };

  const deleteInvoice = async (id: string) => {
    try {
      const { error } = await supabase
        .from('invoices')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setInvoices(prev => prev.filter(invoice => invoice.id !== id));
      toast({
        title: "Success",
        description: "Invoice deleted successfully"
      });
    } catch (error) {
      console.error('Error deleting invoice:', error);
      toast({
        title: "Error",
        description: "Failed to delete invoice",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [user]);

  return {
    invoices,
    loading,
    addInvoice,
    updateInvoice,
    deleteInvoice,
    refetch: fetchInvoices
  };
};
