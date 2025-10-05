// Event Filtering
function filterEvents(type) {
  let events = document.querySelectorAll(".event");
  events.forEach(ev => {
    if (type === "all" || ev.classList.contains(type)) {
      ev.style.display = "block";
    } else {
      ev.style.display = "none";
    }
  });
}

// FAQ Toggle
function toggleFAQ(element) {
  let answer = element.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
    element.innerHTML = element.innerHTML.replace("➖", "➕");
  } else {
    answer.style.display = "block";
    element.innerHTML = element.innerHTML.replace("➕", "➖");
  }
}
