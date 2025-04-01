import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  BarChart2,
  User,
  Settings,
} from "lucide-react";

const links = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/tasks", label: "Tasks", icon: CheckSquare },
  { to: "/stats", label: "Stats", icon: BarChart2 },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8 text-brand">TrackForge</h1>
      <nav className="flex flex-col gap-2">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-brand text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
