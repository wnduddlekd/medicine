import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { ROUTES } from '../../constants/routes';

const DOSE_LABELS = ['아침', '점심', '저녁'];

function DoseDots({ doses }) {
  return (
    <div className="flex items-center gap-1">
      {doses.map((scheduled, i) => (
        <span
          key={i}
          title={DOSE_LABELS[i]}
          className={`inline-block w-3 h-3 rounded-full shrink-0 ${
            scheduled ? 'bg-primary' : 'bg-base-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function MedsItem({ item, onDelete }) {
  const navigate = useNavigate();
  const [showCaution, setShowCaution] = useState(false);

  return (
    <div
      className="card-base py-4 pill-item flex-col items-stretch"
    >
      {/* 헤더 행 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="pill-name mb-0">{item.hospital}</span>
          <DoseDots doses={item.doses} />
          <span className="text-neutral text-small whitespace-nowrap">
            {item.startDate} ~ {item.endDate}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0 ml-2">
          <button
            onClick={() => navigate(`${ROUTES.CHECK_IN}/${item.id}`)}
            title="수정"
            className="w-7 h-7 flex items-center justify-center rounded-md text-neutral cursor-pointer"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            title="삭제"
            className="w-7 h-7 flex items-center justify-center rounded-md text-neutral cursor-pointer"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* 약 목록 */}
      {item.meds && (
        <p className="text-neutral text-small leading-body mt-1">{item.meds}</p>
      )}

      {/* 주의사항 토글 */}
      {item.caution !== null && (
        <>
          <button
            onClick={() => setShowCaution((v) => !v)}
            className="flex items-center gap-1 text-small text-neutral w-fit cursor-pointer mt-1 select-none ml-auto"
          >
            주의사항
            {showCaution ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          {showCaution && (
            <div className="bg-base-200 rounded-md mt-2 px-3 py-2.5 text-small leading-body">
              {item.caution.split('\n').map((line, i) => (
                <p key={i} className="my-0.5">
                  {line}
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
