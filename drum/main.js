document.addEventListener('DOMContentLoaded', appStart)
let btnMusic = document.querySelectorAll('.btn-music')

const sound = {
    97: "boom",
    115: "clap",
    100: "hihat",
    102: "kick",
    103: "openhat",
    104: "ride",
    106: "snare",
    107: "tink",
    108: "tom",
}


const channel1 = []
const channel2 = []
const channel3 = []
const channel4 = []

let numberOfChannel = 1;

let isRec = false
let recStartTime = 0

function appStart() {
    window.addEventListener('keypress', playSoundChar)
    document.querySelector('#rec').addEventListener('click', recAudio)
    document.querySelector('#play').addEventListener('click', playAudio)
    document.querySelectorAll('input[name=channel]').forEach(chann => {
        chann.addEventListener('click', e => {
            switch (e.target.value) {
                case 'ch1':
                    numberOfChannel = 1;
                    break;
                case 'ch2':
                    numberOfChannel = 2;
                    break;
                case 'ch3':
                    numberOfChannel = 3;
                    break;
                case 'ch4':
                    numberOfChannel = 4;
                    break;
                default:
                    break;
            }
        })
    });
    document.querySelectorAll('.btn-music').forEach(btn => {
        btn.addEventListener('click', e => {
            playSound(e.target.value)
        })
    })
}
const playSound = e => {
    const audioDOM = document.querySelector(`#${e}`)
    audioDOM.currentTime = 0
    audioDOM.play()

    if (isRec) {
        getChannel({
            name: e,
            time: Date.now() - recStartTime
        })
    }
}
function playSoundChar(e) {
    if (!sound[e.charCode]) {
        return
    }
    const soundName = sound[e.charCode]
    playSound(soundName);
}

function getChannel(object) {
    switch (numberOfChannel) {
        case 1:
            channel1.push(object);
            break;
        case 2:
            channel2.push(object);
            break;
        case 3:
            channel3.push(object);
            break;
        case 4:
            channel4.push(object);
            break;

        default:
            break;
    }
}
function recAudio(e) {
    isRec = !isRec
    recStartTime = Date.now()
    e.target.innerHTML = isRec ? "Zatrzymaj" : "Nagrywaj"
}

function playAudio() {
    channel1.forEach(sound => {
        setTimeout(
            () => {
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
    channel2.forEach(sound => {
        setTimeout(
            () => {
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
    channel3.forEach(sound => {
        setTimeout(
            () => {
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
    channel4.forEach(sound => {
        setTimeout(
            () => {
                const audioDOM = document.querySelector(`#${sound.name}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }, sound.time
        )
    })
}