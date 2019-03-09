class Note {
    constructor(title, content, color) {
        this.Date = Date.now();
        this.Title = title;
        this.Content = content;
        this.Color = color
    }
}
const safeBtn = document.getElementById("safe-btn");
const visBtn = document.getElementById("visible");
const title = document.getElementById('title');
const date = document.getElementById('date');
const content = document.getElementById('cont-int');
const color = document.getElementById('col');
const noteField = document.getElementById('notes');
const Notes = [];

const addNotes = () => {
    Notes.push(JSON.parse(localStorage.getItem('notes')));

    Notes.forEach = note => {
        console.log(note);
    }
}

const safeNote = () => {
    let OneNote = new Note(title, date, content, color);
    let stringNote = JSON.stringify(OneNote);
    localStorage.setItem('notes', stringNote);
    title.innerText = '';
    content.innerText = '';
}

safeBtn.addEventListener('click', safeNote);
visBtn.addEventListener('click', addNotes);

