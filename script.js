const notecontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
const sidepanel=document.querySelector(".sidepanel");
let notes=document.querySelectorAll(".input-box");

function updateStorage(){
    localStorage.setItem("notes", notecontainer.innerHTML);
    localStorage.setItem("dates", sidepanel.innerHTML);
}

function bindEvents() {

    document.querySelectorAll(".delete").forEach((btn, index) => {

        btn.onclick = function () {

            document.querySelectorAll(".note")[index].remove();

            document.querySelectorAll(".side-item")[index].remove();

            updateStorage();
        };
    });

    document.querySelectorAll(".input-box").forEach(box => {
        box.onkeyup = updateStorage;
    });
}

function showNotes(){

    notecontainer.innerHTML =
    localStorage.getItem("notes") || "";
    sidepanel.innerHTML =
    localStorage.getItem("dates") || "";

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
    const sideItem=document.createElement("div");
    sideItem.className="side-item";
    const now = new Date();
    const dateString = now.toLocaleDateString();
    sideItem.innerHTML = `<h2>${dateString}</h2>`;
    sidepanel.prepend(sideItem);
img.onclick = function () {
    note.remove();
    sideItem.remove();

    updateStorage();
};

        updateStorage();
        bindEvents();
    });






