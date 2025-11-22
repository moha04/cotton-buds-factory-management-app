
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Reports() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{t('nav.reports')}</h1>
        <p className="text-muted-foreground mt-1">Analytics and reports</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('nav.reports')}</CardTitle>
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