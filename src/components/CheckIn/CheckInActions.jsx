import Button from '../commons/Button';

export default function CheckInActions() {
  return (
    <div className="flex gap-3 justify-end pt-4">
      <Button variant="primary">등록하기</Button>
      <Button variant="neutral">취소</Button>
    </div>
  );
}
