export const getTodayMedicines = (medicines) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return medicines.filter((medicine) => {
    const start = new Date(medicine.startDate);
    const end = new Date(medicine.endDate);

    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    return today >= start && today <= end;
  });
};
