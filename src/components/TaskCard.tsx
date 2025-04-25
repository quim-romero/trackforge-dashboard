import { Check, Pencil, Trash2 } from "lucide-react";
import { useSettingsStore } from "../store/useSettingsStore";

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
  const density = useSettingsStore((state) => state.density);

  const padding = density === "compact" ? "p-2" : "p-4";
  const gap = density === "compact" ? "gap-1" : "gap-2";
  const titleSize = density === "compact" ? "text-sm" : "text-base";
  const descSize = density === "compact" ? "text-xs" : "text-sm";
  const iconSize = density === "compact" ? "w-3 h-3" : "w-4 h-4";
  const checkIconSize = density === "compact" ? "w-2.5 h-2.5" : "w-3 h-3";

  const priorityColor = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500",
  }[priority];

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm ${padding} flex flex-col ${gap} transition hover:shadow-md group`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle task"
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition ${
              completed
                ? "bg-brand border-brand"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            {completed && <Check className={`${checkIconSize} text-white`} />}
          </button>
          <h4
            className={`font-medium ${titleSize} ${
              completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {title}
          </h4>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="text-gray-500 hover:text-brand dark:hover:text-brand"
          >
            <Pencil className={iconSize} />
          </button>
          <button
            onClick={onDelete}
            className="text-gray-500 hover:text-red-500 dark:hover:text-red-400"
          >
            <Trash2 className={iconSize} />
          </button>
        </div>
      </div>

      {description && (
        <p className={`${descSize} text-gray-500 dark:text-gray-400 mt-1`}>
          {description}
        </p>
      )}

      <span
        className={`absolute top-3 right-3 w-2 h-2 rounded-full ${priorityColor}`}
      />
    </div>
  );
}
