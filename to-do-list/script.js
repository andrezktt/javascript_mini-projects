const pushTask = document.querySelector('#push_task');
const inputTask = document.querySelector('#input_task');
const taskDetails = document.querySelector('#task_details');
const tasks = document.querySelector('#tasks');
const container = document.querySelector('.container');


pushTask.addEventListener('click', (e) => {
   if(inputTask.value.length == 0 ||taskDetails.value.length == 0) {
      alert("Por avor, insira uma tarefa assim como seus detalhes e/ou etapas.");
   } else {
      tasks.innerHTML += `
      <div class="task">
         <div id="task_text">
            <h2 id="taskname">
               ${inputTask.value}
            </h2>
            <p id="details">
               ${taskDetails.value}
            </p>
         </div>
         <button class="delete">
            <span class="material-symbols-outlined">
               delete
            </span>
            <span> Apagar </span>
         </button>
      </div>`;
      
      inputTask.value = '';
      taskDetails.value  = '';

      let currentTask = document.querySelectorAll(".delete");
      for(let i = 0; i < currentTask.length; i++) {
         currentTask[i].onclick = function() {
            this.parentNode.remove()
         }
      }

      let taskText = document.querySelectorAll("#task_text")
      for(let i = 0; i < taskText.length; i++) {
         taskText[i].onclick = function() {
            this.classList.toggle('completed')
         }
      }
   }
})


