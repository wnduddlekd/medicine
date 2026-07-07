import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function Calendar() {
  function handleDateClick(info) {
    console.log(info.dateStr);
  }
  return (
    <div className="min-w-100 w-full card-base">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        editable={true}
      />
    </div>
  );
}
