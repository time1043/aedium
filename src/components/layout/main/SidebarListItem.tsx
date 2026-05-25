import type { ReactNode } from 'react';

import { Link } from '@tanstack/react-router';

import type { FileRouteTypes } from '@/routeTree.gen';

type SidebarListItemProps = {
  label: string;
  to: FileRouteTypes['to'];
  icon: ReactNode;
};

export default function SidebarListItem({ label, to, icon }: SidebarListItemProps) {
  return (
    <li>
      <Link
        to={to}
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip={label}
        activeOptions={{ exact: true }}
        activeProps={{ className: 'bg-secondary text-primary-content' }}
        inactiveProps={{ className: '' }}
      >
        {icon}
        <span className="is-drawer-close:hidden">{label}</span>
      </Link>
    </li>
  );
}
