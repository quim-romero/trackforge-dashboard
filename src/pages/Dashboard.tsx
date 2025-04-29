import { useTaskStore } from "../store/useTaskStore";
import { useSettingsStore } from "../store/useSettingsStore";

export default function Dashboard() {
  const tasks = useTaskStore((state) => state.tasks);
  const density = useSettingsStore((state) => state.density);

  const activeTasks = tasks.filter((t) => !t.completed).length;
  const completedThisWeek = tasks.filter((t) => {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return t.completed && new Date(t.createdAt).getTime() >= oneWeekAgo;
  }).length;
  const productivity =
    tasks.length > 0
      ? Math.round(
          (tasks.filter((t) => t.completed).length / tasks.length) * 100
        )
      : 0;

  const padding = density === "compact" ? "p-2" : "p-6";
  const gap = density === "compact" ? "gap-2" : "gap-6";
  const textSize = density === "compact" ? "text-xs" : "text-base";
  const cardTitleSize = density === "compact" ? "text-xs" : "text-sm";
  const cardValueSize = density === "compact" ? "text-xl" : "text-3xl";
  const spacing = density === "compact" ? "space-y-2" : "space-y-8";

  const stats = [
    { label: "Active Tasks", value: activeTasks },
    { label: "Completed This Week", value: completedThisWeek },
    { label: "Productivity", value: `${productivity}%` },
  ];

  return (
    <div className={spacing}>
      <header>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Welcome back, high performer 👋
        </h2>
        <p className={`${textSize} text-gray-500 dark:text-gray-400 mt-1`}>
          Here’s a quick look at your current productivity.
        </p>
      </header>

      <section className={`grid grid-cols-1 md:grid-cols-3 ${gap}`}>
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm ${padding}`}
          >
            <h3
              className={`${cardTitleSize} font-medium text-gray-500 dark:text-gray-400`}
            >
              {label}
            </h3>
            <p className={`${cardValueSize} font-bold mt-2 text-brand`}>
              {value}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
