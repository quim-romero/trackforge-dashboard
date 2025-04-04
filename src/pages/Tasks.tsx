import TaskCard from "../components/TaskCard";

const mockTasks = [
  {
    id: 1,
    title: "Write case study for new landing page",
    description: "Focus on conversion rate improvements and user feedback.",
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Fix mobile nav scroll issue",
    priority: "medium",
    completed: true,
  },
  {
    id: 3,
    title: "Organize next sprint planning",
    description: "Include the whole frontend team + PM.",
    priority: "low",
    completed: false,
  },
];

export default function Tasks() {
  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">Tasks</h2>
          <p className="text-sm text-gray-500">Manage your current and upcoming work.</p>
        </div>
        <button className="px-4 py-2 text-sm bg-brand text-white rounded-lg hover:bg-brand-dark transition">
          + New Task
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority as "low" | "medium" | "high"}
            completed={task.completed}
          />
        ))}
      </section>
    </div>
  );
}
