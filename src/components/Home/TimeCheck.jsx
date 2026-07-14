import { medicines } from '@/Mocks/medsMock.js';
import { getTodayMedicines } from '@/utils/medicineUtils';

export default function DoseCheck() {
  const todayMedicines = getTodayMedicines(medicines);
  return (
    <div className="card-base space-y-1">
      <div className="flex justify-between">
        <small>약 종류</small>
        <div className="space-x-2 mx-0.5">
          <small>아침</small>
          <small>점심</small>
          <small>저녁</small>
        </div>
      </div>
      <hr className="border-0 h-px bg-base-300" />
      <div className="space-y-1.5 my-3">
        {todayMedicines.map((medicine) => (
          <CheckItem key={medicine.id} medicine={medicine} />
        ))}
      </div>
    </div>
  );
}

function CheckItem({ medicine }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <p>{medicine.title}</p>
        <small>
          {medicine.startDate} ~ {medicine.endDate}
        </small>
      </div>
      <div className="flex">
        {Object.entries(medicine.times).map(([timeName, taken]) => (
          <div key={timeName}>
            {taken ? (
              <input type="checkbox" className="check-base mx-1.5" />
            ) : (
              <div className="w-5 h-5 mx-1.5 rounded bg-base-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
