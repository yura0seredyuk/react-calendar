import React, { useState, useMemo } from "react";
import "./style.css";
import getDateInfo from './calendar.js';

export default function App() {
  const [activeDate, setActiveDate] = useState(new Date());
  const calendar = useMemo(() => getDateInfo(activeDate), [activeDate]);

  return (
    <div className='calendar'>
        {console.log(calendar)}
        <div className='topContainer'>
          <div>-</div>
          <div className='title'>{`${calendar.month} ${calendar.year}`}</div>
          <div>+</div>
        </div>
        <div className='weekDaysContainer'>
          {calendar.days.map((day, i) => day.isTitle && <span key={i} className='weekDayTitle'>{day.name}</span>)}
        </div>
        <div className='line'/>
        <div className='bottomContainer'>
          {calendar.days.map((day, i) => {
            if (!day.isTitle) {
              if (day.isWeekend) {
                return <div className='weekendDay' key={i}>{day.name}</div>
              }
              if (day.isToday) {
                return <div className='todayDay' key={i}>{day.name}</div>
              }
              if (!day.isWeekend && !day.isToday) {
                return <div className='weekDay' key={i}>{day.name}</div>
              }
            }
          })}
        </div>
    </div>
  );
}
