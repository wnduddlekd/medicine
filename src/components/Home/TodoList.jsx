import { Pencil, Plus, Trash2 } from 'lucide-react';

export default function TodoList() {
  return (
    <div className="card-base min-w-67 w-full">
      <h3 className="text-primary font-semibold mb-5">Todo List</h3>
      <small>진행중인 체크리스트</small>
      <TodoItem />
      <TodoItem />
      <button className="flex justify-center bg-base-100 rounded w-full cursor-pointer">
        <Plus width={16} />
      </button>
      <hr className="border-0 h-px bg-base-300 my-3" />
      <small>완료된 체크리스트</small>
      <p>기능 구현 시 추가</p>
    </div>
  );
}

function TodoItem() {
  return (
    <div className="space-y-2 my-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input type="checkbox" className="check-base mt-1" />
          <p className="mt-0.5">24일 ㅇㅇ병원 가기</p>
        </div>
        <div className="flex text-neutral">
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
            <Pencil className="w-4 h-4" />
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-primary/10 cursor-pointer">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
