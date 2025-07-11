/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as LoginRouteImport } from './routes/login'
import { Route as PrivateRouteRouteImport } from './routes/_private/route'
import { Route as IndexRouteImport } from './routes/index'
import { Route as PrivateWorkspacesRouteImport } from './routes/_private/workspaces'
import { Route as PrivateWOrgIdRouteRouteImport } from './routes/_private/w.$orgId/route'
import { Route as PrivateWOrgIdNavHomeRouteImport } from './routes/_private/w.$orgId/_nav.home'

const LoginRoute = LoginRouteImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRouteImport,
} as any)
const PrivateRouteRoute = PrivateRouteRouteImport.update({
  id: '/_private',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const PrivateWorkspacesRoute = PrivateWorkspacesRouteImport.update({
  id: '/workspaces',
  path: '/workspaces',
  getParentRoute: () => PrivateRouteRoute,
} as any)
const PrivateWOrgIdRouteRoute = PrivateWOrgIdRouteRouteImport.update({
  id: '/w/$orgId',
  path: '/w/$orgId',
  getParentRoute: () => PrivateRouteRoute,
} as any)
const PrivateWOrgIdNavHomeRoute = PrivateWOrgIdNavHomeRouteImport.update({
  id: '/_nav/home',
  path: '/home',
  getParentRoute: () => PrivateWOrgIdRouteRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/workspaces': typeof PrivateWorkspacesRoute
  '/w/$orgId': typeof PrivateWOrgIdRouteRouteWithChildren
  '/w/$orgId/home': typeof PrivateWOrgIdNavHomeRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/workspaces': typeof PrivateWorkspacesRoute
  '/w/$orgId': typeof PrivateWOrgIdRouteRouteWithChildren
  '/w/$orgId/home': typeof PrivateWOrgIdNavHomeRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_private': typeof PrivateRouteRouteWithChildren
  '/login': typeof LoginRoute
  '/_private/workspaces': typeof PrivateWorkspacesRoute
  '/_private/w/$orgId': typeof PrivateWOrgIdRouteRouteWithChildren
  '/_private/w/$orgId/_nav/home': typeof PrivateWOrgIdNavHomeRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/workspaces' | '/w/$orgId' | '/w/$orgId/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/workspaces' | '/w/$orgId' | '/w/$orgId/home'
  id:
    | '__root__'
    | '/'
    | '/_private'
    | '/login'
    | '/_private/workspaces'
    | '/_private/w/$orgId'
    | '/_private/w/$orgId/_nav/home'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PrivateRouteRoute: typeof PrivateRouteRouteWithChildren
  LoginRoute: typeof LoginRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_private': {
      id: '/_private'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_private/workspaces': {
      id: '/_private/workspaces'
      path: '/workspaces'
      fullPath: '/workspaces'
      preLoaderRoute: typeof PrivateWorkspacesRouteImport
      parentRoute: typeof PrivateRouteRoute
    }
    '/_private/w/$orgId': {
      id: '/_private/w/$orgId'
      path: '/w/$orgId'
      fullPath: '/w/$orgId'
      preLoaderRoute: typeof PrivateWOrgIdRouteRouteImport
      parentRoute: typeof PrivateRouteRoute
    }
    '/_private/w/$orgId/_nav/home': {
      id: '/_private/w/$orgId/_nav/home'
      path: '/home'
      fullPath: '/w/$orgId/home'
      preLoaderRoute: typeof PrivateWOrgIdNavHomeRouteImport
      parentRoute: typeof PrivateWOrgIdRouteRoute
    }
  }
}

interface PrivateWOrgIdRouteRouteChildren {
  PrivateWOrgIdNavHomeRoute: typeof PrivateWOrgIdNavHomeRoute
}

const PrivateWOrgIdRouteRouteChildren: PrivateWOrgIdRouteRouteChildren = {
  PrivateWOrgIdNavHomeRoute: PrivateWOrgIdNavHomeRoute,
}

const PrivateWOrgIdRouteRouteWithChildren =
  PrivateWOrgIdRouteRoute._addFileChildren(PrivateWOrgIdRouteRouteChildren)

interface PrivateRouteRouteChildren {
  PrivateWorkspacesRoute: typeof PrivateWorkspacesRoute
  PrivateWOrgIdRouteRoute: typeof PrivateWOrgIdRouteRouteWithChildren
}

const PrivateRouteRouteChildren: PrivateRouteRouteChildren = {
  PrivateWorkspacesRoute: PrivateWorkspacesRoute,
  PrivateWOrgIdRouteRoute: PrivateWOrgIdRouteRouteWithChildren,
}

const PrivateRouteRouteWithChildren = PrivateRouteRoute._addFileChildren(
  PrivateRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PrivateRouteRoute: PrivateRouteRouteWithChildren,
  LoginRoute: LoginRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
