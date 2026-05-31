import { useState } from 'react';
import { Plus, Check, X } from 'lucide-react';
import { todoData } from '@/Mocks/todoMock.js';
import TodoItem from './TodoItem';
import CompletedItem from './CompletedItem';

function AddTodoInput({ onAdd, onCancel }) {
  const [text, setText] = useState('');

  const handleConfirm = () => {
    const trimmed = text.trim();
    if (trimmed) onAdd(trimmed);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleConfirm();
    if (e.key === 'Escape') onCancel();
  };

  return (
    <div className="flex items-center gap-1 mt-1">
      <input
        autoFocus
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="새 할 일 입력..."
        className="flex-1 text-sm border border-primary/40 rounded px-2 py-0.5 outline-none focus:border-primary bg-base-100"
      />
      <button
        onClick={handleConfirm}
        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 text-primary cursor-pointer"
      >
        <Check className="w-4 h-4" />
      </button>
      <button
        onClick={onCancel}
        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 text-neutral cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function TodoList() {
  const [todos, setTodos] = useState(todoData);
  const [isAdding, setIsAdding] = useState(false);

  const toggleTodo = (id) => {
    setTodos((prev) => {
      const updated = prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      const completed = updated.filter((todo) => todo.completed);
      if (completed.length > 2) {
        return updated.filter((todo) => todo.id !== completed[0].id);
      }
      return updated;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
    setIsAdding(false);
  };

  const setEditing = (id, value) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: value } : todo
      )
    );
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="card-base min-w-67 w-full">
      <h3 className="text-primary font-semibold mb-5">Todo List</h3>

      <small>진행중인 체크리스트</small>

      {activeTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
          onSetEditing={setEditing}
        />
      ))}

      {isAdding ? (
        <AddTodoInput onAdd={addTodo} onCancel={() => setIsAdding(false)} />
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex justify-center bg-base-100 rounded w-full cursor-pointer mt-1"
        >
          <Plus width={16} />
        </button>
      )}

      <hr className="border-0 h-px bg-base-300 my-3" />

      <small>완료된 체크리스트</small>

      {completedTodos.length === 0 ? (
        <p className="text-sm text-neutral">완료된 체크리스트가 없습니다.</p>
      ) : (
        completedTodos.map((todo) => (
          <CompletedItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))
      )}
    </div>
  );
}
