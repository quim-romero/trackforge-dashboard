import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Dashboard</div>} />
          <Route path="/tasks" element={<div>Tasks</div>} />
          <Route path="/stats" element={<div>Stats</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
