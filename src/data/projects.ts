import { Project } from "../interfaces/projects.type"; 

export const projects: Project[] = [
  {
    id: 1,
    name: "Proyecto A",
    startDate: "2024-11-01",
    tasks: [
      {
        id: 101,
        description: "Investigar sobre el tema",
        status: "completada",
        deadline: "2024-11-19"
      },
      {
        id: 102,
        description: "Revisar el informe final",  
        status: "pendiente",
        deadline: "2024-11-22"
      },
      {
        id: 103,
        description: "Redactar el informe",
        status: "en progreso",
        deadline: "2024-11-20"
      },
      {
        id: 104,
        description: "Últimos cambios",
        status: "pendiente",
        deadline: "2024-11-25"
      }
    ]
  },
  {
    id: 2,
    name: "Proyecto B",
    startDate: "2024-11-10",
    tasks: [
      {
        id: 201,
        description: "Configurar el entorno de desarrollo",
        status: "pendiente",
        deadline: "2024-11-15"
      }
    ]
  }
];
