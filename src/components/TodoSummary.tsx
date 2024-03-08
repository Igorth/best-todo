import { Todo } from '../types/todo';

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}
export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="text-center space-y-2">
      <p className="text-sm font-medium">
        {completedTodos.length}/{todos.length} todos completed!
      </p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
        >
          Delete Completed
        </button>
      )}
    </div>
  );
}
