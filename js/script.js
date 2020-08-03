const { help } = require("yargs");

function toggleGallery() {
  let showHideBtn = Array.from(
    document.getElementById("toggle-gallery").getElementsByTagName("span")
  );
  console.log(showHideBtn);
  showHideBtn.forEach((e) => {
    e.classList.toggle("hidden");
  });
}
