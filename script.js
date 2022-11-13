const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".icon-container");
const svgDesktop = document.querySelector(".seperator-desktop");
const svgMobile = document.querySelector(".seperator-mobile");

const getAdvice = async function () {
  const response = await fetch("https://api.adviceslip.com/advice");
  const responseJson = await response.json();
  const { id, advice } = responseJson.slip;
  return [id, advice];
};

btn.addEventListener("click", async () => {
  const data = await getAdvice();
  const [id, advices] = data;
  adviceNumber.textContent = `Advice #${id}`;
  advice.textContent = `${advices}`;
});

const doit = () => {
  const fn = () => {
    if (window.innerWidth >= 578) {
      svgMobile.classList.add("hidden");
      svgDesktop.classList.remove("hidden");
    }
    if (window.innerWidth <= 578) {
      svgMobile.classList.remove("hidden");
      svgDesktop.classList.add("hidden");
    }
  };
  fn();
  window.addEventListener("resize", fn);
};
doit();
