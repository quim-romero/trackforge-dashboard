import { Check, Pencil, Trash2 } from "lucide-react";

type TaskCardProps = {
  title: string;
  description?: string;
  priority?: "low" | "medium" | "high";
  completed: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function TaskCard({
  title,
  description,
  priority = "medium",
  completed,
  onToggle,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const priorityColor = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  }[priority];

  return (
    <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 flex flex-col gap-2 transition hover:shadow-md group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            aria-label="Toggle task"
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition ${
              completed
                ? "bg-brand border-brand"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            {completed && <Check className="w-3 h-3 text-white" />}
          </button>
          <h4
            className={`font-medium ${
              completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {title}
          </h4>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={onEdit} className="text-gray-500 hover:text-brand dark:hover:text-brand">
            <Pencil className="w-4 h-4" />
          </button>
          <button onClick={onDelete} className="text-gray-500 hover:text-red-500 dark:hover:text-red-400">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {description}
        </p>
      )}

      <span
        className={`absolute top-3 right-3 w-2 h-2 rounded-full ${priorityColor}`}
      />
    </div>
  );
}
