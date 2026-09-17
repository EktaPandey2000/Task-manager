import { Link, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";

function AddTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  function handleSubmit(task) {
    addTask(task);
    navigate("/tasks");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Add New Task</h1>
        <p className="mt-2 text-gray-600">Create a new task for your work.</p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <TaskForm onSubmit={handleSubmit} />

        <Link
          to="/tasks"
          className="mt-4 inline-block rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default AddTask;
