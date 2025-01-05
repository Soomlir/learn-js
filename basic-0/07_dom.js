const heading = document.getElementById("hello");
const heading2 = document.getElementsByTagName("h2");
const _heading2 = document.getElementsByClassName("h2");
const __heading2 = document.querySelector(".heading");
console.log(heading);

heading.textContent = "Changed from JS";
heading.style.backgroundColor = "yellow";
heading.style.color = "lime";

// mdn event
heading.onclick = function () {
  console.log("Ok");
};

heading2[0].addEventListener("click", () => {
  console.log("Clicked!");
});
