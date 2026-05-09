import { Outlet } from 'react-router-dom';
import Header from '../components/commons/Header';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center">
      <div className="w-full flex flex-col flex-1 gap-4 items-center p-5">
        {/* Header */}
        <Header />

        {/* Page */}
        <main className="flex-1 max-w-205 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
