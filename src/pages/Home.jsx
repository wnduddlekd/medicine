import DailyDoseFeedback from '../components/Home/DailyDoseFeedback';
import { medicines } from '../Mocks/medicationMock.js';

export default function Main() {
  return (
    <div className="space-y-5">
      <DailyDoseFeedback medicines={medicines} />
    </div>
  );
}
