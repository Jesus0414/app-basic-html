
const buttons = document.querySelectorAll('button');

let playNote = event => {
    console.log(event.target)
    const button = event.target;
    const note = button.dataset.note;
    console.log(`audio${note}`);
    const audio = document.getElementById(`audio${note}`);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}
 
buttons.forEach(
    button => button.addEventListener('click', playNote)
);


/*const playnote = event =>{
    console.log(event.target.dataset.note);
}

buttons.forEach(
    button => button.addEventListener('click', playnote)
)*/