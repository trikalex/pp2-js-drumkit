let kits = document.getElementById('kitsel').innerText;
let drumsEl = document.querySelector('.drums');
let btnEl = document.getElementsByClassName('btn');
let audioEl = document.createElement('audio');



function changeDrumKit() {
    if (kits === 'kit/kit1') {
        audioEl.src = 'assets/audio/kit1/' + kit + '1.wav';
    }
    else if (kits === 'kit/kit2') {
        audioEl.src = 'assets/audio/kit1/' + kit + '2.wav';
    }
    else if (kits.values === 'kit/kit3') {
        audioEl.src = 'assets/audio/kit1/' + kit + '3.wav';
    }
    else if (kits.values === 'kit/kit4') {
        audioEl.src = 'assets/audio/kit1/' + kit + '4.wav';
    }

    drumsEl.appendChild(btnEl);
    drumsEl.appendChild(audioEl);

    btnEl.addEventListener('click', ()=>{
        audioEl.play();
    });
    // window.addEventListener('keydown', (event)=>{
    //     if (event.key === ) {
    //         audioEl.play();
    //         btnEl.style.transform ='scale(.9)';
    //         setTimeout(()=>{btnEl.style.transform = 'scale(1)';},);
    //     };
    // });
};

console.log(kits);