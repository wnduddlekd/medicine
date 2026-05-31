import { useState } from 'react';
import { Pencil, Trash2, Check, X } from 'lucide-react';

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onUpdate,
  onSetEditing,
}) {
  const [editText, setEditText] = useState(todo.text);

  const handleConfirm = () => {
    const trimmed = editText.trim();
    if (trimmed) {
      onUpdate(todo.id, trimmed);
    } else {
      setEditText(todo.text);
    }
    onSetEditing(todo.id, false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    onSetEditing(todo.id, false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleConfirm();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <div className="space-y-2 my-2">
      <div className="flex justify-between items-center gap-2">
        {todo.isEditing ? (
          <div className="flex flex-1 items-center gap-1">
            <input
              autoFocus
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 text-sm border border-primary/40 rounded px-2 py-0.5 outline-none focus:border-primary bg-base-100"
            />
            <button
              onClick={handleConfirm}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 text-primary cursor-pointer"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleCancel}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 text-neutral cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-2 flex-1 min-w-0">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                className="check-base mt-1 shrink-0"
              />
              <p className="mt-0.5 truncate">{todo.text}</p>
            </div>

            <div className="flex text-neutral shrink-0">
              <button
                onClick={() => onSetEditing(todo.id, true)}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer"
              >
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-error/10 hover:text-error cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
