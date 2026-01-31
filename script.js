import { initTimer } from "./modules/timer.js";
import { initTasks } from "./modules/tasks.js";
import { initProgress } from "./modules/progress.js";
import { initNotifications } from "./modules/notifications.js";
import { initCalendar } from "./modules/calendar.js";

// Tabs
const buttons = document.querySelectorAll("nav button");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(tab => tab.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// Initialize modules
initTimer();
initTasks();
initProgress();
initNotifications();
initCalendar();

