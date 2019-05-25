const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthsGenitive = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


const Calendar = function(props) {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{weekDays[props.date.getDay()]}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{props.date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthsGenitive[props.date.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{props.date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{months[props.date.getMonth()]}</span>&nbsp;<span class="ui-datepicker-year">{props.date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
          {makeMonth(props.date)}
      </table>
    </div>
  )
}

function makeMonth(date) {
  let weeks = [0,1,2,3,4,5];
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  if (firstDay === 0) {firstDay = 7};
  let monthDays = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
  let lastDay = new Date(date.getFullYear(), date.getMonth(), monthDays).getDay();
  if (monthDays === 28) {
    weeks[5] = -1;
    if (firstDay === 1) {
      weeks[4] = -1;
    }
  } else if (((firstDay === 6) || (monthDays === 31)) && ((firstDay === 7) || (monthDays > 31)) ){
    weeks[5] = -1;
  }
  let app = (
    <tbody>
      {makeWeek(date, weeks[0])}
      {makeWeek(date, weeks[1])}
      {makeWeek(date, weeks[2])}
      {makeWeek(date, weeks[3])}
      {makeWeek(date, weeks[4])}
      {makeWeek(date, weeks[5])}
    </tbody>
  );
  return app;
}

function makeWeek(date, weekNumber) {
  if (weekNumber === -1) {
    return null;
  }
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  if (firstDay === 0) {firstDay = 7};
  let monthDays = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
  let previousMonthDays = 32 - new Date(date.getFullYear(), date.getMonth() - 1, 32).getDate();
  let week = [];
  let isAnotherMonth = [false, false, false, false, false, false, false];
  for (let i = 0; i < 7; i++) {
    week[i] = i - firstDay + 2 + weekNumber * 7;
    if (week[i] < 1) {
      week[i] += previousMonthDays;
      isAnotherMonth[i] = true;
      continue;
    }
    if (week[i] > monthDays) {
      week[i] -= monthDays;
      isAnotherMonth[i] = true;
    }
  }
  return (
    <tr>
      {makeDay(week[0], isAnotherMonth[0], date)}
      {makeDay(week[1], isAnotherMonth[1], date)}
      {makeDay(week[2], isAnotherMonth[2], date)}
      {makeDay(week[3], isAnotherMonth[3], date)}
      {makeDay(week[4], isAnotherMonth[4], date)}
      {makeDay(week[5], isAnotherMonth[5], date)}
      {makeDay(week[6], isAnotherMonth[6], date)}
    </tr>
  )
}

function makeDay(day, isAnotherMonth, date) {
  if (isAnotherMonth) {
    return <td className="ui-datepicker-other-month">{day}</td>
  }
  if (day === date.getDate()) {
    return <td className="ui-datepicker-today">{day}</td>
  }
  return <td>{day}</td>
}
