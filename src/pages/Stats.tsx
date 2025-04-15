import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useTaskStore } from "../store/useTaskStore";
import { useMemo } from "react";
import dayjs from "dayjs";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Stats() {
  const tasks = useTaskStore((state) => state.tasks);

  const data = useMemo(() => {
    const counts = new Array(7).fill(0);

    tasks.forEach((task) => {
      if (!task.completed) return;

      const date = dayjs(task.createdAt);
      const weekday = date.day();
      const index = weekday === 0 ? 6 : weekday - 1;

      counts[index]++;
    });

    return {
      labels: days,
      datasets: [
        {
          label: "Completed Tasks",
          data: counts,
          backgroundColor: "#6366F1",
          borderRadius: 6,
        },
      ],
    };
  }, [tasks]);

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Stats</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Your weekly productivity overview.
        </p>
      </header>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6">
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
            },
          }}
        />
      </div>
    </div>
  );
}
