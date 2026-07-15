import DailyDoseFeedback from '../components/Home/DailyDoseFeedback';
import TimeCheck from '../components/Home/TimeCheck.jsx';
import Calender from '../components/Home/Calender.jsx';
import TodoList from '../components/Home/TodoList.jsx';
import UserInfo from '../components/Home/UserInfo.jsx';
import WideUserInfo from '../components/Home/WideUserInfo.jsx';
import { medicines } from '../Mocks/medsMock.js';
import { useState } from 'react';
import { getMedicinesByDate } from '@/utils/medicineUtils';

export default function Main() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const selectedMedicines = getMedicinesByDate(selectedDate, medicines);

  return (
    <div className="space-y-5">
      <DailyDoseFeedback medicines={medicines} />
      <div className="block md:hidden">
        <WideUserInfo />
      </div>
      <div className="flex gap-7">
        <div className="w-full space-y-7">
          <Calender
            medicines={medicines}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <TimeCheck date={selectedDate} medicines={selectedMedicines} />
        </div>
        <div className="hidden md:flex flex-col gap-3 max-w-70 w-full mx-auto items-center">
          <UserInfo />
          <TodoList />
        </div>
      </div>
      <div className="block md:hidden">
        <TodoList />
      </div>
    </div>
  );
}
