
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Package,
  Box,
  Factory,
  ShoppingCart,
  BarChart3,
  Settings
} from 'lucide-react';

const navItems = [
  { key: 'dashboard', path: '/', icon: LayoutDashboard },
  { key: 'materials', path: '/materials', icon: Package },
  { key: 'products', path: '/products', icon: Box },
  { key: 'production', path: '/production', icon: Factory },
  { key: 'sales', path: '/sales', icon: ShoppingCart },
  { key: 'reports', path: '/reports', icon: BarChart3 },
  { key: 'settings', path: '/settings', icon: Settings }
];

export function Navigation() {
  const location = useLocation();
  const { t, dir } = useLanguage();

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.key}
            to={item.path}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
              'hover:bg-secondary',
              isActive && 'bg-primary text-primary-foreground hover:bg-primary-hover',
              !isActive && 'text-foreground'
            )}
          >
            <Icon className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">{t(`nav.${item.key}`)}</span>
          </Link>
        );
      })}
    </nav>
  );
}