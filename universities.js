(function() {
  "use strict";

  var universities = [
    {
      city: "Iași",
      name: "Universitatea Al. Ioan Cuza",
      details: "Detalii despre Universitatea Al. Ioan Cuza [...] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      x: 415,
      y: 90,
      link: "http://www.uaic.ro/"
    },
    {
      city: "București",
      name: "Universitatea din București",
      details: "Detalii despre Universitatea din București [...] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      x: 350,
      y: 320,
      link: "http://www.unibuc.ro/"
    },
    {
      city: "Timișoara",
      name: "Universitatea de Vest",
      details: "Detalii despre Universitatea de Vest [...] Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      x: 65,
      y: 212,
      link: "http://www.uvt.ro/"
    }
  ];

  var country = document.getElementById("country");
  var bubble = document.getElementById("university-bubble");
  var bubbleCity = document.getElementById("university-city");
  var bubbleName = document.getElementById("university-name");
  var bubbleDetails = document.getElementById("university-details");
  var bubbleLink = document.getElementById("university-link");

  var minDistance = 30;
  var leftOffset = 10;
  var topOffset = 0;

  country.addEventListener("mousemove", function(e) {
    if (e.target != country) {
      return;
    }
    var countryBounds = country.getBoundingClientRect();
    var mouseX = e.clientX - countryBounds.left;
    var mouseY = e.clientY - countryBounds.top;
    console.log([mouseX, mouseY]);

    bubble.classList.add("hidden");

    universities.forEach(function(university) {
      if (distance([mouseX, mouseY], [university.x, university.y]) > minDistance) {
        return;
      }
      bubble.classList.remove("hidden");
      bubble.style.left = university.x + leftOffset + "px";
      bubble.style.top = university.y + topOffset + "px";
      bubbleCity.textContent = university.city;
      bubbleName.textContent = university.name;
      bubbleDetails.textContent = university.details;
      bubbleLink.href = university.link;
    });
  });
  country.addEventListener("click", function(e) {
    bubble.classList.add("hidden");
  });

  function distance(point1, point2) {
    var x = point2[0] - point1[0];
    var y = point2[1] - point1[1];
    return Math.sqrt(x * x + y * y);
  }
})();
