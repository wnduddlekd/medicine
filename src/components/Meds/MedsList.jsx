import Button from '../commons/Button';
import MedsItem from './MedsItem';

export default function MedsList({ items, onDelete, onDoseToggle, onEdit }) {
  return (
    <div>
      {items.map((item) => (
        <MedsItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onDoseToggle={onDoseToggle}
          onEdit={onEdit}
        />
      ))}
      <Button variant="primary" fullWidth>
        + 새 복약 추가
      </Button>
    </div>
  );
}
