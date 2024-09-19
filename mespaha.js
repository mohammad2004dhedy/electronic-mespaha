let countBox = document.getElementById("countBox");
let click = document.getElementById("click");
let tasfer = document.getElementById("tasfer");
let counter ;
if (localStorage.counter == null) {
  counter = 0;
} else {
  counter = JSON.parse(localStorage.counter);
}
countBox.innerHTML = counter;

click.onclick = function () {
  counter += 1;
  countBox.innerHTML = counter;
  localStorage.setItem("counter", counter);
};
tasfer.onclick = () => {
  counter = 0;
  localStorage.counter = 0;
  countBox.innerHTML = "0";
};
