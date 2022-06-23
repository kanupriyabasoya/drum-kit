function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`section[data-key="${e.keyCode}"]`);

if(!audio) return;//stop the function running altogether

key.classList.add('playing');//aading playing to increase size of content
audio.currentTime = 0;//to keep playing the audio the no. of times we press key(rewind to the start)
audio.play();//to play audio

}
function transformFunc(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}//to remove the tranform property after playing 
const keys= document.querySelectorAll('.key');
keys.forEach(element => {
    element.addEventListener('transitionend',transformFunc);
});//adding trasitionend event listener to keys that will  be transitioned or trasfromed to be precise in this project
window.addEventListener('keydown',playSound);



