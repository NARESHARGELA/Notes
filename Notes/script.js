const Createbtn = document.querySelector(".btn")
const contentCreater = document.querySelector(".notes-container");
let notes = document.querySelector('.input-box');

// storing the values
function UpdateStorage(){
    localStorage.setItem("notes",contentCreater.innerHTML)
}

// show notes when closing browser and opening it

function ShowNotes (){
    contentCreater.innerHTML=localStorage.getItem("notes")
}
ShowNotes();

Createbtn.addEventListener("click",()=>{
    let inpputBox = document.createElement('p');
    let img = document.createElement("img")
    inpputBox.className = "input-box";
    inpputBox.setAttribute('contenteditable',"true");
    img.src ="images/delete.png";
    contentCreater.appendChild(inpputBox).appendChild(img);
})

contentCreater.addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        UpdateStorage()
    }
    else if( e.target.tagName === "p"){
       notes= document.querySelector("input-box");
       notes.forEach(nt=>{
        nt.onkeyup= function(){
            UpdateStorage();
        }
       })
    }
})
contentCreater.addEventListener('keydown', (e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})
