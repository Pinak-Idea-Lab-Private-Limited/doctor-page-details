
// close the modal on click of ESC button
let rModal = document.querySelector("#ratingInfo-modal");
document.addEventListener("keydown", (e) => {
  if (!rModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      ratingModalToggle("hide");
    }
  }
  if (!rModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      rModal.classList.add("hidden");
    }
  }
});

// rating modal show and hide
const ratingModalToggle = (state) => {
  let rModal = document.querySelector("#ratingInfo-modal");

  if (state === "show") {
    rModal.classList.remove("hidden");
  } else {
    rModal.classList.add("hidden");
  }
};