
import { Outlet } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Factory } from 'lucide-react';

export function AppLayout() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-card border-r border-border flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Factory className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-bold text-lg leading-tight truncate">
                {t('app.title')}
              </h1>
              <p className="text-xs text-muted-foreground truncate">
                {t('app.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          <Navigation />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <LanguageSwitcher />
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}