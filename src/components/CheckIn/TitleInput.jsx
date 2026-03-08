export default function TitleInput() {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 flex flex-row items-center gap-2">
      <p className="font-bold whitespace-nowrap">제목:</p>
      <input
        type="text"
        placeholder="ex)감기약"
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}
