export default function DailyDoseFeedback({ medicines }) {
  const total = medicines.length;
  const taken = medicines.filter((med) => med.taken).length;

  const percent = Math.round((taken / total) * 100);
  let message = '';

  if (percent === 100) {
    message = '오늘 하루도 수고하셨어요:)';
  } else if (percent >= 70) {
    message = '남은 약 복용도 화이팅! 힘내요 우리';
  } else if (percent >= 30) {
    message = '오늘 약 챙기는 걸 잊지 마세요!';
  } else {
    message = '오늘 약 복용을 시작할까요?';
  }
  return (
    <div className="card-base">
      <h3 className="text-primary">{message}</h3>
    </div>
  );
}
