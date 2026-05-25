import { NotePencilIcon } from '@phosphor-icons/react';
import { useNavigate } from '@tanstack/react-router';

import SidebarToggleButton from './SidebarToggleButton';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar sticky top-0 z-10 bg-base-300">
      {/* SidebarToggle +  Logo + Search */}
      <div className="navbar-start">
        <SidebarToggleButton />
        <button className="btn text-xl btn-ghost" onClick={() => navigate({ to: '/' })}>
          Aedium
        </button>
        <input type="text" placeholder="Search" className="input-bordered input w-36 lg:w-auto" />
      </div>

      {/* Login / Write+Avatar */}
      <div className="navbar-end flex gap-2">
        <button
          className="btn btn-soft btn-sm btn-primary lg:btn-md"
          onClick={() => navigate({ to: '/auth/$pathname', params: { pathname: 'sign-in' } })}
        >
          Login
        </button>

        <button className="btn hidden btn-outline btn-sm btn-primary lg:inline-flex lg:btn-md">
          <NotePencilIcon size={24} weight="thin" />
          Write
        </button>

        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
      </div>
    </nav>
  );
}
