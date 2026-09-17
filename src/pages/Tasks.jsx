import { useState } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import TaskList from "../components/TaskList";

const filters = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "completed", label: "Completed" },
];

function Tasks() {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "pending") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <p className="mt-2 text-gray-600">
            View and manage all your tasks.
          </p>
        </div>

        <Link
          to="/tasks/add"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          + Add Task
        </Link>
      </div>

      <div className="mb-5 flex gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium ${
              filter === f.key
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        emptyMessage="Your tasks will appear here."
      />
    </div>
  );
}

export default Tasks;
