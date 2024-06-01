document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inpAdd");
    const addNote = document.getElementById("addNote");
    const notesContainer = document.getElementById("notesContainer");
    const emptyMessage = document.getElementById("emptyMessage");
    const delAll = document.getElementById("delAll");

    addNote.addEventListener("click", () => {
        const val = input.value.trim();
        if (val) {
            addNewNote(val);
            input.value = '';
            emptyMessage.style.display = 'none';
        }
    });

    delAll.addEventListener("click", () => {
        notesContainer.innerHTML = '';
        emptyMessage.style.display = 'block';
    });

    function addNewNote(content) {
        const noteDiv = document.createElement("div");
        noteDiv.className = "noteModule";

        const noteDate = document.createElement("h1");
        noteDate.className = "date";
        noteDate.textContent = new Date().toLocaleString();

        const noteContent = document.createElement("em");
        noteContent.className = "content";
        noteContent.textContent = content;

        const deleteSpan = document.createElement("span");
        deleteSpan.className = "trash";
        deleteSpan.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteSpan.addEventListener("click", () => {
            notesContainer.removeChild(noteDiv);
            if (notesContainer.children.length === 0) {
                emptyMessage.style.display = 'block';
            }
        });

        noteDiv.appendChild(noteDate);
        noteDiv.appendChild(noteContent);
        noteDiv.appendChild(deleteSpan);
        notesContainer.appendChild(noteDiv);
    }
});
