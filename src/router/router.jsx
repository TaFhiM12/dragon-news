import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import RootLayout from "../RootLayout/RootLayout";
import AuthLayout from "../RootLayout/AuthLayout";
import ErrorComponent from "../Components/ErrorComponent";
import LoadingSpinner from "../Components/LoadingSpinner";
import PrivateRoute from "./PrivateRoute";

// Lazy load only the page components for better performance
const HomePage = lazy(() => import("../pages/HomePage"));
const CategoryPage = lazy(() => import("../pages/CategoryPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const NewsDetail = lazy(() => import("../pages/NewsDetail"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: "category/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <CategoryPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LoginPage />
          </Suspense>
        )
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <RegisterPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "/news/:id",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <PrivateRoute>
          <NewsDetail />
        </PrivateRoute>
      </Suspense>
    ),
    errorElement: <ErrorComponent />
  },
  {
    path: "*",
    element: <ErrorComponent />
  }
]);