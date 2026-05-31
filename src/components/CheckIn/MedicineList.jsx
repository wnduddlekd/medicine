import { useState } from 'react';
import { Plus } from 'lucide-react';
import MedicineInput from './MedicineInput';

export default function MedicineList() {
  const [medicines, setMedicines] = useState([1]);

  const handleAdd = () => {
    setMedicines((prev) => [...prev, prev.length ? prev[prev.length - 1] + 1 : 1]);
  };

  const handleDelete = (id) => {
    setMedicines((prev) => prev.filter((n) => n !== id));
  };

  return (
    <div className="card-base">
      <p className="font-bold flex items-center gap-1 mb-3">
        <Plus size={16} /> 약 추가
      </p>
      <div className="space-y-2">
        {medicines.map((num, i) => (
          <MedicineInput
            key={num}
            num={i + 1}
            placeholder=""
            deletable={medicines.length > 1}
            onDelete={() => handleDelete(num)}
          />
        ))}
        <button
          type="button"
          onClick={handleAdd}
          title="약 추가"
          className="w-full py-2.5 bg-base-100 border border-base-300 rounded-lg outline-none hover:border-primary text-neutral hover:text-primary cursor-pointer transition-colors flex items-center justify-center"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}
