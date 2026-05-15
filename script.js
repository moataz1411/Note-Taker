const notecontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes", notecontainer.innerHTML);
}

function showNotes(){
    notecontainer.innerHTML=localStorage.getItem("notes")|| ""
}
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
    img.addEventListener("click",()=>{
        note.remove();
        updateStorage();
    });
    inputBox.addEventListener("keyup", updateStorage);
});






