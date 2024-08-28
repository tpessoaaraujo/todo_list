const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === '') {
        alert("Você precisa escrever alguma coisa!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
    }
}, false);

document.getElementById("input-box").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("submit").click();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showTask();