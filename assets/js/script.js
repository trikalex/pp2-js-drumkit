/* jshint esversion: 11 */

// Defining the audio path for each drum kit
let audioPath = [{
        'kick': new Audio('assets/audio/kit1/kick1.wav'),
        'snare': new Audio('assets/audio/kit1/snare1.wav'),
        'perc': new Audio('assets/audio/kit1/perc1.wav'),
        'hihat': new Audio('assets/audio/kit1/hihat1.wav'),
        'crash': new Audio('assets/audio/kit1/crash1.wav'),
    },
    {
        'kick': new Audio('assets/audio/kit2/kick2.wav'),
        'snare': new Audio('assets/audio/kit2/snare2.wav'),
        'perc': new Audio('assets/audio/kit2/perc2.wav'),
        'hihat': new Audio('assets/audio/kit2/hihat2.wav'),
        'crash': new Audio('assets/audio/kit2/crash2.wav'),
    },
    {
        'kick': new Audio('assets/audio/kit3/kick3.wav'),
        'snare': new Audio('assets/audio/kit3/snare3.wav'),
        'perc': new Audio('assets/audio/kit3/perc3.wav'),
        'hihat': new Audio('assets/audio/kit3/hihat3.wav'),
        'crash': new Audio('assets/audio/kit3/crash3.wav'),
    },
    {
        'kick': new Audio('assets/audio/kit4/kick4.wav'),
        'snare': new Audio('assets/audio/kit4/snare4.wav'),
        'perc': new Audio('assets/audio/kit4/perc4.wav'),
        'hihat': new Audio('assets/audio/kit4/hihat4.wav'),
        'crash': new Audio('assets/audio/kit4/crash4.wav'),
    },
];

// Creating variable to select the drum kit and load the selected one from the menu
let kitSelect = document.getElementById('kitsel');
kitSelect.addEventListener('change', changeDrumKit);
window.addEventListener('load', changeDrumKit);

let opt, keySound;
let audiokit = audioPath[0];
let btns = document.querySelectorAll('.btn');

function changeDrumKit(e) {
    if (e.target.nodeName != "SELECT") {
        opt = kitSelect.value;
    } else {
        opt = e.target.selectedOptions[0].value;
    }
    audiokit = audioPath[opt];
}

// Getting the drum pads/ buttons reactive to mouse clicks
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        playReact(btn);
    });
});

// Getting the drum pads/ buttons reactive to the keyboard keys
window.addEventListener('keydown', function (e) {
    let btn = this.document.querySelector(`button[data-key="${e.key}"]`);
    if (!btn) return; //stop fnction from running
    playReact(btn);
});

function playReact(btn) {
    keySound = btn.dataset.sound;
    audiokit[keySound].currentTime = 0;
    audiokit[keySound].play();
    btn.classList.add('active');
    setTimeout(() => {
        btn.classList.remove('active');
    }, 100);
}

// Modal for user guidance!

// Defining the variables
let modalContainer = document.getElementById('modal');
let openModalButtons = document.getElementById('modal-btn');
let closeModalButtons = document.getElementById('close');
let overlay = document.getElementById('overlay');

// Function to activate the Modal and the overlay
openModalButtons.addEventListener('click', () => {
    modalContainer.classList.add('active');
    overlay.classList.add('active');
});

// Function to remove the Modal and  the overlay
closeModalButtons.addEventListener('click', () => {
    modalContainer.classList.remove('active');
    overlay.classList.remove('active');
});

// Click anywhere on the overlay to close the Modal
overlay.addEventListener('click', () => {
    modalContainer.classList.remove('active');
    overlay.classList.remove('active');
});