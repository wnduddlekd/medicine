import Button from '../commons/Button';

export default function CheckInActions() {
  return (
    <div className="flex gap-2 justify-end pt-2">
      <Button variant="primary" size="sm">
        등록
      </Button>
      <Button variant="neutral" size="sm">
        취소
      </Button>
    </div>
  );
}
