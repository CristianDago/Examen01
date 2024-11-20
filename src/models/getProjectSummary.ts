import { taskStatus } from "../interfaces/tasks.type";
import { Project } from "../interfaces/projects.type";

// Función para generar un resumen del número de tareas por estado
export const getProjectSummary = (projects: Project[]): { projectName: string, taskSummary: { [key in taskStatus]: number } }[] => {
  return projects.map(project => {
    // Usamos reduce para contar las tareas por estado
    const taskSummary = project.tasks.reduce(
      (acc: { [key in taskStatus]: number }, task) => {
        // Incrementamos el contador para el estado de la tarea
        acc[task.status]++;
        return acc;
      },
      { pendiente: 0, "en progreso": 0, completada: 0 } // Inicializamos con 0 en cada estado
    );

    return {
      projectName: project.name,
      taskSummary, // Resumen de las tareas por estado
    };
  });
};


