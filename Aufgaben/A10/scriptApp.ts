const taskInput = document.querySelector<HTMLInputElement>("#newInput");
const trashCan = document.querySelector(".icon");
var items = document.querySelectorAll("#appList li");
var myList = document.querySelector("#appList");



    
taskInput.addEventListener("keyup", e => {
    const value : string = taskInput.value; 
    const newlabel = document.createTextNode(value);
    var newTasks = document.createElement("li");
    var newCheckbox = document.createElement("input");
    var newIcon = document.createElement("i")
    newIcon.classList.add("fas", "fa-trash-alt", "icon");
    
    newCheckbox.setAttribute("type", "checkbox");


    if(e.key == "Enter" && value) {

        document.getElementById("appList").appendChild(newTasks);
        newTasks.appendChild(newCheckbox);
        newTasks.appendChild(newlabel);
        newTasks.appendChild(newIcon);
        
        taskInput.value = "";

        console.log(value);

    } else {
        return null
    }

    function myTest() {
        var test = document.querySelector<HTMLElement>(".li");
        test.style.display="none";
    }

 
    document.querySelector(".icon").addEventListener("click", myTest);
});



