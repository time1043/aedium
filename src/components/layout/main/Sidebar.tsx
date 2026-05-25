import { useNavigate } from '@tanstack/react-router';

import SidebarList from './SidebarList';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        {/* Sidebar content here */}

        <nav className="navbar sticky top-0 z-10 bg-base-300 lg:hidden">
          {/* Logo */}
          <div className="navbar-start">
            <button className="btn text-xl btn-ghost" onClick={() => navigate({ to: '/' })}>
              Aedium
            </button>
          </div>
        </nav>

        <SidebarList />
      </div>
    </div>
  );
}
