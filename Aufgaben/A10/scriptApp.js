const taskInput = document.getElementById("myInput");
taskInput.addEventListener("keyup", i => {
    const value = taskInput.value.trim();
    if (i.key == "Enter" && value) {
        let todos = localStorage.getItem(".applist");
        if (!todos) {
            todos[] = [];
        }
        console.log(value);
    }
});
//# sourceMappingURL=scriptApp.js.map