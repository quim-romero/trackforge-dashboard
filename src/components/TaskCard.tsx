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
    <div className="relative bg-white rounded-xl shadow-sm border p-4 flex flex-col gap-2 transition hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onToggle}
            aria-label="Toggle task"
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
              completed ? "bg-brand border-brand" : "border-gray-300"
            }`}
          >
            {completed && <Check className="w-3 h-3 text-white" />}
          </button>
          <h4
            className={`font-medium ${
              completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {title}
          </h4>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={onEdit} className="text-gray-500 hover:text-brand">
            <Pencil className="w-4 h-4" />
          </button>
          <button onClick={onDelete} className="text-gray-500 hover:text-red-500">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}

      <span className={`absolute top-3 right-3 w-2 h-2 rounded-full ${priorityColor}`} />
    </div>
  );
}
