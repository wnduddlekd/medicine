export const getMedicinesByDate = (date, medicines) => {
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);

  return medicines.filter((medicine) => {
    const start = new Date(medicine.startDate);
    const end = new Date(medicine.endDate);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    return target >= start && target <= end;
  });
};
