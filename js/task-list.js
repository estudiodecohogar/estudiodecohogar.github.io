// obtener elemento boton añadir
const btnAddTask = document.getElementById("add-task");

// escuchar el evento 'click' del boton añadir
btnAddTask.addEventListener("click", addTask);

// obtener elemento ul y escuchar evento 'change' en dropdown menu
document.getElementById("list").addEventListener("change", changeAction);

// inicializar con valor 1 la variable que se usa para generar IDs
var taskID = 1;

// array para almacenar tareas
let tasks = [];

// funcion agregar tarea 

function addTask(event) {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim(); // método que elimina los espacios en blanco en ambos extremos del string

    if(taskText === "") {  // validacion de texto no vacio
        alert("Ingrese un objeto válido");
        return;
    }

    var listItem = document.createElement("li"); // define el tipo de elemento a crear
    listItem.setAttribute("id","task-"+taskID); // setea un nuevo atributo id, clave: id y valor: task- + taskID+1 por cada tarea
    listItem.classList.add("task"); // se le agrega la clase task para dar estilo
    // listItem.classList.add("mantener"); // se le agrega la clase .mantener como default 
    listItem.innerHTML = `<span class="task-text">${taskText}</span>
                          <select class="mantener">  
                          <option value="mantener">Mantener</option>
                          <option value="renovar">Renovar</option>
                          <option value="eliminar" id="eliminar">Eliminar</option>
                          </select>`;
    document.getElementById("list").appendChild(listItem);
    
    const newTask = { //creacion objeto para almacenar en arreglo 'tasks'
    id: taskID,
    description: taskText,
    }

    tasks.push(newTask); // add objeto al arreglo
    console.log(tasks);
    
    taskInput.value = ""; // limpia el texto del input
    taskID++;
}

// funcion cambiar acción del list item 

function changeAction (event) {
    var taskItem = event.target;
    // console.log(`Task item: ${taskItem}`);

    // var taskID = taskItem.getAttribute(id);
    // console.log(`task id: ${taskID}`);
    
    var taskAction = event.target.value;
    // console.log(`Task action: ${taskAction}`);

    taskItem.classList.remove("mantener", "renovar", "eliminar");
    taskItem.classList.add(taskAction);
}