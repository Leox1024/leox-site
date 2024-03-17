const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = e => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about" ?
  card.classList.add("is-active") :
  card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach(s => s.classList.remove("is-active"));
  buttons.forEach(b => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach(btn => {
  btn.addEventListener("click", handleButtonClick);
});



function btc() {
    var key = "bc1q7s2yhyru8yzy6873qyq9wnuxwgj950k2t9jhzq";

    navigator.clipboard.writeText(key);
    alert("Address copied to clipboard!");

}

function cpmail() {
  var key = "leonardo@leox.me";

  navigator.clipboard.writeText(key);
  alert("Email copied to clipboard!");

}