const taskInput = document.getElementById("myInput") as HTMLInputElement;



taskInput.addEventListener("keyup", i => {
    const value : string = taskInput.value.trim(); 
    if(i.key == "Enter" && value) {
        let todos = localStorage.getItem(".applist");
        if (!todos) {
            todos[] = [];
        }

        console.log(value);
    }
})
