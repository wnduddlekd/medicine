export default function MedsStatCards({ totalMeds, completedToday }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div
        className="card bg-base-100 border border-base-300 text-center"
        style={{ padding: '1.25rem 1.5rem' }}
      >
        <p className="text-neutral text-small mb-1">현재 복용중인 약</p>
        <p className="text-h4 font-bold text-primary">{totalMeds}개</p>
      </div>
      <div
        className="card bg-base-100 border border-base-300 text-center"
        style={{ padding: '1.25rem 1.5rem' }}
      >
        <p className="text-neutral text-small mb-1">오늘 복약 완료</p>
        <p className="text-h4 font-bold" style={{ color: 'var(--secondary)' }}>
          {completedToday}/{totalMeds}
        </p>
      </div>
    </div>
  );
}
