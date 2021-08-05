import React, { useState, useMemo } from "react";
import "./style.css";
import getDateInfo from './calendar.js';
const addMonths = require('date-fns/addMonths');
const subMonths = require('date-fns/subMonths');

export default function App() {
  const [activeDate, setActiveDate] = useState(new Date());
  const calendar = useMemo(() => getDateInfo(activeDate), [activeDate]);

  const handleChangeDateMinus = () => {
    setActiveDate(subMonths(activeDate, 1));
  }

  const handleChangeDatePlus = () => {
    setActiveDate(addMonths(activeDate, 1));
  }

  return (
    <div className='calendar'>
        {console.log(calendar)}
        <div className='topContainer'>
          <div onClick={handleChangeDateMinus}>-</div>
          <div className='title'>{`${calendar.month} ${calendar.year}`}</div>
          <div onClick={handleChangeDatePlus}>+</div>
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
