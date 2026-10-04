// Exercise 11: JavaScript answers for Sara's personal page
window.onload = function () {

  // 1. Greeting
  var hour = new Date().getHours();
  var greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  document.getElementById("greeting").innerHTML = greeting;

  // 2. Dark mode button
  document.getElementById("themeBtn").addEventListener("click", function () {
    document.body.classList.toggle("dark");
  });

  // 3. Simple form check
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("fullname").value;
    if (name === "") {
      document.getElementById("nameMsg").innerHTML = "Please enter your name";
    } else {
      document.getElementById("nameMsg").innerHTML = "Thank you!";
    }
  });
};