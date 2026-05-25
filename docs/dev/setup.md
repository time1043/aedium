# Toolchain Setup

## Vite Alias

## Oxfmt

- https://oxc.rs/docs/guide/usage/formatter/quickstart.html

# Router Setup

## Tanstack Router

- https://tanstack.com/router/latest/docs/installation/manual

# UI Setup

## Tailwind CSS

- https://tailwindcss.com/docs/installation/using-vite

## Daisy UI

- https://daisyui.com/docs/install/
- https://github.com/tailwindlabs/tailwindcss/issues/19950#issuecomment-4322420664

```
[plugin:@tailwindcss/vite:generate:serve] Unknown file extension ".css" for /Users/oswin902/Documents/code3/base/project/aedium-react/node_modules/.pnpm/daisyui@5.5.19/node_modules/daisyui/daisyui.css

/Users/oswin902/Documents/code3/base/project/aedium-react/src/index.css

    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:219:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:245:36)
    at defaultLoad (node:internal/modules/esm/load:98:16)
    at nextLoad (node:internal/modules/esm/hooks:748:28)
    at Hooks.load (node:internal/modules/esm/hooks:385:26)
    at handleMessage (node:internal/modules/esm/worker:199:24)
    at checkForMessages (node:internal/modules/esm/worker:141:28)
    at process.<anonymous> (node:internal/modules/esm/worker:160:5)
    at process.emit (node:events:519:28)
```

## Semantic Version

- https://semver.npmjs.com/
- https://docs.npmjs.com/about-semantic-versioning

## Phosphor Icon + Tooltip

- https://phosphoricons.com/
- https://daisyui.com/components/tooltip/

# Main Layout

## Navbar

- https://daisyui.com/components/navbar/#responsive-collapse-on-small-screen-full-content-on-large-screen

## Sidebar

- https://daisyui.com/components/drawer/#responsive-collapsible-icon-only-drawer-sidebar-using-is-drawer-close-and-is-drawer-open

## Dark Mode Toggle

# Routes

- [[routes]]

```shell
routes
├── _auth.tsx  # layout
├── _auth
│   ├── login.tsx
│   └── register.tsx
├── _main.tsx  # layout
├── _main
│   ├── articles
│   │   └── index.tsx
│   └── me
│       └── profile.tsx
├── __root.tsx  # root layout
└── index.tsx  # /
```

## Error Page

## Route Guard
