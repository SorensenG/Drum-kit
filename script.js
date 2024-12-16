const butona = document.getElementById('A');
const butons = document.getElementById('S');
const butond = document.getElementById('D');
const butonf = document.getElementById('F');
const butong = document.getElementById('G');
const butonh = document.getElementById('H');
const butonj = document.getElementById('J');
const butonk = document.getElementById('K');
const butonl = document.getElementById('L');

const buttons = [butona, butons, butond, butonf, butong, butonh, butonj, butonk, butonl];
const sons = {
    'a': 'boom.wav',
    's': 'clap.wav',
    'd': 'hihat.wav',
    'f': 'kick.wav',
    'g': 'openhat.wav',
    'h': 'ride.wav',
    'j': 'snare.wav',
    'k': 'tink.wav',
    'l': 'tom.wav',
};

function recordKey(event) {
    const teclaPressionada = event.key; 

    if (['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].includes(teclaPressionada)) {
        const audio = new Audio(`sounds/${sons[teclaPressionada]}`);
        audio.play();
        buttons.forEach((button)=>{
            button.classList.remove('play')});

        switch (teclaPressionada) {
            case 'a':
                butona.classList.add('play');
                break;
            case 's':
                butons.classList.add('play');
                break;
            case 'd':
                butond.classList.add('play');
                break;
            case 'f':
                butonf.classList.add('play');
                break;
            case 'g':
                butong.classList.add('play');
                break;
            case 'h':
                butonh.classList.add('play');
                break;
            case 'j':
                butonj.classList.add('play');
                break;
            case 'k':
                butonk.classList.add('play');
                break;
            case 'l':
                butonl.classList.add('play');
                break;
        }
    }
}
function recordClic(tecla) {
    const audio = new Audio(`sounds/${sons[tecla]}`);
    audio.play();
    buttons.forEach(button => button.classList.remove('play'));
    document.getElementById(tecla.toUpperCase()).classList.add('play');
}
