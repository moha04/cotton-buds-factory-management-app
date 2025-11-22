
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AppLayout } from '@/components/layout/AppLayout';
import Dashboard from '@/pages/Dashboard';
import Materials from '@/pages/Materials';
import Products from '@/pages/Products';
import Production from '@/pages/Production';
import Sales from '@/pages/Sales';
import Reports from '@/pages/Reports';
import Settings from '@/pages/Settings';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="materials" element={<Materials />} />
            <Route path="products" element={<Products />} />
            <Route path="production" element={<Production />} />
            <Route path="sales" element={<Sales />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;