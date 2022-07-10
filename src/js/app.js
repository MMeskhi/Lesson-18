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
