const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask() {
    if (inputBox.value === '') {
        alert("You  must write something!");
    }
    else {
        let li;
        li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.addEventListener("click", function () {  
        li.classList.add("checked");});
        console.log(li)
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
}


function removeTask(a) {
    console.log("functiontriggered")
    console.log(a)
}
