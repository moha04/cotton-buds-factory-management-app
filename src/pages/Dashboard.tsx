
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Box, Factory, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t('dashboard.rawMaterials'),
      value: '6',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: t('dashboard.finishedGoods'),
      value: '3',
      icon: Box,
      color: 'text-green-600'
    },
    {
      title: t('dashboard.recentProduction'),
      value: '0',
      icon: Factory,
      color: 'text-orange-600'
    },
    {
      title: t('dashboard.recentSales'),
      value: '0',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">{t('dashboard.title')}</h1>
        <p className="text-muted-foreground mt-1">{t('dashboard.overview')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t('dashboard.overview')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Factory className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">{t('common.noData')}</p>
            <p className="text-sm mt-2">Start by adding raw materials and products</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}