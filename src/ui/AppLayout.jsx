import { Outlet } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1400px] p-4">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
