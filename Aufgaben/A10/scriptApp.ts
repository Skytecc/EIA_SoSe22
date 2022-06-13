const taskInput = document.querySelector<HTMLInputElement>("#newInput");
const trashCan = document.querySelector(".icon");
var items = document.querySelectorAll("#appList li");
var myList = document.querySelector("#appList");
var number: number = 0;



    
taskInput.addEventListener("keyup", e => {
    const value : string = taskInput.value; 
    const newlabel = document.createTextNode(value);
    var newTasks = document.createElement("li");
    var newCheckbox = document.createElement("input");
    var newIcon = document.createElement("i")
    newIcon.classList.add("fas", "fa-trash-alt", "icon");
    newIcon.addEventListener("click", myTest02);
    
    newCheckbox.setAttribute("type", "checkbox");


    if(e.key == "Enter" && value) {

        number++;

        function showNumber () {
        
            document.querySelector(".totalnumber").innerHTML = String(number);

        }

        document.getElementById("appList").appendChild(newTasks);
        newTasks.appendChild(newCheckbox);
        newTasks.appendChild(newlabel);
        newTasks.appendChild(newIcon);
        
        taskInput.value = "";

        console.log(value);
        showNumber();

    } else {
        return null
    }

    function myTest() {
        var test = document.querySelector<HTMLElement>("#appList li");
        test.style.display="none";
    }

    function myTest02() {
        var test02 = document.querySelector<HTMLElement>("#appList li");

        myList.removeChild(test02);
        number--;
        showNumber();
    }

 
    
});



