export let selectedDate = null;

export function initCalendar() {
  const container = document.getElementById("calendar");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  container.innerHTML = `
    <h2>Calendar</h2>
    <div class="calendar-grid">
      ${days.map((d, i) =>
        `<div class="day" data-day="${i}"><strong>${d}</strong></div>`
      ).join("")}
    </div>
    <p id="selectedDate">No day selected</p>
  `;

  container.querySelectorAll(".day").forEach(day => {
    day.onclick = () => {
      container.querySelectorAll(".day").forEach(d => d.classList.remove("active"));
      day.classList.add("active");

      selectedDate = day.dataset.day;
      container.querySelector("#selectedDate").textContent =
        `Selected day: ${days[selectedDate]}`;

      document.dispatchEvent(new Event("dateSelected"));
    };
  });
}
