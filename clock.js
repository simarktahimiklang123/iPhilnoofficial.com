function clock() {
  //cash in dom objects
  var hour = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var second = document.getElementById('second');
  //get hours minutes seconds
  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  //assgning the hour into dom object
  hour.innerHTML = h;
  //assgning the minute into // //
  minute.innerHTML = m;
  //assgning the secnd into // //
  second.innerHTML = s;
}

var interval = setInterval(clock, 1000);