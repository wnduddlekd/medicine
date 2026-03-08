import Button from '../commons/Button';
import { Pill } from 'lucide-react';

export default function DoseAmount({ selected, onChange }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 flex flex-row justify-between items-center">
      <span className="font-bold flex items-center gap-1">
        <Pill size={16} /> 하루 복용량
      </span>
      <div className="flex gap-3">
        {[1, 2, 3].map((num) => (
          <Button
            pill
            variant={selected === num ? 'primary' : 'subtle'}
            size="sm"
            key={num}
            onClick={() => onChange(num)}
          >
            {num}
          </Button>
        ))}
      </div>
    </div>
  );
}
