import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[600px] max-w-[1400px] p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
