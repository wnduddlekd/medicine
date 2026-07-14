import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { medicines } from '@/Mocks/medsMock.js';

export default function Calendar() {
  const createCalendarEvents = () => {
    const events = [];

    medicines.forEach((medicine) => {
      const current = new Date(medicine.startDate);
      const end = new Date(medicine.endDate);

      while (current <= end) {
        events.push({
          title: medicine.title,
          date: current.toISOString().split('T')[0],
          extendedProps: medicine,
        });

        current.setDate(current.getDate() + 1);
      }
    });

    return events;
  };
  function handleDateClick(info) {
    console.log(info.dateStr);
  }
  return (
    <div className="min-w-100 w-full card-base">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={createCalendarEvents()}
        locale="ko"
        dayCellContent={(arg) => {
          return arg.date.getDate();
        }}
        height="auto"
      />
    </div>
  );
}
