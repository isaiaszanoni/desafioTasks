import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  postTask(tarefa: Task): Observable<Task>{
    tarefa.id = 12
    tarefa.tarefa = "tarefa pelo Angular12"
    return this.http.post<Task>('http://localhost:8083/add/task', tarefa)
  }
}
