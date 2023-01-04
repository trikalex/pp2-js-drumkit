let audioPath =[
    {
        'kick': new Audio('assets/audio/kit1/kick1.wav');
        'snare': new Audio('assets/audio/kit1/snare1.wav');
        'perc': new Audio('assets/audio/kit1/perc1.wav');
        'hihat': new Audio('assets/audio/kit1/hihat1.wav');
        'crash': new Audio('assets/audio/kit1/crash1.wav');
    },
    {
        'kick': new Audio('assets/audio/kit2/kick2.wav');
        'snare': new Audio('assets/audio/kit2/snare2.wav');
        'perc': new Audio('assets/audio/kit2/perc2.wav');
        'hihat': new Audio('assets/audio/kit2/hihat2.wav');
        'crash': new Audio('assets/audio/kit2/crash2.wav');
    },
    {
        'kick': new Audio('assets/audio/kit3/kick3.wav');
        'snare': new Audio('assets/audio/kit3/snare3.wav');
        'perc': new Audio('assets/audio/kit3/perc3.wav');
        'hihat': new Audio('assets/audio/kit3/hihat3.wav');
        'crash': new Audio('assets/audio/kit3/crash3.wav');
    },
    {
        'kick': new Audio('assets/audio/kit4/kick4.wav');
        'snare': new Audio('assets/audio/kit4/snare4.wav');
        'perc': new Audio('assets/audio/kit4/perc4.wav');
        'hihat': new Audio('assets/audio/kit4/hihat4.wav');
        'crash': new Audio('assets/audio/kit4/crash4.wav');
    },
];
let kits = ['kick', 'snare', 'perc', 'hihat', 'crash'];
let btnEl = document.getElementsByClassName('btn');

let kitSelect = document.querySelectorAll('select[id="kitsel"]');
kitSelect.forEach(select => {
    select.addEventListener('change', changeDrumKit);
});
console.log(kitSelect);