import TaskCard from "../components/TaskCard";
import { useTaskStore } from "../store/useTaskStore";

export default function Tasks() {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

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

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-sm mt-10">No tasks available.</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </section>
      )}
    </div>
  );
}
