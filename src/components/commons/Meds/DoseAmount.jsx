export default function DoseAmount({ selected, onChange }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 flex flex-row justify-between items-center">
      <span className="font-bold">💊 하루 복용량</span>
      <div className="flex gap-3">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`btn btn-pill ${
              selected === num ? 'btn-neutral' : 'btn-outline btn-neutral'
            }`}
            style={{ width: '1.8rem', padding: 0 }}
            onClick={() => onChange(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
