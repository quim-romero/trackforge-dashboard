export default function Dashboard() {
  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Welcome back, high performer 👋
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Here’s a quick look at your current productivity.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Active Tasks
          </h3>
          <p className="text-3xl font-bold mt-2 text-brand">8</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Completed This Week
          </h3>
          <p className="text-3xl font-bold mt-2 text-brand">21</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Productivity
          </h3>
          <p className="text-3xl font-bold mt-2 text-brand">87%</p>
        </div>
      </section>
    </div>
  );
}
