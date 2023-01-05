let kits = ['kick', 'snare', 'perc', 'hihat', 'crash'];

// let drumsEl = document.querySelector('.drums');
let btnEl = document.getElementsByClassName('btn');


let kitSelect = document.querySelectorAll('select[id="kitsel"]');
kitSelect.forEach(select => {
    select.addEventListener('change', changeDrumKit);
});

function changeDrumKit(e) {
    // let audioEl = document.createElement('audio');
    let opt = e.target.selectedOptions[0].value;
    console.log(opt);
    if (opt.includes('kit1')) {
        audioEl.src = 'assets/audio/kit1/' + kits + '1.wav';
    }
    else if (opt.includes('kit2')) {
        audioEl.src = 'assets/audio/kit2/' + kits + '2.wav';
    }
    else if (opt.includes('kit3')) {
        audioEl.src = 'assets/audio/kit3/' + kits + '3.wav';
    }
    else if (opt.includes('kit4')) {
        audioEl.src = 'assets/audio/kit4/' + kits + '4.wav';
    }

    btnEl.addEventListener('click', ()=>{
        audioEl.play();
    });



//     // window.addEventListener('keydown', (event)=>{
//     //     if (event.key === ) {
//     //         audioEl.play();
//     //         btnEl.style.transform ='scale(.9)';
//     //         setTimeout(()=>{btnEl.style.transform = 'scale(1)';},);
//     //     };
//     // });

};

function addAudioToButtons() {
    document.getElementsByClassName('btn').appendChild(audioEl);
    
};

console.log(btnEl);
// console.log(audioEl);