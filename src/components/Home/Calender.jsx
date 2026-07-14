import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { formatDate } from '../../utils/formatDate';

export default function Calendar({ medicines, selectedDate, setSelectedDate }) {
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
    setSelectedDate(info.dateStr);
  }

  return (
    <div className="min-w-100 w-full card-base">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={createCalendarEvents()}
        dateClick={handleDateClick}
        locale="ko"
        dayCellContent={(arg) => arg.date.getDate()}
        dayCellClassNames={(arg) =>
          formatDate(arg.date) === selectedDate ? 'selected-day' : ''
        }
        height="auto"
      />
    </div>
  );
}
