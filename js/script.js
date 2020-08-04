// const { help } = require("yargs");

function toggleGallery() {
  let showHideBtn = Array.from(
    document.getElementById("toggle-gallery").getElementsByTagName("span")
  );
  console.log(showHideBtn);
  showHideBtn.forEach((e) => {
    e.classList.toggle("hidden");
  });
}

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
