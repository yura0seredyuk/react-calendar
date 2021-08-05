import getDay from 'date-fns/getDay';
import getDateOfMonth from 'date-fns/getDate';
import set from 'date-fns/set';
import format from 'date-fns/format';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import isSameMonth from 'date-fns/isSameMonth';
import isSameDay from 'date-fns/isSameDay';
import getYear from 'date-fns/getYear';

const DAYS_OF_WEEK = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];

const getDateInfo = date => {
    const startOfMonth = set(date, { date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    const now = date;
    const todayDay = getDateOfMonth(now);
    const todayMonth = format(now, 'MMM');
    const dateYear = format(startOfMonth, 'yyyy');
    const dateMonth = format(startOfMonth, 'MMM');
    const days = [...DAYS_OF_WEEK.map(date => ({ name: date, isTitle: true }))];

    const dayOfWeek = getDay(startOfMonth);
    console.log('dayOfWeek', dayOfWeek)
    const daysInMonth = getDaysInMonth(startOfMonth);

    for (let i = 1; i < dayOfWeek; i++) {
        days.push('');
    }

    for (let i = 0; i < daysInMonth; i++) {
        const date = i + 1;
        const dateInCalendar = dayOfWeek + date;
        const isWeekend = dateInCalendar % 7 === 0 || (dateInCalendar + Math.floor(i / 7)) % 8 === 0;

        days.push({ name: date, isToday: todayMonth === dateMonth && date === todayDay, isWeekend });
    }

    return {
        year: dateYear,
        month: dateMonth,
        days,
        startOfMonth
    };
};

export default getDateInfo;
