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
        <tbody>
          <tr>
            {makeWeek(props.date, 1)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function makeWeek(date, weekNumber) {
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  if (firstDay === 0) {firstDay = 7};
  let previousMonthDays = 32 - new Date(date.getFullYear(), date.getMonth() - 1, 32).getDate();
  let week = [];
  for (let i = 0; i < firstDay - 1; i++) {
    week[i] = previousMonthDays + i - (firstDay - 2);
  }
  for (let i = firstDay - 1; i < 7; i++) {
    week[i] = i - (firstDay - 2);
  }
  return (
    week.map(makeDay)
  )
}

function makeDay(day) {
  return <td>{day}</td>
}
