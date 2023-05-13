const faqQuestions = document.querySelectorAll(".faq_question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const faqAnswer = question.nextElementSibling;
            const allOtherAnswers = document.querySelectorAll(".faq_answer");

            allOtherAnswers.forEach(answer => {
                if (answer !== faqAnswer) {
                    answer.style.display = "none";
                }
            });

            faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
        });
    });

    const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('nav')
    mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
})



    