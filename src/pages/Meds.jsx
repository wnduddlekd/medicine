import { useState } from 'react';
import MedsHeader from '../components/Meds/MedsHeader';
import MedsStatCards from '../components/Meds/MedsStatCards';
import MedsSearch from '../components/Meds/MedsSearch';
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

function getStatus(doses) {
  const filled = doses.filter(Boolean).length;
  if (filled === doses.length) return 'completed';
  if (filled === 0) return 'missed';
  return 'pending';
}

export default function Meds() {
  const [meds, setMeds] = useState(INITIAL_MEDS);
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    setMeds((prev) => prev.filter((m) => m.id !== id));
  };

  const handleDoseToggle = (id, index) => {
    setMeds((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        const newDoses = [...m.doses];
        newDoses[index] = !newDoses[index];
        return { ...m, doses: newDoses };
      })
    );
  };

  const handleEdit = (id, updated) => {
    setMeds((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...updated } : m))
    );
  };

  const totalMeds = meds.length;
  const completedToday = meds.filter(
    (m) => getStatus(m.doses) === 'completed'
  ).length;

  const filtered = meds.filter(
    (m) => m.hospital.includes(search) || m.meds.includes(search)
  );

  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center">
      <MedsHeader />
      <div className="w-full max-w-2xl space-y-4">
        <MedsStatCards totalMeds={totalMeds} completedToday={completedToday} />
        <MedsSearch value={search} onChange={setSearch} />
        <MedsList
          items={filtered}
          onDelete={handleDelete}
          onDoseToggle={handleDoseToggle}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}
