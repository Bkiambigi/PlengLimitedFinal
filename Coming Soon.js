// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2024 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.querySelector(".countdown").innerHTML = "We are live!";
  }
}, 1000);

document.getElementById('subscribe').addEventListener('click', function() {
  var email = document.getElementById('email').value;
  if (email) {
    alert('Thank you for subscribing! We will notify you when we launch.');
    document.getElementById('email').value = '';
  } else {
    alert('Please enter a valid email address.');
  }
});
