function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
setInterval( function() {
      var time = getSecondsSinceStartOfDay();
      console.log(time);

      var hours = time / 3600;

      if (hours > 12) {
          hours = Math.floor(hours - 12);
      }

      console.log("hours " + hours);
      hoursIncrement = 180 + (hours * 30);


      var minutes = Math.floor((time % 3600) / 60);

      console.log("minutes " + minutes);

      minutesIncrement = 180 + (minutes * 6);

      var seconds = time % 60;

      console.log("seconds " + seconds);

      secondsIncrement = (seconds * 6) + 180;


      document.querySelector('#hour').style.transform = "rotate(" + hoursIncrement + "deg)";
      document.querySelector('#minutes').style.transform = "rotate(" + minutesIncrement + "deg)";
      document.querySelector('#seconds').style.transform = "rotate(" + secondsIncrement + "deg)";
  }, 1000);
