class Note {
    constructor(title, content) {
        this.Date = Date.now();
        this.Title = title;
        this.Content = content;
    }
}
//pobieranie elementów
const safeBtn = document.getElementById("safe-btn");
const visBtn = document.getElementById("visible");
const title = document.getElementById('title');
const date = document.getElementById('date');
const content = document.getElementById('cont-int');
const Notes = [];

// const addNote = () => {
//     Notes
// }
const safeNote = () => {
    let OneNote = new Note(title, date, content);
    let stringNote = JSON.stringify(OneNote);
    localStorage.setItem('notes', stringNote);
}

safeBtn.addEventListener('click', safeNote);

