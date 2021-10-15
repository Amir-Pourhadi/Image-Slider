function slider(input) {
  const item = document.querySelector(`#${input}`);
  const slideArr = [...document.querySelector(".slides").children];
  slideArr.forEach((element) => element.classList.remove("active"));
  item.classList.add("active");
}

let slideIndex = 1;
setInterval(() => {
  slideIndex++;
  if (slideIndex === 4) slideIndex = 1;
  slider(`slide${slideIndex}`);
}, 2000);
