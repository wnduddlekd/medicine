import Button from '../commons/Button';
import { Calendar } from 'lucide-react';
export default function DosePeriod() {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 flex flex-row justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="font-bold flex items-center gap-1">
          <Calendar size={16} /> 복용 기간
        </span>
        <span className="text-neutral text-small">
          2026.01.02.(금) ~ 2026.01.16.(금)
        </span>
      </div>
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-small text-neutral">기록</span>
        <input type="checkbox" className="w-5 h-5 accent-primary" />
      </label>
    </div>
  );
}
