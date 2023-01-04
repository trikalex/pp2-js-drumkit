// let kits = document.getElementById('kitsel');

// let drumsEl = document.querySelector('.drums');
let btnEl = document.getElementsByClassName('btn');



function addAudioToButtons() {
    let audioEl = document.createElement('audio');
    document.getElementsByClassName('drums').appendChild(audioEl);
    // btnEl.appendChild(audioEl);
}
    

let kitSelect = document.querySelectorAll('select[id="kitsel"]');
kitSelect.forEach(select => {
    select.addEventListener('change', changeDrumKit);
});

function changeDrumKit(e) {
    
    let opt = e.target.selectedOptions.value;

    if (opt.includes('kit1')) {
        audioEl.src = 'assets/audio/kit1/' + kit + '1.wav';
    }
    else if (opt.includes('kit2')) {
        audioEl.src = 'assets/audio/kit1/' + kit + '2.wav';
    }
    else if (opt.includes('kit3')) {
        audioEl.src = 'assets/audio/kit1/' + kit + '3.wav';
    }
    else if (opt.includes('kit4')) {
        audioEl.src = 'assets/audio/kit1/' + kit + '4.wav';
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

// console.log(drumsEl);
// console.log(audioEl);