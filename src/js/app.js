// 1
// function displayTime() {
//   let dateTime = new Date();
//   let hrs = dateTime.getHours();
//   let min = dateTime.getMinutes();
//   let sec = dateTime.getSeconds();
//   let sess = "AM";

//   if (hrs > 12) {
//     sess = "PM";
//   }

//   hrs = hrs < 10 ? "0" + hrs : hrs;
//   min = min < 10 ? "0" + min : min;
//   sec = sec < 10 ? "0" + sec : sec;

//   let time = hrs + ":" + min + ":" + sec + " " + sess;

//   document.getElementById("clock").innerText = time;
//   let t = setTimeout(function () {
//     displayTime();
//   }, 1000);
// }
// displayTime();

function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let sess = document.getElementById("sess");

  if (hrs >= 12) {
    sess.innerHTML = "PM";
  } else {
    sess.innerHTML = "AM";
  }

  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("hrs").innerHTML = hrs;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}
setInterval(displayTime, 10);

//2
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;
let nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
  curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

nextSlide = document.querySelector(".btn-next");
curSlide = 0;
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const dots = document.querySelectorAll(".dot");

const activeDot = (n) => {
  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
};

dots.forEach((item, indexDot) => {
  item.addEventListener("click", () => {
    index = indexDot;
    currentSlideIndex(index);
  });
});

function setInt() {
  timeId = setInterval(nextSlide, 1500);
}
setInt();

function removeInt() {
  if (timeId) {
    clearInterval(timeId);
    timeId = null;
  }
}

const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", removeInt);
slider.addEventListener("mouseleave", setInt);
