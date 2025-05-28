// src/router/router.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Layout } from "@/components/layout/Layout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { useAuthStore } from "@/store/auth-store";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Auth from "@/pages/Auth";
import TestFetch from "@/pages/TestFetch";

export function Router() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/auth"
            element={user ? <Navigate to="/" replace /> : <Auth />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test-fetch"
            element={
              <ProtectedRoute>
                <TestFetch />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
