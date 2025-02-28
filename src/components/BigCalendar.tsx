'use client';

import { calendarEvents } from '@/lib/data';
import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={['work_week', 'day']}
        view={view}
        style={{ height: '98%' }}
        onView={handleOnChangeView}
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCalendar;
