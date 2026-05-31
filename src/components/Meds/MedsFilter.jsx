import { useState } from 'react';
import { ListFilter } from 'lucide-react';

const SORT_OPTIONS = ['날짜순', '이름순'];
const SHOW_OPTIONS = ['복용중인 약', '미복용 약'];

export default function MedsFilter({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState('날짜순');
  const [showType, setShowType] = useState('복용중인 약');

  const handleSort = (option) => {
    setSortBy(option);
    onFilterChange?.({ sortBy: option, showType });
  };

  const handleShowType = (option) => {
    setShowType(option);
    onFilterChange?.({ sortBy, showType: option });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label="필터"
        className="w-10 h-10 flex items-center justify-center rounded-md text-neutral cursor-pointer"
      >
        <ListFilter size={18} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 z-10 bg-base-100 rounded-xl shadow-md shadow-base-300 border border-base-200 min-w-[120px] p-2 flex flex-col gap-2.5">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSort(option)}
              className={`w-fit px-1.5 py-1 text-small cursor-pointer whitespace-nowrap rounded transition-colors text-base-content ${
                sortBy === option
                  ? 'bg-primary/20'
                  : 'hover:bg-base-200'
              }`}
            >
              {option}
            </button>
          ))}

          <div className="border-t border-base-200" />

          {SHOW_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleShowType(option)}
              className={`w-fit px-1.5 py-1 text-small cursor-pointer whitespace-nowrap rounded transition-colors text-base-content ${
                showType === option
                  ? 'bg-secondary/20'
                  : 'hover:bg-base-200'
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
