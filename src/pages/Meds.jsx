import { useState } from 'react';
import MedsStatCards from '../components/Meds/MedsStatCards';
import MedsSearch from '../components/Meds/MedsSearch';
import MedsFilter from '../components/Meds/MedsFilter';
import MedsAddButton from '../components/Meds/MedsAddButton';
import MedsList from '../components/Meds/MedsList';
import { INITIAL_MEDS } from '../Mocks/meds.mock';

export default function Meds() {
  const [meds, setMeds] = useState(INITIAL_MEDS);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ sortBy: '날짜순', showType: '복용중인 약' });

  const handleDelete = (id) => {
    setMeds((prev) => prev.filter((m) => m.id !== id));
  };

  const totalMeds = meds.length;
  // TODO: 오늘 복용 여부 구현 후 연결 예정
  const completedToday = 0;

  let filtered = meds.filter(
    (m) => m.hospital.includes(search) || m.meds.includes(search)
  );

  // TODO: 복용중/미복용 필터는 오늘 복용 여부 구현 후 교체 예정
  // 정렬 - '26.01.02.(금)' 형식에서 YY MM DD 추출
  const parseDate = (dateStr) => dateStr.split('.').slice(0, 3).join('');

  if (filter.sortBy === '날짜순') {
    filtered = [...filtered].sort((a, b) =>
      parseDate(a.startDate).localeCompare(parseDate(b.startDate))
    );
  } else if (filter.sortBy === '이름순') {
    filtered = [...filtered].sort((a, b) => a.hospital.localeCompare(b.hospital));
  }

  return (
    <div className="w-full space-y-4">
      <MedsStatCards totalMeds={totalMeds} completedToday={completedToday} />
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <MedsSearch value={search} onChange={setSearch} />
        </div>
        <MedsFilter onFilterChange={setFilter} />
        <MedsAddButton />
      </div>
      <MedsList
        items={filtered}
        onDelete={handleDelete}
      />
    </div>
  );
}
