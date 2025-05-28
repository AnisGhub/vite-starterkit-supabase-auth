// src/components/layout/Layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router";
import { useAuthStore } from "@/store/auth-store";
import { AppSidebar } from "./AppSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

// Mapping for brudcrumb titles based on the current path
const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/about": "About",
  "/test-fetch": "Test Fetch from Supabase",
};

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const currentTitle = pageTitles[location.pathname] || "Page";

  if (!user && location.pathname === "/auth") {
    return <div className="p-6">{children}</div>;
  }

  return (
    <SidebarProvider>
      {user && <AppSidebar />}
      <main className="flex-1">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {user && <SidebarTrigger />}
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{currentTitle}</h2>
            </div>
          </div>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
