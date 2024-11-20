export type taskStatus = "pendiente" | "en progreso" | "completada";

export interface Task {
    id: number;
    description: string;
    status: taskStatus;
    deadline: string; // Usamos string para fechas en formato ISO
  }