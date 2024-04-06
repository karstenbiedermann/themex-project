//
// datepicker
//

function handleDatepicker() {
  const constants = {
    visible: 'visible',
  };

  const datePicker = document.querySelector('.datepicker');
  const datePickerInput = document.querySelector('.datepicker-input');
  const calendar = document.querySelector('.datepicker-calendar');
  const calendarContainer = document.querySelector(
    '.datepicker-calendar-container',
  );
  const calendarMonth = document.querySelector('.datepicker-calendar-month');
  const prevMonthButton = document.querySelector('.datepicker-button--prev');
  const nextMonthButton = document.querySelector('.datepicker-button--next');
  const monthDisplay = document.querySelector('.datepicker-month');

  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let selectedDayElement;

  function listMonths(language) {
    return Array.from({ length: 12 }, (_, month) =>
      new Date(0, month).toLocaleString(language, { month: 'long' }),
    );
  }

  function createDatePicker(year, month) {
    currentYear = year;
    currentMonth = month;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = listMonths(calendar.dataset.language);

    calendarContainer.innerHTML = '';
    calendarMonth.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    monthDisplay.innerHTML = '';
    monthDisplay.textContent = monthNames[currentMonth] + ' ' + currentYear;

    const daysContainer = document.createElement('ul');
    daysContainer.classList.add('datepicker-calendar-days');

    Array.from({ length: daysInMonth }, (_, i) => i + 1).forEach((day) => {
      const dayElement = document.createElement('li');
      const dayElementSpan = document.createElement('span');
      dayElement.className = 'datepicker-calendar-day';
      dayElementSpan.textContent = day;

      if (
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        dayElement.classList.add(constants.visible);
        selectedDayElement = dayElement;
      }

      dayElement.addEventListener('click', () =>
        selectDate(year, month, day, dayElement),
      );
      dayElement.appendChild(dayElementSpan);
      daysContainer.appendChild(dayElement);
    });

    calendarContainer.appendChild(daysContainer);
  }

  function selectDate(year, month, day, dayElement) {
    if (selectedDayElement) {
      selectedDayElement.classList.remove(constants.visible);
    }
    const selectedDate = new Date(year, month, day);
    datePickerInput.value = selectedDate.toLocaleDateString(
      calendar.dataset.language,
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      },
    );
    dayElement.classList.add(constants.visible);
    selectedDayElement = dayElement;
    calendar.classList.remove(constants.visible);
  }

  if (datePicker) {
    datePickerInput.addEventListener('click', () => {
      calendar.classList.toggle(constants.visible);
    });

    prevMonthButton.addEventListener('click', () => {
      if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
      } else {
        currentMonth--;
      }
      createDatePicker(currentYear, currentMonth);
    });

    nextMonthButton.addEventListener('click', () => {
      if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
      } else {
        currentMonth++;
      }
      createDatePicker(currentYear, currentMonth);
    });

    createDatePicker(currentYear, currentMonth);
  }
}

document.addEventListener('DOMContentLoaded', handleDatepicker);

export { handleDatepicker };
