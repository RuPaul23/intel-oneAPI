var homeButton = document.getElementById("homeButton");
if (homeButton) {
  homeButton.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='empowerEducationWith']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var aboutUs = document.getElementById("aboutUs");
if (aboutUs) {
  aboutUs.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var contactButton = document.getElementById("contactButton");
if (contactButton) {
  contactButton.addEventListener("click", function (e) {
    window.location.href = "./contact.html";
  });
}

var signIn = document.getElementById("signIn");
if (signIn) {
  signIn.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var inputData = document.getElementById("inputData");
if (inputData) {
  inputData.addEventListener("click", function (e) {
    window.location.href = "./input-data.html";
  });
}

var analysisData = document.getElementById("analysisData");
if (analysisData) {
  analysisData.addEventListener("click", function (e) {
    window.location.href = "./input-data.html";
  });
}

var groupContainer = document.getElementById("groupContainer");
if (groupContainer) {
  groupContainer.addEventListener("click", function (e) {
    window.location.href = "./input-data.html";
  });
}

var group2Button = document.getElementById("group2Button");
if (group2Button) {
  group2Button.addEventListener("click", function (e) {
    window.location.href = "./input-data.html";
  });
}

var group6Button = document.getElementById("group6Button");
if (group6Button) {
  group6Button.addEventListener("click", function (e) {
    window.location.href = "./sign-in.html";
  });
}
