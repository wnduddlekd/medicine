import { Search } from 'lucide-react';

export default function MedsSearch({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral"
      />
      <input
        className="input pl-10 text-p"
        type="text"
        placeholder="병원명, 약 이름으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
