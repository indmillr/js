// Traversing the DOM (Solution 1)
// Select element and find Parent elements to identify btn location

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });




// Using Selectors inside the Element (Solution 2)

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    // inside 'question' element, look for the 'question button' within 
    const btn = question.querySelector(".question-btn");
    // on each click, check for 'show-text' to close any question already open
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
          if (item !== question) {
            item.classList.remove('show-text');
          }
        });

        question.classList.toggle('show-text');
    });
});