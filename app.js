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



    