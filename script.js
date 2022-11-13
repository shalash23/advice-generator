const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".icon-container");

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
