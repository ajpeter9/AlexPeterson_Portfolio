import './style.css';

document.getElementById("buttons1")?.addEventListener("click", () => showView("id1"));
document.getElementById("buttons2")?.addEventListener("click", () => showView("id2"));
document.getElementById("buttons3")?.addEventListener("click", () => showView("id3"));

function showView(activeId) {
  ["id1", "id2", "id3"].forEach(id => {
    document.getElementById(id).classList.toggle("hidden", id !== activeId);
  });
  ["buttons1", "buttons2", "buttons3"].forEach(id => {
    document.getElementById(id).classList.toggle("bg-green-700", id === `buttons${activeId.slice(-1)}`);
  });
}