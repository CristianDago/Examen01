import { taskStatus } from "../interfaces/tasks.type";
import { projects } from "../data/projects";


export const updateTaskStatus = async (
  projectId: number,
  taskId: number,
  nuevoEstado: taskStatus
): Promise<void> => {
  try {
    console.log(`Actualizando el estado de la tarea con ID: ${taskId} en el proyecto ${projectId} a ${nuevoEstado}...`);

    return await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const project = projects.find((proj) => proj.id === projectId);
        if (!project) {
          reject(new Error(`Proyecto con ID ${projectId} no encontrado.`));
        }

        const task = project?.tasks.find((t) => t.id === taskId);
        if (!task) {
          reject(new Error(`Tarea con ID ${taskId} no encontrada en el proyecto ${projectId}.`));
        }

        if (task) {
          task.status = nuevoEstado;
          console.log(`Estado de la tarea ${taskId} actualizado a: ${nuevoEstado}`);
          resolve();
        }
      }, 1000);
    });
  } catch (error) {
    console.error("Error al actualizar el estado de la tarea:", error);
    throw error;
  }
};
