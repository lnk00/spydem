/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as SigninImport } from './routes/signin'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as ProtectedLayoutDashImport } from './routes/_protected/_layout-dash'
import { Route as ProtectedLayoutDashIndexImport } from './routes/_protected/_layout-dash/index'
import { Route as ProtectedLayoutDashSettingsImport } from './routes/_protected/_layout-dash/settings'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SigninRoute = SigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedLayoutDashRoute = ProtectedLayoutDashImport.update({
  id: '/_layout-dash',
  getParentRoute: () => ProtectedRoute,
} as any)

const ProtectedLayoutDashIndexRoute = ProtectedLayoutDashIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ProtectedLayoutDashRoute,
} as any)

const ProtectedLayoutDashSettingsRoute =
  ProtectedLayoutDashSettingsImport.update({
    id: '/settings',
    path: '/settings',
    getParentRoute: () => ProtectedLayoutDashRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/signin': {
      id: '/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof SigninImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_protected/_layout-dash': {
      id: '/_protected/_layout-dash'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedLayoutDashImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/_layout-dash/settings': {
      id: '/_protected/_layout-dash/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof ProtectedLayoutDashSettingsImport
      parentRoute: typeof ProtectedLayoutDashImport
    }
    '/_protected/_layout-dash/': {
      id: '/_protected/_layout-dash/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ProtectedLayoutDashIndexImport
      parentRoute: typeof ProtectedLayoutDashImport
    }
  }
}

// Create and export the route tree

interface ProtectedLayoutDashRouteChildren {
  ProtectedLayoutDashSettingsRoute: typeof ProtectedLayoutDashSettingsRoute
  ProtectedLayoutDashIndexRoute: typeof ProtectedLayoutDashIndexRoute
}

const ProtectedLayoutDashRouteChildren: ProtectedLayoutDashRouteChildren = {
  ProtectedLayoutDashSettingsRoute: ProtectedLayoutDashSettingsRoute,
  ProtectedLayoutDashIndexRoute: ProtectedLayoutDashIndexRoute,
}

const ProtectedLayoutDashRouteWithChildren =
  ProtectedLayoutDashRoute._addFileChildren(ProtectedLayoutDashRouteChildren)

interface ProtectedRouteChildren {
  ProtectedLayoutDashRoute: typeof ProtectedLayoutDashRouteWithChildren
}

const ProtectedRouteChildren: ProtectedRouteChildren = {
  ProtectedLayoutDashRoute: ProtectedLayoutDashRouteWithChildren,
}

const ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(
  ProtectedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof ProtectedLayoutDashRouteWithChildren
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
  '/settings': typeof ProtectedLayoutDashSettingsRoute
  '/': typeof ProtectedLayoutDashIndexRoute
}

export interface FileRoutesByTo {
  '': typeof ProtectedRouteWithChildren
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
  '/settings': typeof ProtectedLayoutDashSettingsRoute
  '/': typeof ProtectedLayoutDashIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_protected': typeof ProtectedRouteWithChildren
  '/signin': typeof SigninRoute
  '/signup': typeof SignupRoute
  '/_protected/_layout-dash': typeof ProtectedLayoutDashRouteWithChildren
  '/_protected/_layout-dash/settings': typeof ProtectedLayoutDashSettingsRoute
  '/_protected/_layout-dash/': typeof ProtectedLayoutDashIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/signin' | '/signup' | '/settings' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/signin' | '/signup' | '/settings' | '/'
  id:
    | '__root__'
    | '/_protected'
    | '/signin'
    | '/signup'
    | '/_protected/_layout-dash'
    | '/_protected/_layout-dash/settings'
    | '/_protected/_layout-dash/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  ProtectedRoute: typeof ProtectedRouteWithChildren
  SigninRoute: typeof SigninRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  ProtectedRoute: ProtectedRouteWithChildren,
  SigninRoute: SigninRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_protected",
        "/signin",
        "/signup"
      ]
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/_layout-dash"
      ]
    },
    "/signin": {
      "filePath": "signin.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_protected/_layout-dash": {
      "filePath": "_protected/_layout-dash.tsx",
      "parent": "/_protected",
      "children": [
        "/_protected/_layout-dash/settings",
        "/_protected/_layout-dash/"
      ]
    },
    "/_protected/_layout-dash/settings": {
      "filePath": "_protected/_layout-dash/settings.tsx",
      "parent": "/_protected/_layout-dash"
    },
    "/_protected/_layout-dash/": {
      "filePath": "_protected/_layout-dash/index.tsx",
      "parent": "/_protected/_layout-dash"
    }
  }
}
ROUTE_MANIFEST_END */
