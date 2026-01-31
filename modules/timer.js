export function initTimer() {
  const container = document.getElementById("timer");

  container.innerHTML = `
    <h2>Study Timer</h2>
    <div id="time">25:00</div>
    <button id="start">Start</button>
    <button id="reset">Reset</button>
  `;

  let time = 25 * 60;
  let interval = null;

  const display = container.querySelector("#time");

  function saveSession(seconds) {
    const history = JSON.parse(localStorage.getItem("studyHistory")) || [];
    history.push({
      date: new Date().toISOString(),
      duration: seconds
    });
    localStorage.setItem("studyHistory", JSON.stringify(history));
  }

  function update() {
    const m = Math.floor(time / 60);
    const s = time % 60;
    display.textContent = `${m}:${s.toString().padStart(2, "0")}`;
  }

  container.querySelector("#start").onclick = () => {
    if (interval) return;
    interval = setInterval(() => {
      time--;
      update();

      if (time <= 0) {
        clearInterval(interval);
        interval = null;

        saveSession(25 * 60); // ✅ THIS WAS MISSING

        alert("Session completed!");
        time = 25 * 60;
        update();
      }
    }, 1000);
  };

  container.querySelector("#reset").onclick = () => {
    clearInterval(interval);
    interval = null;
    time = 25 * 60;
    update();
  };

  update();
}
