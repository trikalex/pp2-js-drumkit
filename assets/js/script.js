let kits = ['kick', 'snare', 'perc', 'hihat', 'crash'];
let drumsEl = document.querySelector('.drums');

kits.forEach((kit) => {
    let btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText = kit;
    drumsEl.appendChild(btnEl);

    let audioEl = document.createElement('audio');
    audioEl.src = 'assets/audio/kit1/' + kit + '1.wav';
    drumsEl.appendChild(audioEl);
    btnEl.addEventListener('click', ()=>{
        audioEl.play();
    })
    window.addEventListener('keydown', (event)=>{
        if(event.key = );
    })
});