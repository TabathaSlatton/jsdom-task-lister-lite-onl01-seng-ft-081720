document.addEventListener("DOMContentLoaded", () => {
  // grab the form
  const taskForm = document.querySelector("#create-task-form")
  // grab the list of tasks
  const taskList = document.querySelector("#tasks")

  // do things after you submit
  taskForm.addEventListener("submit", function(e) {
    // preven submit from redirecting to post
    e.preventDefault();
    // get user input
    const newTask = document.querySelector("#new-task-description").value
    // put it in the document
    const taskItem = document.createElement("li")
    taskItem.innerText = newTask;  //innerText changes text between li tags
    taskList.appendChild(taskItem);

    // create button
    const myButton = document.createElement("button")
    myButton.innerText = "X"
    myButton.dataset.action = "delete"
    taskItem.appendChild(myButton)

    // clears the form so input doesn't remain
    taskForm.reset(); 

  })

  
  taskList.addEventListener("click", function(e) {
      if (e.target.dataset.action === "delete") {
        e.target.parentElement.remove();
      }
  })
});



