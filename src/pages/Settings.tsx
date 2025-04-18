import { useSettingsStore } from "../store/useSettingsStore";

export default function Settings() {
  const { density, animations, setDensity, toggleAnimations } = useSettingsStore();

  return (
    <div className="space-y-6 max-w-xl">
      <header>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Settings
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Customize how TrackForge behaves and feels.
        </p>
      </header>

      <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            UI Density
          </label>
          <select
            value={density}
            onChange={(e) => setDensity(e.target.value as "comfortable" | "compact")}
            className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          >
            <option value="comfortable">Comfortable</option>
            <option value="compact">Compact</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Animations</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Enable or disable transition effects.
            </p>
          </div>
          <button
            onClick={toggleAnimations}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition ${
              animations
                ? "bg-brand justify-end"
                : "bg-gray-300 dark:bg-gray-600 justify-start"
            }`}
          >
            <span className="w-4 h-4 bg-white rounded-full shadow" />
          </button>
        </div>
      </section>
    </div>
  );
}
