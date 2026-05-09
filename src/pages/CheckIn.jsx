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
    <div className="space-y-4">
      <TitleInput />
      <DosePeriod />
      <DoseAmount selected={dose} onChange={setDose} />
      <MedicineList />
      <Caution />
      <CheckInActions />
    </div>
  );
}
