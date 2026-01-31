export function initCalendar() {
  const container = document.getElementById("calendar");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  container.innerHTML = `
    <h2>Calendar</h2>
    <div class="calendar-grid">
      ${days.map(d => `<div class="day"><strong>${d}</strong></div>`).join("")}
    </div>
  `;
}
