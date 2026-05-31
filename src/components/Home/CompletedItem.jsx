import { RotateCcw } from 'lucide-react';

export default function CompletedItem({ todo, onToggle }) {
  return (
    <div className="px-1 flex items-center justify-between text-neutral">
      <p className="text-sm line-through">{todo.text}</p>
      <button
        onClick={() => onToggle(todo.id)}
        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-warning/10 hover:text-warning cursor-pointer shrink-0"
      >
        <RotateCcw className="w-4 h-4" />
      </button>
    </div>
  );
}
