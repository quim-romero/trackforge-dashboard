import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTaskStore } from "../store/useTaskStore";
import { X } from "lucide-react";
import * as z from "zod";
import { useEffect } from "react";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
});

type FormData = z.infer<typeof schema>;

type AddTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
  defaultValues?: FormData & { id?: string | number }; // For editing
};

export default function AddTaskModal({
  isOpen,
  onClose,
  defaultValues,
}: AddTaskModalProps) {
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);

  const isEditMode = !!defaultValues;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {
      title: "",
      description: "",
      priority: "medium",
    },
  });

  useEffect(() => {
    if (isOpen)
      reset(
        defaultValues || { title: "", description: "", priority: "medium" }
      );
  }, [isOpen, defaultValues, reset]);

  const onSubmit = (data: FormData) => {
    if (isEditMode && defaultValues?.id != null) {
      updateTask(String(defaultValues.id), data);
    } else {
      addTask({ ...data, completed: false });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-xl relative z-50 border border-gray-200 dark:border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          {isEditMode ? "Edit Task" : "New Task"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              {...register("title")}
              className="w-full rounded-md px-3 py-2 text-sm border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand"
              placeholder="Task title"
            />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={3}
              placeholder="Description (optional)"
              className="w-full rounded-md px-3 py-2 text-sm border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Priority
            </label>
            <select
              {...register("priority")}
              className="w-full rounded-md px-3 py-2 text-sm border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-brand text-white px-4 py-2 rounded-md hover:bg-brand-dark transition"
            >
              {isEditMode ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
