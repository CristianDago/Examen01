import { Task } from "./tasks.type";

export interface Project {
    id: number;
    name: string;
    startDate: string; // Usamos string para fechas en formato ISO
    tasks: Task[]; // Array de tareas
  }
  