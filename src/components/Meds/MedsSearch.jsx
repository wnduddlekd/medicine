import { Search } from 'lucide-react';

export default function MedsSearch({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral"
      />
      <input
        className="w-full pl-10 py-2 text-p bg-transparent border-b border-base-300 outline-none focus:border-primary transition-colors"
        type="text"
        placeholder="병원명, 약 이름으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
