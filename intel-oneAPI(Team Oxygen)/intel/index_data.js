var homeText = document.getElementById("homeText");
      if (homeText) {
        homeText.addEventListener("click", function (e) {
          window.location.href = "/";
        });
      }

      var aboutUsText = document.getElementById("aboutUsText");
      if (aboutUsText) {
        aboutUsText.addEventListener("click", function (e) {
          window.location.href = "./contact.html";
        });
      }

      var contactText = document.getElementById("contactText");
      if (contactText) {
        contactText.addEventListener("click", function (e) {
          window.location.href = "./contact.html";
        });
      }

      var signInText = document.getElementById("signInText");
      if (signInText) {
        signInText.addEventListener("click", function (e) {
          window.location.href = "./sign-in.html";
        });
      }

      var inputDataText = document.getElementById("inputDataText");
      if (inputDataText) {
        inputDataText.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='inputDataText']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }

      var analysisDataText = document.getElementById("analysisDataText");
      if (analysisDataText) {
        analysisDataText.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='rectangle']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }