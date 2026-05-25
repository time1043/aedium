import type { ReactNode } from 'react';

import { HouseIcon, NotePencilIcon } from '@phosphor-icons/react';
import { useLocation, useNavigate } from '@tanstack/react-router';

import type { FileRouteTypes } from '@/routeTree.gen';

import { Route as ArticlesDraftRoute } from '@/routes/_main/articles/draft';

import SidebarListItem from './SidebarListItem';

// type SidebarIconProps = { icon: Icon } & ComponentProps<Icon>;
// function SidebarIcon({ icon: IconComponent, ...props }: SidebarIconProps) {
//   return <IconComponent size={16} className="my-1.5" {...props} />;
// }

type NavItem = { label: string; to: FileRouteTypes['to']; icon: ReactNode };

const sidebarList: NavItem[] = [
  // { label: 'Home', to: '/', icon: <SidebarIcon icon={HouseIcon} /> },
  { label: 'Home', to: '/articles', icon: <HouseIcon size={16} className="my-1.5" /> },
];

export default function SidebarList() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <ul className="menu w-full grow">
      {/* items of sidebar */}
      {sidebarList.map(({ label, to, icon }) => (
        <SidebarListItem key={label} {...{ label, to, icon }} />
      ))}
      {/* specific items for business logic */}
      <li>
        <button
          className={`is-drawer-close:tooltip is-drawer-close:tooltip-right ${pathname === ArticlesDraftRoute.to ? 'bg-secondary' : 'bg-primary'} text-primary-content`}
          data-tip="Write"
          onClick={() => navigate({ to: '/articles/draft' })}
        >
          <NotePencilIcon size={16} className="my-1.5" />
          <span className="is-drawer-close:hidden">Write</span>
        </button>
      </li>
    </ul>
  );
}
