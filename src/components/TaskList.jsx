import TaskCard from "./TaskCard";
import { FaTasks } from "react-icons/fa";

function TaskList({ tasks, onToggle, onDelete, emptyMessage }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl bg-white p-10 text-center shadow-sm">
        <FaTasks className="mx-auto mb-4 text-5xl text-gray-300" />
        <h2 className="text-xl font-semibold">No tasks available</h2>
        <p className="mt-2 text-gray-500">
          {emptyMessage || "Your tasks will appear here."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
