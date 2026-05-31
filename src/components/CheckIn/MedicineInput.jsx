import { X } from 'lucide-react';

export default function MedicineInput({ num, placeholder, onDelete, deletable = true }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-small text-neutral whitespace-nowrap">
        {num}. 약 이름
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-22 pr-10 py-2.5 bg-base-100 border border-base-300 rounded-lg outline-none focus:border-primary transition-colors"
      />
      {deletable && (
        <button
          type="button"
          onClick={onDelete}
          title="삭제"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-neutral hover:text-primary cursor-pointer"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
