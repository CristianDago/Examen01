
import { projects } from "../data/projects";
import { Task } from "../interfaces/tasks.type";

// Agregar nuevas Tareas a un proyecto

export const addTaskToProject = (projectId: number, newTask: Task) => {
  // Buscar el proyecto por ID
  const project = projects.find(proj => proj.id === projectId);

  if (!project) {
    return `Error: No se encontró el proyecto con ID ${projectId}.`;
  }

  // Validar que la tarea no tenga un ID duplicado dentro del proyecto
  const taskExists = project.tasks.some(task => task.id === newTask.id);

  if (taskExists) {
    return `Error: Ya existe una tarea con ID ${newTask.id} en el proyecto ${project.name}.`;
  }

  // Añadir la nueva tarea al proyecto
  project.tasks.push(newTask);
  return project;
}




