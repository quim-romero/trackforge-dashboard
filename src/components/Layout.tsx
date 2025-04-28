import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      {/* Sidebar para escritorio */}
      <Sidebar className="hidden md:flex" />

      {/* Drawer para móvil */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <Sidebar
            className="w-64 bg-white dark:bg-gray-900 p-4"
            onNavigate={() => setIsSidebarOpen(false)}
          />
          <div
            className="flex-1 bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <header className="md:hidden flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-800">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-700 dark:text-gray-300"
          >
            <Menu className="w-6 h-6" />
          </button>
          <ThemeToggle />
        </header>

        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="hidden md:flex justify-end">
            <ThemeToggle />
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
}
