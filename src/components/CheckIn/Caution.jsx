export default function Caution() {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300">
      <p className="text-small font-bold mb-2 text-Danger">📌 주의사항</p>
      <textarea
        className="w-full h-32 bg-base-200 rounded-lg p-4 outline-none resize-none border border-base-300"
        placeholder="내용을 입력해주세요"
      />
    </div>
  );
}
