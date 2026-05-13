import { useState } from 'react';
import { Filter } from 'lucide-react';

const FILTER_OPTIONS = ['날짜순', '이름순', '복용중인 약', '미복용 약'];

export default function MedsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('복용중인 약');

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="필터"
        className="w-10 h-10 flex items-center justify-center rounded-md text-neutral cursor-pointer"
      >
        <Filter size={18} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 flex flex-col gap-1 z-10">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`bg-base-100 rounded-md px-4 py-2 text-small cursor-pointer border ${
                selected === option
                  ? 'border-primary text-primary'
                  : 'border-base-300 text-neutral'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
