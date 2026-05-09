import DailyDoseFeedback from '../components/Home/DailyDoseFeedback';
import HomeCalender from '../components/Home/HomeCalender.jsx';
import UserInfo from '../components/Home/UserInfo.jsx';
import { medicines } from '../Mocks/medicationMock.js';

export default function Main() {
  return (
    <div className="space-y-5">
      <DailyDoseFeedback medicines={medicines} />
      <div className="flex">
        <div>
          <HomeCalender />
        </div>
        <div className="flex flex-col items-center w-full">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
