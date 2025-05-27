// src/router/router.tsx
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";

export function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
