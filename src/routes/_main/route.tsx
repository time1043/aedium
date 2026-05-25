import { createFileRoute, Outlet } from '@tanstack/react-router';

import Navbar from '@/components/layout/main/Navbar';
import Sidebar from '@/components/layout/main/Sidebar';

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar />
        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
