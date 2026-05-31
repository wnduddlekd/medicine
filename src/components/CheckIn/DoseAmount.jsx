import { Pill } from 'lucide-react';

const DOSE_LABELS = ['아침', '점심', '저녁'];

export default function DoseAmount({ doses, onToggle }) {
  return (
    <div className="card-base flex flex-row justify-between items-center">
      <span className="font-bold flex items-center gap-1">
        <Pill size={16} /> 하루 복용량
      </span>
      <div className="flex items-center gap-2">
        {DOSE_LABELS.map((label, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className="text-p text-neutral">{label}</span>
            <button
              type="button"
              onClick={() => onToggle(i)}
              title={label}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${
                doses[i] ? 'bg-primary' : 'bg-base-300 hover:bg-primary/40'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
