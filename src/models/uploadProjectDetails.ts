import { Project } from "../interfaces/projects.type";
import { projects } from "../data/projects";

export const uploadProjectDetails = async (projectId: number): Promise<Project> => {
  try {
    console.log(`Cargando detalles del proyecto con ID: ${projectId}...`);

    return await new Promise<Project>((resolve, reject) => {
      setTimeout(() => {
        const project = projects.find((proj) => proj.id === projectId);
        if (project) {
          console.log("Detalles del proyecto cargados exitosamente.");
          resolve(project);
        } else {
          reject(new Error(`Proyecto con ID ${projectId} no encontrado.`));
        }
      }, 2000);
    });
  } catch (error) {
    console.error("Error al cargar el proyecto:", error);
    throw error;
  }
};
