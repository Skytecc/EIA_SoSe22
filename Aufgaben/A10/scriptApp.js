const taskInput = document.querySelector("#newInput");
const trashCan = document.querySelector(".icon");
var items = document.querySelectorAll("#appList li");
var myList = document.querySelector("#appList");
var number = 0;
taskInput.addEventListener("keyup", e => {
    const value = taskInput.value;
    const newlabel = document.createTextNode(value);
    var newTasks = document.createElement("li");
    var newCheckbox = document.createElement("input");
    var newIcon = document.createElement("i");
    newIcon.classList.add("fas", "fa-trash-alt", "icon");
    newCheckbox.setAttribute("type", "checkbox");
    if (e.key == "Enter" && value) {
        number++;
        function showNumber() {
            document.querySelector(".totalnumber").innerHTML = String(number);
        }
        showNumber();
        document.getElementById("appList").appendChild(newTasks);
        newTasks.appendChild(newCheckbox);
        newTasks.appendChild(newlabel);
        newTasks.appendChild(newIcon);
        taskInput.value = "";
        console.log(value);
    }
    else {
        return null;
    }
    function myTest() {
        var test = document.querySelector(".li");
        test.style.display = "none";
    }
    function myTest02() {
        var test02 = document.querySelector(".li");
        myList.removeChild(newTasks);
        number--;
        showNumber();
    }
    document.querySelector(".icon").addEventListener("click", myTest02);
});
//# sourceMappingURL=scriptApp.js.map