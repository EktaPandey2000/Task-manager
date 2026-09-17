import { Link } from "react-router-dom";
import { FaTasks, FaClock, FaCheckCircle } from "react-icons/fa";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks, toggleTask } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const recentTasks = tasks.slice(0, 5);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Task Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Manage your tasks easily from one place.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <FaTasks className="text-2xl text-indigo-600" />
            <span className="text-sm text-gray-500">Total</span>
          </div>
          <h2 className="text-3xl font-bold">{total}</h2>
          <p className="mt-1 text-gray-500">Total Tasks</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <FaClock className="text-2xl text-red-400" />
            <span className="text-sm text-gray-500">Pending</span>
          </div>
          <h2 className="text-3xl font-bold">{pending}</h2>
          <p className="mt-1 text-gray-500">Pending Tasks</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <FaCheckCircle className="text-2xl text-green-600" />
            <span className="text-sm text-gray-500">Completed</span>
          </div>
          <h2 className="text-3xl font-bold">{completed}</h2>
          <p className="mt-1 text-gray-500">Completed Tasks</p>
        </div>
      </div>

      {/* Task list / empty state */}
      {total === 0 ? (
        <div className="mt-8 rounded-xl bg-white p-10 text-center shadow-sm">
          <FaTasks className="mx-auto mb-4 text-5xl text-gray-300" />
          <h2 className="text-xl font-semibold">No tasks yet</h2>
          <p className="mt-2 text-gray-500">
            Start by creating your first task.
          </p>
          <Link
            to="/tasks/add"
            className="mt-5 inline-block rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Create Task
          </Link>
        </div>
      ) : (
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent tasks</h2>
            <Link to="/tasks" className="text-sm font-medium text-indigo-600 hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm"
              >
                <span
                  className={task.completed ? "text-gray-400 line-through" : "text-gray-900"}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-sm font-medium text-indigo-600 hover:underline"
                >
                  {task.completed ? "Mark pending" : "Mark done"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
