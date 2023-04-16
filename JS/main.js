// Making Progress Bar
let scroller = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});

// Skill Progress Animation
let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog-bar");

window.addEventListener("scroll", function () {
  if (window.scrollY >= skillsSection.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});

// Stats Counting Animations
let statsSection = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .box p");
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      numbers.forEach((number) => counting(number));
    }
    started = true;
  }
});
function counting(number) {
  let count = setInterval(() => {
    number.textContent++;
    if (number.dataset.goal == number.textContent) {
      clearInterval(count);
    }
  }, 2000 / number.dataset.goal);
}

// Countdown Event Timer
let date = new Date("2024-1-1 00:00:00");

let counter = setInterval(() => {
  let dateNow = Date.now();
  let diff = date - dateNow;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days;
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours;
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML = minutes;
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML = seconds;
  if (diff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Scroll To Top Button
let scrollTop = document.querySelector(".scroll");

window.onscroll = function () {
  if (scrollY >= 1000) {
    scrollTop.classList.add("scroll-active");
  } else {
    scrollTop.classList.remove("scroll-active");
  }
};

scrollTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
