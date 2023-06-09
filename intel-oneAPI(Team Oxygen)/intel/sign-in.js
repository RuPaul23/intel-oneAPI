var homeText = document.getElementById("homeText");
if (homeText) {
  homeText.addEventListener("click", function (e) {
    window.location.href = "/";
  });
}

var signInText = document.getElementById("signInText");
if (signInText) {
  signInText.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var inputDataText = document.getElementById("inputDataText");
if (inputDataText) {
  inputDataText.addEventListener("click", function (e) {
    window.location.href = "./input-data.html";
  });
}

var analysisDataText = document.getElementById("analysisDataText");
if (analysisDataText) {
  analysisDataText.addEventListener("click", function (e) {
    window.location.href = "./input-data.html";
  });
}
