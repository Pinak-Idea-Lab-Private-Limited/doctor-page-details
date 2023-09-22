// rating functionality
// generate stars according to the rating
function renderStarRating(rating, ratingCard) {
  const starContainer = ratingCard.querySelector('.rating .stars');
  starContainer.innerHTML = "";

  const colorPercentage = Math.round((rating % 1) * 100).toString();
  const grayPercentage = (100 - Number(colorPercentage)).toString();

  let color = "";
  if (rating >= 4) color = "#14532D";
  else if (rating >= 3) color = "#166534";
  else if (rating >= 2) color = "#15803D";
  else if (rating >= 1) color = "#16A34A";
  else if (rating >= 0) color = "#22C55E";
  else color = "#78716C";

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");

    if (rating >= i) {
      // star with fill color
      // star.classList.add("fa-star", "star-box");
      star.classList.add("fa-star", "star-box", "w-6", "h-6", "flex", "items-center", "content-center");
      star.style.background = `${color}`;
    } else if (i === Math.ceil(rating)) {
      // half fill color star
      // star.classList.add("fa-star", "star-box");
      star.classList.add("fa-star", "star-box", "w-6", "h-6", "flex", "items-center", "content-center");
      star.style.backgroundImage = `linear-gradient(to right, ${color} 0% ${colorPercentage}%, #78716C ${grayPercentage}% 100%)`;
    } else {
      // star without fill color
      star.classList.add("fa-star", "star-box", "w-6", "h-6", "flex", "items-center", "content-center");
      // star.classList.add("fa-star", "star-box");
      star.style.background = `#78716C`;
    }

    starContainer.appendChild(star);
  }
}

const ratingCards = document.querySelectorAll('[data-star-rating]');
document.addEventListener("DOMContentLoaded", getRatings);
function getRatings() {
  ratingCards.forEach(card => {
    // Access the card or modify its properties
    const numberRating = Number(card.getAttribute('data-star-rating'));
    // Call the star creating function
    renderStarRating(numberRating, card);
  });
}

let readMoreBtn = document.querySelector("#aboutTab-rmBtn-0");
let content = document.querySelector(".content");
let aboutContent = document.querySelector(".about-content");
let readMoreParent = document.querySelector("#readMore-parent");



readMoreBtn.addEventListener("click", () => {
  if (content.clientHeight > 120) {
    content.style.height = '120px';
    readMoreBtn.innerText = "Read More";
    readMoreParent.classList.add("right-0", "w-[100%]", "sm:w-[55%]");
    readMoreParent.classList.remove("left-0");
  } else {
    content.style.height = aboutContent.clientHeight + 25 + "px";
    readMoreBtn.innerText = "Read Less";
    readMoreParent.classList.remove("right-0", "w-[100%]", "sm:w-[55%]");
    readMoreParent.classList.add("left-0");
  }
});



const showAndHideModal = (state) => {
  let dcModal = document.querySelector("#dc-modal");
  let modalTitle = document.querySelector("#modalTitle");
  let modalContent = document.querySelector("#modalContent");

  if (state === "show") {
    modalTitle.innerText = document.querySelector("#about-header").innerText;

    modalContent.innerHTML = document.querySelector(".about-content").innerHTML;

    dcModal.classList.remove("hidden");
  } else {
    dcModal.classList.add("hidden");
  }
};

// close the modal on click of ESC button
let dcModal = document.querySelector("#dc-modal");
let rModal = document.querySelector("#ratingInfo-modal");
document.addEventListener("keydown", (e) => {
  if (!dcModal.classList.contains("hidden")) {
    if (e.key === "Escape") {
      showAndHideModal("hide");
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

// const testFn = () => {
//   console.log('Hello')
// }

// const ratingI = document.querySelector('#ratingI')

// ratingI.addEventListener('click', () => {
//   console.log("first")
// })
