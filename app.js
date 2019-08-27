
const buttons = document.querySelectorAll('button');

const playnote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = `audio${note}`;
    //console.log(`audio${note}`);
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    console.log(audio);
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
)

const keyNoteDown = event =>{
    console.log(event);
    const key = event.key;
    console.log(key);
    const button = document.querySelector(`button[data-key="${key}"]`)
    if(button) button.click();

}

document.addEventListener('keydown', keyNoteDown);