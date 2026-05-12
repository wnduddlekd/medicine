import DailyDoseFeedback from '../components/Home/DailyDoseFeedback';
import DoseCheck from '../components/Home/DoseCheck.jsx';
import HomeCalender from '../components/Home/HomeCalender.jsx';
import UserInfo from '../components/Home/UserInfo.jsx';
import { medicines } from '../Mocks/medicationMock.js';

export default function Main() {
  return (
    <div className="space-y-5">
      <DailyDoseFeedback medicines={medicines} />
      <div className="flex">
        <div className="space-y-7">
          <HomeCalender /> <DoseCheck />
        </div>
        <div className="flex flex-col items-center w-full">
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
