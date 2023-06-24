const questionCont = document.querySelector('.question-center');
const questions = document.querySelectorAll('.question');


questionCont.addEventListener('click', displayActiveQuestion);

function displayActiveQuestion(e) {
  const activeQuestion = e.target.closest('.question');
  if (!activeQuestion) return;
  if (activeQuestion.classList.contains('active')) {
    activeQuestion.classList.remove('active');
    return;
  }
  questions.forEach((question) => question.classList.remove('active'));
  activeQuestion.classList.add('active');
}

window.addEventListener('resize', (e) => {
  const minWidth = 950;
  if (window.innerWidth < minWidth) return;
  if (window.innerWidth >= minWidth) {
    if (!sidebar.classList.contains('show')) return;
    sidebar.classList.remove('show');
  }
});
