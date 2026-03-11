import { useState } from 'react';
import Button from '../commons/Button';
import MedicineInput from './MedicineInput';

export default function MedicineList() {
  const [medicines, setMedicines] = useState([1]);

  const handleAdd = () => {
    setMedicines((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      {medicines.map((num) => (
        <MedicineInput key={num} num={num} placeholder="" />
      ))}
      <Button variant="primary" outline fullWidth onClick={handleAdd}>
        + 추가하기
      </Button>
    </div>
  );
}
