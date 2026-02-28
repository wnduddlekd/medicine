export default function MedicineInput({ num, placeholder }) {
  return (
    <div className="flex gap-2 mb-3 items-center">
      <div className="flex-1 relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral font-medium">
          {num}. 약 이름:
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="input pl-20 bg-base-100 border-base-300 text-base-content"
        />
      </div>
      <button className="btn btn-neutral btn-pill">📝</button>
    </div>
  );
}
