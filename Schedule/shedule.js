// helper to generate calendar days
function generateCalendar(month, year) {
  const grid = document.querySelector('.calendar-grid');
  grid.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const labels = ['Su','Mo','Tu','We','Th','Fr','Sa'];
  labels.forEach(l => {
    const el = document.createElement('div');
    el.textContent = l;
    el.style.fontWeight = 'bold';
    grid.appendChild(el);
  });
  // blank slots
  for (let i=0; i<firstDay; i++){
    const blank = document.createElement('div');
    grid.appendChild(blank);
  }
  // days
  for (let d=1; d<=daysInMonth; d++){
    const cell = document.createElement('div');
    cell.textContent = d;
    cell.classList.add('day');
    cell.addEventListener('click', () => selectDate(d));
    grid.appendChild(cell);
  }
  document.getElementById('month-year').textContent =
    new Date(year, month).toLocaleString('default', { month: 'long', year:'numeric' });
}

let today = new Date(),
    curMonth = today.getMonth(),
    curYear = today.getFullYear(),
    selectedDay = null;

function selectDate(day) {
  selectedDay = day;
  // clear prev
  document.querySelectorAll('.calendar-grid .selected')
    .forEach(el => el.classList.remove('selected'));
  // highlight
  const allDays = document.querySelectorAll('.calendar-grid .day');
  allDays.forEach(el => {
    if (+el.textContent === day) el.classList.add('selected');
  });
  const dt = new Date(curYear, curMonth, day);
  document.getElementById('selected-date').textContent =
    dt.toLocaleDateString('default', { weekday:'long', month:'long', day:'numeric', year:'numeric' });
}

// month nav
document.getElementById('prev-month').onclick = () => {
  curMonth = curMonth -1 < 0 ? 11 : curMonth-1;
  if (curMonth === 11) curYear--;
  generateCalendar(curMonth, curYear);
};
document.getElementById('next-month').onclick = () => {
  curMonth = (curMonth +1) % 12;
  if (curMonth === 0) curYear++;
  generateCalendar(curMonth, curYear);
};

// time slots
document.querySelectorAll('.time-slot').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time-slot').forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// add guest
let guestCount = 0;
document.getElementById('add-guest').addEventListener('click', () => {
  guestCount++;
  const div = document.createElement('div');
  div.classList.add('guest-field');
  div.innerHTML = `
    <label>
      Guest ${guestCount}:
      <input type="text" name="guest${guestCount}" placeholder="Enter guest name">
    </label>`;
  document.getElementById('guests').appendChild(div);
});

// init
document.addEventListener('DOMContentLoaded', () => {
  generateCalendar(curMonth, curYear);
});
