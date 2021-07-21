// Evento que confere qual a tecla que foi presionada
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

// Função que verifica qual som para a apertada
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

// Verificando se existe o audio para tecla
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}