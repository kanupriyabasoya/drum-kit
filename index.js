function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`section[data-key="${e.keyCode}"]`);

if(!audio) return;

key.classList.add('playing');//aading playing to increase size of content
audio.currentTime = 0;//to keep playing the audio the no. of times we press key
audio.play();//to play audio

}

window.addEventListener('keydown',playSound);


