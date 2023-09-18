const detailsBTN = document.getElementById('details-btn');
const backBTN = document.getElementById('back-btn');
const clubContent = document.querySelector('.club-content');
const clubDetails = document.querySelector('.club-content-details');

function showDetails() {
    clubContent.classList.add('hidden-d');
    clubDetails.classList.remove('hidden-d');
    console.log('click');
};

function hidenDetails() {
    clubDetails.classList.add('hidden-d');
    clubContent.classList.remove('hidden-d');
    console.log('clock');
};

detailsBTN.addEventListener('click', showDetails);
backBTN.addEventListener('click', hidenDetails);