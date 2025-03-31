import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {}
      <aside className="w-64 bg-white border-r hidden md:block">
        <div className="p-4 font-bold text-lg">TrackForge</div>
        {}
      </aside>

      {}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
