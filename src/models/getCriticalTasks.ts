import { Project } from "../interfaces/projects.type";
import { Task } from "../interfaces/tasks.type";

// Función para obtener tareas críticas que están a menos de 3 días de su fecha límite y aún no están completadas
export const getCriticalTasks = (project: Project): Task[] => {
    const today = new Date();  // Obtenemos la fecha actual
  
    return project.tasks.filter((task) => {
      const deadlineDate = new Date(task.deadline);
      const daysLeft = (deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24);  // Días restantes
  
      // Comprobamos si la tarea está pendiente y a menos de 3 días de su fecha límite
      return task.status !== "completada" && daysLeft <= 3 && daysLeft > 0;
    });
  };
  