import { createFileRoute, Outlet } from '@tanstack/react-router';

import Navbar from '@/components/layout/main/Navbar';
import Sidebar from '@/components/layout/main/Sidebar';

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />

      <div className="drawer flex-1 overflow-hidden lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
