let kits = ['kick', 'snare', 'perc', 'hihat', 'crash'];
let btnEl = document.getElementsByClassName('btn');
let drumsEl = document.querySelector('.drums');


kits.forEach((kit) => {
    let audioEl = document.createElement('audio');
    btnEl.appendChild(audioEl);
})















// const drumsEl = document.querySelector('.drums');
// const btnEl = document.getElementsByClassName('btn');



// kits.forEach((kit) => {
    // let btnEl = document.createElement('button');
    // btnEl.classList.add('btn');
    // btnEl.innerText = kit;

    // drumsEl.appendChild(btnEl);
//     let audioEl = document.createElement('audio');
//     audioEl.src = 'assets/audio/kit1/' + kit + '1.wav';
//     drumsEl.appendChild(audioEl);
    
//     btnEl.addEventListener('click', ()=>{
//         audioEl.play();
//     })
//     window.addEventListener('keydown', (event)=>{
//         if (event.key === kit.slice(0, 1)) {
//             audioEl.play();
//             btnEl.style.transform ='scale(.9)';
//             setTimeout(()=>{btnEl.style.transform = 'scale(1)';},);
//         };
//     });
// });
