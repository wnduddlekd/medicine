import { useState } from 'react';
import { Pencil, Trash2, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import Button from '../commons/Button';

function getStatus(doses) {
  const filled = doses.filter(Boolean).length;
  if (filled === doses.length) return 'completed';
  if (filled === 0) return 'missed';
  return 'pending';
}

function DoseDots({ doses, itemId, onDoseToggle }) {
  return (
    <div className="flex items-center gap-1">
      {doses.map((filled, i) => (
        <span
          key={i}
          onClick={() => onDoseToggle(itemId, i)}
          title={filled ? '복용 취소' : '복용 완료'}
          className={`inline-block w-3 h-3 rounded-full shrink-0 cursor-pointer transition-transform hover:scale-[1.3] ${
            filled ? 'bg-primary' : 'bg-base-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function MedsItem({ item, onDelete, onDoseToggle, onEdit }) {
  const [showCaution, setShowCaution] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    hospital: item.hospital,
    startDate: item.startDate,
    endDate: item.endDate,
    meds: item.meds,
    caution: item.caution ?? '',
  });

  const status = getStatus(item.doses);
  const borderColor = {
    completed: 'var(--success)',
    pending: 'var(--warning)',
    missed: 'var(--error)',
  }[status];

  const handleSave = () => {
    onEdit(item.id, {
      ...editForm,
      caution: editForm.caution.trim() === '' ? null : editForm.caution,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm({
      hospital: item.hospital,
      startDate: item.startDate,
      endDate: item.endDate,
      meds: item.meds,
      caution: item.caution ?? '',
    });
    setIsEditing(false);
  };

  const inputStyle = {
    fontSize: '13px',
    padding: '0.3rem 0.5rem',
    borderRadius: '0.375rem',
    border: '1.5px solid var(--base-300)',
    background: 'var(--base-100)',
    color: 'var(--base-content)',
    outline: 'none',
    width: '100%',
  };

  // 수정 모드
  if (isEditing) {
    return (
      <div
        className="pill-item"
        style={{
          borderLeftColor: borderColor,
          flexDirection: 'column',
          alignItems: 'stretch',
          gap: '0.5rem',
        }}
      >
        <input
          style={inputStyle}
          placeholder="병원명"
          value={editForm.hospital}
          onChange={(e) =>
            setEditForm({ ...editForm, hospital: e.target.value })
          }
        />
        <div className="flex gap-2">
          <input
            style={{ ...inputStyle, width: '50%' }}
            placeholder="시작일 (예: 26.01.02.(금))"
            value={editForm.startDate}
            onChange={(e) =>
              setEditForm({ ...editForm, startDate: e.target.value })
            }
          />
          <input
            style={{ ...inputStyle, width: '50%' }}
            placeholder="종료일 (예: 01.16.(금))"
            value={editForm.endDate}
            onChange={(e) =>
              setEditForm({ ...editForm, endDate: e.target.value })
            }
          />
        </div>
        <input
          style={inputStyle}
          placeholder="약 이름 (쉼표로 구분)"
          value={editForm.meds}
          onChange={(e) => setEditForm({ ...editForm, meds: e.target.value })}
        />
        <textarea
          style={{ ...inputStyle, resize: 'none', height: '64px' }}
          placeholder="주의사항 (없으면 비워두세요)"
          value={editForm.caution}
          onChange={(e) =>
            setEditForm({ ...editForm, caution: e.target.value })
          }
        />
        <div className="flex gap-2 justify-end">
          <Button size="sm" variant="primary" onClick={handleSave}>
            <Check size={13} /> 저장
          </Button>
          <Button size="sm" variant="neutral" onClick={handleCancel}>
            <X size={13} /> 취소
          </Button>
        </div>
      </div>
    );
  }

  // 일반 모드
  return (
    <div
      className="pill-item"
      style={{
        borderLeftColor: borderColor,
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 0,
      }}
    >
      {/* 헤더 행 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="pill-name" style={{ marginBottom: 0 }}>
            {item.hospital}
          </span>
          <DoseDots
            doses={item.doses}
            itemId={item.id}
            onDoseToggle={onDoseToggle}
          />
          <span
            className="text-neutral"
            style={{ fontSize: '13px', whiteSpace: 'nowrap' }}
          >
            {item.startDate} ~ {item.endDate}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0 ml-2">
          <button
            onClick={() => setIsEditing(true)}
            title="수정"
            style={{
              width: '28px',
              height: '28px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.375rem',
              color: 'var(--neutral)',
            }}
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={() => onDelete(item.id)}
            title="삭제"
            style={{
              width: '28px',
              height: '28px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0.375rem',
              color: 'var(--neutral)',
            }}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* 약 목록 */}
      {item.meds && (
        <p
          className="text-neutral mt-1"
          style={{ fontSize: '13px', lineHeight: '1.5' }}
        >
          {item.meds}
        </p>
      )}

      {/* 주의사항 토글 */}
      {item.caution !== null && (
        <>
          <button
            onClick={() => setShowCaution((v) => !v)}
            className="flex items-center gap-1"
            style={{
              fontSize: '13px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              marginTop: '4px',
              width: 'fit-content',
              userSelect: 'none',
              color: 'var(--neutral)',
            }}
          >
            주의사항
            {showCaution ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>

          {showCaution && (
            <div
              className="bg-base-200 rounded-md mt-2"
              style={{
                padding: '0.625rem 0.75rem',
                fontSize: '13px',
                lineHeight: '1.6',
              }}
            >
              {item.caution.split('\n').map((line, i) => (
                <p key={i} style={{ margin: '2px 0' }}>
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
