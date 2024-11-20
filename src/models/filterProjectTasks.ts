import { Project } from "../interfaces/projects.type";  // Asegúrate de importar correctamente Project
import { Task } from "../interfaces/tasks.type";        // Asegúrate de importar correctamente Task

// Función de orden superior para filtrar tareas de un proyecto
export const filterProjectTasks = (project: Project, filterFn: (task: Task) => boolean): Task[] => {
  // Aplicamos la función de filtrado sobre las tareas del proyecto
  return project.tasks.filter(filterFn);
};
