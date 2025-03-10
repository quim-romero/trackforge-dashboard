import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/tasks" element={<div>Tasks</div>} />
        <Route path="/stats" element={<div>Stats</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
      </Routes>
    </Router>
  );
}
