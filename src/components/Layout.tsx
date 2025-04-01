import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

