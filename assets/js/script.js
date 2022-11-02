var timer;
var time = document.getElementById("timer");

(function () {
  var count = 30;
  timer = setInterval(() => {
    time.innerHTML = "00:" + count;
    count--;
  }, 1000);
});
