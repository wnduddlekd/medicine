import { useState } from 'react';
import TitleInput from '../components/CheckIn/TitleInput';
import DosePeriod from '../components/CheckIn/DosePeriod';
import DoseAmount from '../components/CheckIn/DoseAmount';
import MedicineList from '../components/CheckIn/MedicineList';
import Caution from '../components/CheckIn/Caution';
import CheckInActions from '../components/CheckIn/CheckInActions';

export default function CheckIn() {
  const [doses, setDoses] = useState([false, false, false]);

  const handleToggleDose = (i) => {
    setDoses((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="space-y-4">
      <TitleInput />
      <DosePeriod />
      <DoseAmount doses={doses} onToggle={handleToggleDose} />
      <MedicineList />
      <Caution />
      <CheckInActions />
    </div>
  );
}
