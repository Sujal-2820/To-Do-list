window.addEventListener('load', () => {
    const form = document.querySelector("#New-Task");
    const input = document.querySelector("#New-Task-Input");
    const list_el = document.querySelector("#tasks");           //this is the greatest/ parent of all the elements in the task list

    form.addEventListener('submit', (e) => {
        e.preventDefault();                     //to prevent page from refreshing after clicking Add Task
        
        const task = input.value;               //to register the task

        if(!task){
            alert("Please enter a Task!");
            return;
        }


        //when Add Task is clicked, create a div showing task. The objects are child of task_el (parent).
        const task_el = document.createElement("div");              //task el is the first child of list_el
        task_el.classList.add("task");                              //reference line 26 of HTML

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");                   //reference line 27 of HTML
        

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";                                           //to refresh input section after clicking Add Task button

        task_edit_el.addEventListener("click", () => {
            if(task_edit_el.innerText == "EDIT"){
                task_input_el.removeAttribute("readonly");              //when edit button is clicked we will remove readonly function for time being
                task_input_el.focus();                                  //this will automatically put the cursor to the right position
                task_edit_el.innerText = "Save";
            }
            else{                                                       //If it is showing SAVE
                task_input_el.setAttribute("readonly","readonly");      //compulsorily write 2 times readonly while setAttribute
                task_edit_el.innerText = "Edit";                        //again change button to Edit after task gets over
            }
        })

        task_delete_el.addEventListener("click", () => {
            list_el.removeChild(task_el);
        });   
    });

}); 
