const detailsBTN = document.getElementById('details-btn');
const backBTN = document.getElementById('back-btn');
const clubContent = document.querySelector('.club-content');
const clubDetails = document.querySelector('.club-content-details');

function showDetails() {
    clubContent.classList.add('fadeOut');
    clubContent.classList.remove('fadeIn');
    setTimeout(function () {
        clubContent.classList.add('hidden-d');
        clubContent.classList.remove('fadeOut');
    }, 500);

    setTimeout(function () {
        clubDetails.classList.remove('hidden-d');
        clubDetails.classList.add('fadeIn');
    }, 500);
};

function hidenDetails() {
    clubDetails.classList.add('fadeOut');
    clubDetails.classList.remove('fadeIn');
    setTimeout(function () {
        clubDetails.classList.add('hidden-d');
        clubDetails.classList.remove('fadeOut');
    }, 500);

    setTimeout(function () {
        clubContent.classList.remove('hidden-d');
        clubContent.classList.add('fadeIn');
    }, 500);
};

detailsBTN.addEventListener('click', showDetails);
backBTN.addEventListener('click', hidenDetails);