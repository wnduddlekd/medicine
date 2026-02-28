import { useState } from 'react';
import MedicineInput from '../components/commons/Meds/MedicineInput';
import DosePeriod from '../components/commons/Meds/DosePeriod';
import DoseAmount from '../components/commons/Meds/DoseAmount';

export default function Meds() {
  const [dose, setDose] = useState(1);

  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl mb-8 flex items-center gap-2">
        <h1 className="text-h3 font-bold text-base-content">로고</h1>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        <div className="card bg-base-100 shadow-sm border border-base-300">
          <input
            type="text"
            placeholder="제목: "
            className="w-full bg-transparent outline-none"
          />
        </div>

        <DosePeriod />
        <DoseAmount selected={dose} onChange={setDose} />

        <div className="card bg-base-100 shadow-sm border border-base-300">
          <MedicineInput num={1} placeholder="" />
          <button className="btn btn-outline btn-neutral w-full mt-2">
            + 추가하기
          </button>
        </div>

        <div className="card bg-base-100 shadow-sm border border-base-300">
          <p className="text-small font-bold mb-2 text-primary">📌 주의사항</p>
          <textarea
            className="w-full h-32 bg-base-200 rounded-lg p-4 outline-none resize-none border border-base-300"
            placeholder="내용을 입력해주세요"
          />
        </div>

        <div className="flex gap-3 justify-end pt-4">
          <button className="btn btn-primary shadow-lg">등록하기</button>
          <button className="btn btn-neutral">취소</button>
        </div>
      </div>
    </div>
  );
}
