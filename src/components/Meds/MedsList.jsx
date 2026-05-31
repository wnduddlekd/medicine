import MedsItem from './MedsItem';

export default function MedsList({ items, onDelete }) {
  return (
    <div>
      {items.map((item) => (
        <MedsItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
