import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        {}
        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        {}
        <Outlet />
      </main>
    </div>
  );
}
