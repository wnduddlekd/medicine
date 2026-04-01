import { Search } from 'lucide-react';

export default function MedsSearch({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={15}
        className="absolute text-neutral"
        style={{ left: '0.875rem', top: '50%', transform: 'translateY(-50%)' }}
      />
      <input
        className="input"
        style={{ paddingLeft: '2.5rem', fontSize: '0.9375rem' }}
        type="text"
        placeholder="병원명, 약 이름으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
