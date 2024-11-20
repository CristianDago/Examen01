import { Project } from "../interfaces/projects.type";  // Asegúrate de que Project esté importado

// Función para ordenar las tareas por fecha límite
export const sortTasksByDeadline = (project: Project): Project => {
  // Usamos el método sort para ordenar las tareas por la propiedad deadline
  project.tasks.sort((a, b) => {
    // Convertimos las fechas en formato ISO a objetos Date para compararlas
    const dateA = new Date(a.deadline);
    const dateB = new Date(b.deadline);
    
    // Orden ascendente (si dateA es antes que dateB, retorna -1)
    return dateA.getTime() - dateB.getTime();
  });

  // Retornamos el proyecto con las tareas ordenadas
  return project;
};
