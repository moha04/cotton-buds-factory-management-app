
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { Building2, Save } from 'lucide-react';

interface CompanyInfo {
  id?: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  nif: string;
  nis: string;
  article_imposition: string;
  rc: string;
  logo_url?: string;
}

export default function Settings() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: '',
    address: '',
    phone: '',
    email: '',
    nif: '',
    nis: '',
    article_imposition: '',
    rc: ''
  });

  useEffect(() => {
    loadCompanyInfo();
  }, []);

  const loadCompanyInfo = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('company_info')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setCompanyInfo(data);
      }
    } catch (error) {
      console.error('Error loading company info:', error);
      toast({
        title: t('common.error'),
        description: 'Failed to load company information',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = companyInfo.id
        ? await supabase
            .from('company_info')
            .update(companyInfo)
            .eq('id', companyInfo.id)
        : await supabase
            .from('company_info')
            .insert([companyInfo]);

      if (error) throw error;

      toast({
        title: t('common.success'),
        description: 'Company information saved successfully'
      });

      if (!companyInfo.id) {
        await loadCompanyInfo();
      }
    } catch (error) {
      console.error('Error saving company info:', error);
      toast({
        title: t('common.error'),
        description: 'Failed to save company information',
        variant: 'destructive'
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof CompanyInfo, value: string) => {
    setCompanyInfo(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">{t('common.loading')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{t('settings.title')}</h1>
        <p className="text-muted-foreground mt-1">Configure application settings</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            {t('settings.company')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">{t('settings.companyName')}</Label>
              <Input
                id="companyName"
                value={companyInfo.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter company name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('settings.email')}</Label>
              <Input
                id="email"
                type="email"
                value={companyInfo.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="company@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t('settings.phone')}</Label>
              <Input
                id="phone"
                value={companyInfo.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+213 XXX XXX XXX"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">{t('settings.address')}</Label>
              <Textarea
                id="address"
                value={companyInfo.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Enter company address"
                rows={2}
              />
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Algeria Tax Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nif">
                  NIF (Numéro d'Identification Fiscale)
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input
                  id="nif"
                  value={companyInfo.nif}
                  onChange={(e) => handleChange('nif', e.target.value)}
                  placeholder="Enter NIF"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nis">
                  NIS (Numéro d'Identification Statistique)
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input
                  id="nis"
                  value={companyInfo.nis}
                  onChange={(e) => handleChange('nis', e.target.value)}
                  placeholder="Enter NIS"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="article">
                  Article d'Imposition
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input
                  id="article"
                  value={companyInfo.article_imposition}
                  onChange={(e) => handleChange('article_imposition', e.target.value)}
                  placeholder="Enter Article d'Imposition"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rc">
                  RC (Registre de Commerce)
                  <span className="text-destructive ml-1">*</span>
                </Label>
                <Input
                  id="rc"
                  value={companyInfo.rc}
                  onChange={(e) => handleChange('rc', e.target.value)}
                  placeholder="Enter RC"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={handleSave} disabled={saving} className="gap-2">
              <Save className="h-4 w-4" />
              {saving ? t('common.loading') : t('common.save')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}