import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-#B427F5-600"
        >
          <FaTasks />
          Task Manager
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-indigo-600"
          >
            Dashboard
          </Link>

          <Link
            to="/tasks"
            className="font-medium text-gray-700 hover:text-indigo-600"
          >
            Tasks
          </Link>

          <Link
            to="/tasks/add"
            className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 rounded-5xl"
          >
            + Add Task
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
