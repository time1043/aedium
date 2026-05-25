import { ListIcon } from '@phosphor-icons/react';

// htmlFor
export default function SidebarToggleButton() {
  return (
    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
      {/* Sidebar toggle icon */}
      <ListIcon size={28} />
    </label>
  );
}
