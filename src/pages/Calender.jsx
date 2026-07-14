import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { medicines } from '@/Mocks/medsMock';
import { getMedicinesByDate } from '@/utils/medicineUtils';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const selectedMedicines = getMedicinesByDate(selectedDate, medicines);

  const formatDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');

    return `${y}-${m}-${d}`;
  };

  const createCalendarEvents = () => {
    const events = [];

    medicines.forEach((medicine) => {
      const current = new Date(medicine.startDate);
      const end = new Date(medicine.endDate);

      while (current <= end) {
        events.push({
          title: medicine.title,
          date: formatDate(current),
          extendedProps: medicine,
        });

        current.setDate(current.getDate() + 1);
      }
    });

    return events;
  };

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  return (
    <div className="m-4">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="ko"
        events={createCalendarEvents()}
        dateClick={handleDateClick}
        dayCellContent={(arg) => arg.date.getDate()}
        dayCellClassNames={(arg) =>
          formatDate(arg.date) === selectedDate ? 'selected-day' : ''
        }
        height="auto"
      />
      {selectedMedicines.length === 0 ? (
        <p>복용할 약이 없습니다.</p>
      ) : (
        selectedMedicines.map((medicine) => (
          <div
            key={medicine.id}
            className="border-l-4 border-primary p-3 my-4 "
          >
            <div className="flex items-end gap-2">
              <h3 className="font-medium">{medicine.title}</h3>

              <p className="text-sm text-base-content/70">
                {medicine.startDate} ~ {medicine.endDate}
              </p>
            </div>

            <div className="mt-2 flex gap-2">
              {medicine.medicines.map((item) => (
                <span
                  key={item.id}
                  className="px-2 py-1 rounded bg-base-200 text-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>

            <small>주의사항: {medicine.memo}</small>
          </div>
        ))
      )}
    </div>
  );
}
