// ------------- interfaces --------------- //
import { Task } from "./interfaces/tasks.type";

// ------------- Data / Respuesta 1.1 --------------- //
import { projects } from "./data/projects";

// ------------- Función agregar nuevas tareas / Respuesta 1.2 --------------- //

import { addTaskToProject } from "./models/addTaskToProject";

// ------------- Función Resumen del proyecto / Respuesta 1.3 --------------- //

import { getProjectSummary } from "./models/getProjectSummary";

// ------------- Función ordenar por fecha límite  / Respuesta 1.4 --------------- //

import { sortTasksByDeadline } from "./models/sortTasksByDeadline";

// ------------- Función para filtrar tareas por Proyecto / Respuesta 2.1 --------------- //

import { filterProjectTasks } from "./models/filterProjectTasks";

// ------------- Función para calcular tiempo restante / Respuesta 2.2 --------------- //

import { calculateRemainingTime } from "./models/remainingTime";

// ------------- Función para obtener tares críticas / Respuesta 2.3 --------------- //
import { getCriticalTasks } from "./models/getCriticalTasks";


// ------------- Función para cargar los detalles del proyecto / Respuesta  3.1 --------------- //
import { uploadProjectDetails } from "./models/uploadProjectDetails";


// ------------- Función para actualizar el estado de la tarea / Respuesta 3.2 --------------- //
import { updateTaskStatus } from "./models/updateTaskStatus";


// ------------- Función para Notificar / Respuesta Tareas 3.3 --------------- //
import { NotificationsTasks } from "./models/NotificationsTasks";





// ------------- Respuesta 1.2 --------------- //

// Añadir la tarea al proyecto con ID 2

const addNewTask: Task = {
  id: 202,
  description: "Crear documentación del proyecto",
  status: "pendiente",
  deadline: "2024-12-20"
}

const resultado = addTaskToProject(2, addNewTask);

console.log(resultado);


// ------------- Respuesta 1.3 --------------- //

//  Obtener el resumen de todas las tareas en los proyectos
const projectSummaries = getProjectSummary(projects);

// Mostrar el resultado
console.log(projectSummaries);



// -------------Respuesta 1.4--------------- //

 // Tomamos el primer proyecto de la lista
const project = projects[0];

// Ordenamos las tareas del proyecto por fecha límite
const sortedProject = sortTasksByDeadline(project);

// Mostramos el proyecto con las tareas ordenadas
console.log(sortedProject);




// -------------Respuesta 2.1--------------- //

// Ejemplo de uso de `filtrarTareasProyecto`
const tareasPendientes = filterProjectTasks(projects[0], (task) => task.status === "pendiente");
console.log("Tareas pendientes:", tareasPendientes);



// -------------Respuesta 2.2--------------- //

// Ejemplo de uso de `calcularTiempoRestante`
const tiempoRestante = calculateRemainingTime(projects[0]);
console.log("Tiempo restante para completar tareas pendientes:", tiempoRestante, "días");



// -------------Respuesta 2.3--------------- //
// Ejemplo de uso de `obtenerTareasCriticas`
const tareasCriticas = getCriticalTasks(projects[0]);
console.log("Tareas críticas (menos de 3 días y pendientes):", tareasCriticas);





const runProcess = async () => {
  const notificaciones = new NotificationsTasks();

  // Suscribimos un listener para las notificaciones
  notificaciones.suscribir((task: Task) => {
    console.log(`Notificación: La tarea con ID ${task.id} (${task.description}) ha sido completada.`);
  });

  try {
    // -------------Respuesta 3.1--------------- //

    //  Cargar detalles de un proyecto
    const project = await uploadProjectDetails(1);
    console.log("Proyecto cargado:", project);

    // -------------Respuesta 3.2--------------- //

    // Actualizar el estado de una tarea
    await updateTaskStatus(1, 103, "completada");
    console.log("Proyecto actualizado:", project);

    // -------------Respuesta 3.3--------------- //
    
    // Notificar cuando una tarea se completa
    const tareaCompletada = project.tasks.find((task) => task.id === 103);
    if (tareaCompletada) {
      notificaciones.notificarTareaCompletada(tareaCompletada);
    }
  } catch (error) {
    console.error("Error en el proceso:", error);
  }
};

// Ejecutar el proceso
runProcess();
