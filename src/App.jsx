import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import Navbar from "./components/Navbar";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-linear-to-br from-orange-50 via-pink-50 to-purple-50 text-gray-900 relative overflow-hidden">

  <div className="flower-background">

    <span className="flower flower1">🌸</span>
    <span className="flower flower2">🌼</span>
    <span className="flower flower3">🌺</span>
    <span className="flower flower4">🌷</span>
    <span className="flower flower5">🌸</span>
    <span className="flower flower6">🌻</span>

    <span className="leaf leaf1">🍃</span>
    <span className="leaf leaf2">🌿</span>
    <span className="leaf leaf3">🍃</span>
    <span className="leaf leaf4">🌿</span>

    <span className="sparkle sparkle1">✦</span>
    <span className="sparkle sparkle2">✧</span>
    <span className="sparkle sparkle3">✦</span>
    <span className="sparkle sparkle4">✧</span>
    <span className="sparkle sparkle5">✦</span>

  </div>

  {/* Main Content */}
  <div className="relative z-10">
    <Navbar />

    <main className="mx-auto max-w-7xl px-4 py-8">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/add" element={<AddTask />} />
      </Routes>
    </main>
  </div>

</div>
    </TaskProvider>
  );
}

export default App;