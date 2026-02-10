import { MenuBook } from './components/menu/MenuBook';
import { BrandHeader } from './components/brand/BrandHeader';
import { BrandFooter } from './components/brand/BrandFooter';
import { AppShell } from './components/layout/AppShell';

function App() {
  return (
    <AppShell>
      <BrandHeader />
      <MenuBook />
      <BrandFooter />
    </AppShell>
  );
}

export default App;
