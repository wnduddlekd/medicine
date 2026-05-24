import { useState } from 'react';
import MedsStatCards from '../components/Meds/MedsStatCards';
import MedsSearch from '../components/Meds/MedsSearch';
import MedsFilter from '../components/Meds/MedsFilter';
import MedsAddButton from '../components/Meds/MedsAddButton';
import MedsList from '../components/Meds/MedsList';

const INITIAL_MEDS = [
  {
    id: 1,
    hospital: '이비인후과',
    startDate: '26.01.02.(금)',
    endDate: '01.16.(금)',
    doses: [true, false, false],
    meds: '에니펜정 300mg, 코대원플러스정, 에이프로젠나잘스프레이, 삼성세파클러캡슐 250mg, 락스타더블캡슐',
    caution: null,
  },
  {
    id: 2,
    hospital: '이비인후과',
    startDate: '26.01.02.(금)',
    endDate: '01.16.(금)',
    doses: [true, true, true],
    meds: '에니펜정 300mg, 코대원플러스정, 에이프로젠나잘스프레이',
    caution: '설사, 복통, 속쓰림에 주의\n졸음이나 어지러움에도 주의해야 함',
  },
  {
    id: 3,
    hospital: '이비인후과',
    startDate: '26.01.02.(금)',
    endDate: '01.16.(금)',
    doses: [true, true, false],
    meds: '에니펜정 300mg, 코대원플러스정, 에이프로젠나잘스프레이',
    caution: null,
  },
  {
    id: 4,
    hospital: '이비인후과',
    startDate: '26.01.02.(금)',
    endDate: '01.16.(금)',
    doses: [true, false, false],
    meds: '에니펜정 300mg, 코대원플러스정, 에이프로젠나잘스프레이',
    caution: '식후 30분 복용 권장',
  },
  {
    id: 5,
    hospital: '이비인후과',
    startDate: '26.01.02.(금)',
    endDate: '01.16.(금)',
    doses: [true, true, true],
    meds: '에니펜정 300mg, 코대원플러스정, 에이프로젠나잘스프레이',
    caution: null,
  },
];

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
  // 정렬
  if (filter.sortBy === '이름순') {
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
