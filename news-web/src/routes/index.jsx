//import react
import React, { lazy, Suspense } from "react";

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
const Loader = lazy(() => import("../components/Loader.jsx"));

//import view Login
const Login = lazy(() => import("../views/Auth/Login.jsx"));

//import private routes
import PrivateRoutes from "../routes/PrivateRoutes.jsx";

//import view dashboard
const Dashboard = lazy(() => import("../views/Dashboard/Index.jsx"));

//import view permissions index
const PermissionsIndex = lazy(() => import("../views/Permissions/Index.jsx"));

// ROUTING ROLES
const RolesIndex = lazy(() => import("../views/Roles/Index.jsx"));
const RoleCreate = lazy(() => import("../views/Roles/Create.jsx"));
const RoleEdit = lazy(() => import("../views/Roles/Edit.jsx"));

// ROUTING USERS
const UsersIndex = lazy(() => import("../views/Users/Index.jsx"));
const UserCreate = lazy(() => import("../views/Users/Create.jsx"));
const UserEdit = lazy(() => import("../views/Users/Edit.jsx"));

// ROUTING CATEGORIES
const CategoriesIndex = lazy(() => import("../views/Categories/Index.jsx"));
const CategoryCreate = lazy(() => import("../views/Categories/Create.jsx"));
const CategoryEdit = lazy(() => import("../views/Categories/Edit.jsx"));

// ROUTING POSTS
const PostsIndex = lazy(() => import("../views/Posts/Index.jsx"));
const PostCreate = lazy(() => import("../views/Posts/Create.jsx"));
const PostEdit = lazy(() => import("../views/Posts/Edit.jsx"));

// ROUTING SLIDERS
const SlidersIndex = lazy(() => import("../views/Sliders/Index.jsx"));

// FORBRIDEN
const Forbidden = lazy(() => import("../views/Forbidden/Index.jsx"));

export default function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />

      {/* private route "/dashboard" */}
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/permissions" */}
      <Route
        path="/permissions"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <PermissionsIndex />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/roles" */}
      <Route
        path="/roles"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <RolesIndex />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/roles/create" */}
      <Route
        path="/roles/create"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <RoleCreate />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/roles/edit/:id" */}
      <Route
        path="/roles/edit/:id"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <RoleEdit />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/users" */}
      <Route
        path="/users"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <UsersIndex />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/users/create" */}
      <Route
        path="/users/create"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <UserCreate />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/users/edit/:id" */}
      <Route
        path="/users/edit/:id"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <UserEdit />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/categories" */}
      <Route
        path="/categories"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <CategoriesIndex />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/categories/create" */}
      <Route
        path="/categories/create"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <CategoryCreate />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/categories/edit/:id" */}
      <Route
        path="/categories/edit/:id"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <CategoryEdit />
            </PrivateRoutes>
          </Suspense>
        }
      />

      {/* private route "/posts" */}
      <Route
        path="/posts"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <PostsIndex />
            </PrivateRoutes>
          </Suspense>
        }
      />
      {/* private route "/posts/create" */}
      <Route
        path="/posts/create"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <PostCreate />
            </PrivateRoutes>
          </Suspense>
        }
      />
      {/* private route "/posts/edit/:id" */}
      <Route
        path="/posts/edit/:id"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <PostEdit />
            </PrivateRoutes>
          </Suspense>
        }
      />
      {/* private route "/sliders" */}
      <Route
        path="/sliders"
        element={
          <Suspense fallback={<Loader />}>
            <PrivateRoutes>
              <SlidersIndex />
            </PrivateRoutes>
          </Suspense>
        }
      />
      {/* route "/forbidden" */}
      <Route
        path="/forbidden"
        element={
          <Suspense fallback={<Loader />}>
            <Forbidden />
          </Suspense>
        }
      />
    </Routes>
  );
}
