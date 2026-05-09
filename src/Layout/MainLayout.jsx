import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center">
      <div className="w-full flex flex-col flex-1 items-center p-5">
        {/* Header */}

        {/* Page */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
