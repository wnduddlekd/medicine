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
    </div>
  );
}
