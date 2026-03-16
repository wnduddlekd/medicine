import { useState } from 'react';
import TitleInput from '../components/CheckIn/TitleInput';
import DosePeriod from '../components/CheckIn/DosePeriod';
import DoseAmount from '../components/CheckIn/DoseAmount';
import MedicineList from '../components/CheckIn/MedicineList';
import Caution from '../components/CheckIn/Caution';
import CheckInActions from '../components/CheckIn/CheckInActions';

export default function CheckIn() {
  const [dose, setDose] = useState(1);

  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl mb-8 flex items-center gap-2">
        <h1 className="text-h3 font-bold text-base-content">로고</h1>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        <TitleInput />
        <DosePeriod />
        <DoseAmount selected={dose} onChange={setDose} />
        <MedicineList />
        <Caution />
        <CheckInActions />
      </div>
    </div>
  );
}
