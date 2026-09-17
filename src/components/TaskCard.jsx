import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";

function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          aria-label={task.completed ? "Mark as pending" : "Mark as done"}
          className="mt-1 text-lg text-indigo-600"
        >
          {task.completed ? <FaCheckCircle /> : <FaRegCircle className="text-gray-300" />}
        </button>

        <div>
          <h3
            className={`font-medium ${
              task.completed ? "text-gray-400 line-through" : "text-gray-900"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="mt-1 text-sm text-gray-500">{task.description}</p>
          )}

          <span className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
              task.completed
                ? "bg-green-200 text-green-800 "
                : "bg-red-200 text-red-700"
            }`}
          >
            {task.completed ? "✓ Completed" : "⏳ Pending"}
          </span>
        </div>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        className="text-black-500 hover:text-red-600 hover:scale-125 transition-transform duration-200"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TaskCard;