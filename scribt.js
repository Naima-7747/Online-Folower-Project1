// ===== SLIDER =====
const track = document.querySelector(".folower-track");
const leftBtn = document.getElementById("folower-left");
const rightBtn = document.getElementById("folower-right");

let index = 0;
const cardWidth = 270;

rightBtn.addEventListener("click", () => {
  index++;
  if (index > track.children.length - 1) index = 0;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

leftBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = track.children.length - 1;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});

// ===== SELECT FILL =====
const select = document.getElementById("folower-select");

document.querySelectorAll(".folower-card h4").forEach(item => {
  const option = document.createElement("option");
  option.value = item.textContent;
  option.textContent = item.textContent;
  select.appendChild(option);
});

// ===== FORM =====
const form = document.getElementById("folower-form");
const list = document.getElementById("folower-list");
const msg = document.getElementById("folower-message");

const nameInput = document.getElementById("folower-name");
const numberInput = document.getElementById("folower-number");
const phoneInput = document.getElementById("folower-phone");
const flowerSelect = document.getElementById("folower-select");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const number = numberInput.value.trim();
  const phone = phoneInput.value.trim();
  const flower = flowerSelect.value;

  if (!name || !number || !phone || !flower) {
    msg.style.color = "red";
    msg.textContent = "Fadlan buuxi dhammaan xogta!";
    return;
  }

  const li = document.createElement("li");
  li.textContent = `Magac: ${name} | Phone: ${phone} | Ubax: ${flower} | Qty: ${number}`;
  list.appendChild(li);

  msg.style.color = "green";
  msg.textContent = "Order waa la diiwaangeliyay ✔";

  form.reset();

  // ku celi home page
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== CLEAR =====
const clearBtn = document.getElementById("folower-clear");

clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  msg.textContent = "";
});
