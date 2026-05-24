import { medicines } from '@/Mocks/medicationMock.js';

export default function DoseCheck() {
  return (
    <div className="card-base space-y-1 min-h-67">
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
        {medicines.map((m) => (
          <CheckItem key={m.id} medicine={m} />
        ))}
      </div>
    </div>
  );
}

function CheckItem({ medicine }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <p>{medicine.name}</p>
        <small>{medicine.date}</small>
      </div>
      <div className="flex">
        {Object.entries(medicine.meals).map(([mealName, taken]) => (
          <div key={mealName}>
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
