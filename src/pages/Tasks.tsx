import { useState } from "react";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";
import { useTaskStore } from "../store/useTaskStore";
import { useSettingsStore } from "../store/useSettingsStore";
import type { Task } from "../types";
import { AnimatePresence, motion } from "framer-motion";

export default function Tasks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [statusFilter, setStatusFilter] = useState<
    "all" | "completed" | "active"
  >("all");
  const [priorityFilter, setPriorityFilter] = useState<
    "all" | "low" | "medium" | "high"
  >("all");

  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const density = useSettingsStore((state) => state.density);

  const layoutSpacing = density === "compact" ? "space-y-2" : "space-y-8";
  const cardGridGap = density === "compact" ? "gap-2" : "gap-6";
  const filterPadding =
    density === "compact" ? "py-1 px-2 text-xs" : "py-2 px-3 text-sm";

  const filteredTasks = tasks.filter((task) => {
    const statusMatch =
      statusFilter === "all" ||
      (statusFilter === "completed" && task.completed) ||
      (statusFilter === "active" && !task.completed);

    const priorityMatch =
      priorityFilter === "all" || task.priority === priorityFilter;

    return statusMatch && priorityMatch;
  });

  return (
    <div className={layoutSpacing}>
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Tasks
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your current and upcoming work.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingTask(null);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 text-sm bg-brand text-white rounded-lg hover:bg-brand-dark transition"
        >
          + New Task
        </button>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className={`rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${filterPadding}`}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Priority
          </label>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value as any)}
            className={`rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 ${filterPadding}`}
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Task list */}
      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-10">
          No tasks match the selected filters.
        </p>
      ) : (
        <section
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${cardGridGap}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredTasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <TaskCard
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  completed={task.completed}
                  onToggle={() => toggleTask(task.id)}
                  onDelete={() => deleteTask(task.id)}
                  onEdit={() => {
                    setEditingTask(task);
                    setIsModalOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      )}

      {/* Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingTask(null);
        }}
        defaultValues={editingTask ?? undefined}
      />
    </div>
  );
}
