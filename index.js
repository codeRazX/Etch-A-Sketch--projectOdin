
const container = document.querySelector(".container");
const gridBtn = document.getElementById("grid");
const input = document.getElementById("input-grid");


const createGrid = ()=>{
    const size = input.value.trim() || 16;
    if(size > 100){
        showError();
        return;
    }
    clearHTML();

    const divSize = 960 / size;

    for(let i = 0; i < size * size; i++){
        const div = document.createElement("DIV");
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.classList.add("item");

        container.appendChild(div);
    }
    input.value = "";
}

const showError = ()=>{
    const header = input.closest(".header");
    const exits = header.querySelector(".error");
    if(exits)return;
    const error = document.createElement("P");
   
    error.textContent = "Max allowed size";
    error.classList.add("error");
    header.appendChild(error);
    setTimeout(()=>error.remove(),3000);
}
const clearHTML = ()=>{
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
const generateLetter = (array)=>{
    const index= Math.floor(Math.random() * array.length);
    return array[index];
}

const randomColor = ()=>{
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let color = "";

    for(let i = 0; i < 6; i++){
        color+= generateLetter(hex);
    }
   return "#"+color;
   
}

const changeColor = (e)=>{
   
    if(e.target.matches("DIV")){
        
    const computedStyle = getComputedStyle(e.target);

    e.target.style.backgroundColor = computedStyle.backgroundColor === "rgb(255, 255, 255)"? randomColor() : false;

}
}
document.addEventListener("DOMContentLoaded", createGrid);
container.addEventListener("mouseover", changeColor);
gridBtn.addEventListener("click", createGrid);