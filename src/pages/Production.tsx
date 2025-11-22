
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Production() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{t('production.title')}</h1>
          <p className="text-muted-foreground mt-1">Track production batches</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          {t('production.newBatch')}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('production.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p>{t('common.noData')}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}