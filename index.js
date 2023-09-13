// rating functionality

const ratings = {
  doc1: 3.1,
  doc2: 4.7,
  doc3: 2.5,
  doc4: 1.9,
  doc5: 4.2,
  doc6: 0.6,
};

// generate stars according to the rating
function renderStarRating(rating, ratingCard) {
  const starContainer = document.querySelector(`.${ratingCard} .rating .stars`);
  starContainer.innerHTML = "";

  const colorPercentage = Math.round((rating % 1) * 100).toString();
  const grayPercentage = (100 - Number(colorPercentage)).toString();

  let color = "";
  if (rating >= 4) color = "#14532D";
  else if (rating >= 3) color = "#166534";
  else if (rating >= 2) color = "#15803D";
  else if (rating >= 1) color = "#16A34A";
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

const starsTotal = 5;
document.addEventListener("DOMContentLoaded", getRatings);
function getRatings() {
  document.querySelector(
    `.doc1 .number-rating`
  ).innerHTML = `3.1`;
  renderStarRating(3.1, 'doc1');
}

// // ABOUT content - add three dots when overflowing
// const aboutTabContentAll = document.querySelectorAll(".aboutTab-content");
// aboutTabContentAll.forEach((each, index) => {
//   let rmBtn = document.querySelector("#aboutTab-rmBtn-" + index); //rmBtn: read more btn

//   if (each.scrollHeight > each.clientHeight) {
//     let computedStyle = window.getComputedStyle(each);
//     let lineHeight = computedStyle.lineHeight.replace("px", "");
//     let lines = Math.floor(each.clientHeight / lineHeight);

//     each.style.cssText = `display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: ${lines};`;
//     rmBtn.classList.remove("hidden");
//   }
// });

let readMoreBtn = document.querySelector("#aboutTab-rmBtn-0");
let content = document.querySelector(".content");
let aboutContent = document.querySelector(".about-content");
let readMoreParent = document.querySelector("#readMore-parent");

// readMoreBtn.addEventListener("click", () => {
//   if (readMoreBtn.innerText === "Read More") {
//     content.classList.remove("max-h-[120px]");
//     content.style.maxHeight = "500px";
//     content.style.paddingBottom = "40px";
    // readMoreBtn.innerText = "Read Less";
    // readMoreParent.classList.remove("right-0", "w-[100%]", "sm:w-[55%]");
    // readMoreParent.classList.add("left-0");
//   } else {
//     content.style.maxHeight = "120px";
//     content.classList.add("max-h-[120px]");
//     content.style.paddingBottom = "0px";
    // readMoreBtn.innerText = "Read More";
    // readMoreParent.classList.add("right-0", "w-[100%]", "sm:w-[55%]");
    // readMoreParent.classList.remove("left-0");
//   }
// });

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
