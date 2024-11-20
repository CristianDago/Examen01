import { Task } from "../interfaces/tasks.type";


// Clase para implementar un sistema simple de notificaciones de tareas.

export class NotificationsTasks{
  private listeners: Function[] = [];


  suscribir(listener: Function): void {
    this.listeners.push(listener);
  }

  notificarTareaCompletada(task: Task): void {
    if (task.status === "completada") {
      this.listeners.forEach((listener) => listener(task));
    }
  }
}
