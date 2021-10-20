const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function () {
    // if(modalOverlay.classList.contains('open-modal')) {
    //     modalOverlay.classList.remove('open-modal');
    // }
    // else {
    //     modalOverlay.classList.add('open-modal');
    // }
    modalOverlay.classList.toggle('open-modal'); // This LOC replaces Lines 6-11
});

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
});