const correctAnswers = ["B", "A", "C", "A", "B"];
const form = document.querySelector("form");
const quizResult = document.querySelector(".quiz-results");
const scoreSection = document.querySelector('span')
const maxScore = correctAnswers.length;

form.addEventListener("submit", (event) => {
  debugger;
  event.preventDefault();
  let userAnswers = [
    form.capitalCity.value,
    form.winner.value,
    form.president.value,
    form.distance.value,
    form.person.value,
  ];
  let userScore = userAnswers.filter(
    (answer, index) => correctAnswers[index] === answer
  ).length;
  const percentage = userScore / maxScore * 100
  quizResult.classList.remove("hidden")
  animatedSore(percentage)
  window.scroll(0, 0);
  form.reset();
});


const animatedSore = (percentage) => {
    let counter = 0
    const interval = setInterval(()=> {
        scoreSection.textContent = ` ${counter}% `
        if (counter >= percentage) clearInterval(interval)
        counter++
    }, 50);
}




