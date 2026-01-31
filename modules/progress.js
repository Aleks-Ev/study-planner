export function initProgress() {
  const container = document.getElementById("progress");

  container.innerHTML = `
    <h2>Progress</h2>
    <div id="progressText">0%</div>
    <progress id="bar" value="0" max="100"></progress>
  `;

  function update() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.length === 0) {
      container.querySelector("#progressText").textContent = "No tasks yet";
      container.querySelector("#bar").value = 0;
      return;
    }

    const done = tasks.filter(t => t.done).length;
    const percent = Math.round((done / tasks.length) * 100);

    container.querySelector("#progressText").textContent =
      `${done}/${tasks.length} completed (${percent}%)`;
    container.querySelector("#bar").value = percent;
  }

  document.addEventListener("tasksUpdated", update);
  update();
}
