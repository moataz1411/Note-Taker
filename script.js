const notecontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes", notecontainer.innerHTML);
}
function bindEvents() {

    document.querySelectorAll(".delete").forEach(btn => {
        btn.onclick = function () {
            this.parentElement.remove();
            updateStorage();
        };
    });
     document.querySelectorAll(".input-box").forEach(box => {
        box.onkeyup = updateStorage;
    });
}
function showNotes(){
    notecontainer.innerHTML=localStorage.getItem("notes")|| ""
    bindEvents();
}
    document.querySelectorAll(".delete").forEach(btn => {
        btn.onclick = function () {
            this.parentElement.remove();
            updateStorage();
        };
    });

    document.querySelectorAll(".input-box").forEach(box => {
        box.onkeyup = updateStorage;
    });
showNotes();
createbtn.addEventListener("click",()=>{
    let note = document.createElement("div");
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    note.className="note"
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    img.className="delete";
    note.appendChild(inputBox);
    note.appendChild(img);
    notecontainer.appendChild(note);

        updateStorage();
        bindEvents();
    });






