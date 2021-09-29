function slider(input, index) {
  sliderIndex = index;
  const item = document.querySelector(`#${input}`);
  const slideArr = [...document.querySelector(".slides").children];
  slideArr.forEach((element) => element.classList.remove("active"));
  item.classList.add("active");
}

let slideIndex = 1;
setInterval(() => {
  slideIndex++;
  if (slideIndex === 3) slideIndex = 1;
  slider(`slide${slideIndex}`, slideIndex);
}, 2000);
