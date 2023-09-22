// read more functionality
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



