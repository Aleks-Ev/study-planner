export function initNotifications() {
  const container = document.getElementById("notifications");

  container.innerHTML = `
    <h2>Notifications</h2>
    <button id="notify">Test Notification</button>
    <p id="notifyStatus"></p>
  `;

  const status = container.querySelector("#notifyStatus");

  function sendNotification(title, body) {
    if (!("Notification" in window)) {
      alert("Notifications not supported");
      return;
    }

    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(title, { body });
        status.textContent = "Notification sent";
      } else {
        status.textContent = "Notification permission denied";
      }
    });
  }

  // 🔔 Test notification (your original logic)
  container.querySelector("#notify").onclick = () => {
    sendNotification("Study Planner", "Time to study!");
  };

  // 🔔 Auto task-deadline notification (NEW)
  let notifiedToday = false;

  setInterval(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Align with your calendar (Mon = 0)
    const today = (new Date().getDay() + 6) % 7;

    if (notifiedToday) return;

    const dueToday = tasks.filter(
      t => !t.done && t.date !== null && Number(t.date) === today
    );

    if (dueToday.length > 0) {
      sendNotification(
        "Tasks due today",
        `You have ${dueToday.length} task(s) scheduled for today`
      );
      notifiedToday = true;
    }
  }, 60000); // check every minute
}
