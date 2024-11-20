import { Project } from "../interfaces/projects.type";

// Función para calcular el tiempo restante para completar todas las tareas pendientes
export const calculateRemainingTime = (project: Project): number => {
    const today = new Date();  // Obtenemos la fecha actual
  
    // Usamos reduce para sumar los días restantes para cada tarea pendiente
    return project.tasks.reduce((totalTime, task) => {
      if (task.status === "pendiente") {
        const deadlineDate = new Date(task.deadline);
        const timeLeft = (deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24);  // Convertimos milisegundos a días
        if (timeLeft > 0) {  // Solo sumamos si la tarea aún no ha vencido
          return totalTime + timeLeft;
        }
      }
      return totalTime;  // Si la tarea no está pendiente, no sumamos tiempo
    }, 0);  // Inicializamos el totalTime en 0
  };
  