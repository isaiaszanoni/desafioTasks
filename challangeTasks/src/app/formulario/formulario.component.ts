import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tarefa: Task = new Task

  constructor(
    private service: TaskService
  ) { }

  ngOnInit(): void {
  }

  enviarTask() {
    this.service.postTask(this.tarefa).subscribe((resp: Task) => {
      this.tarefa = resp
    })
  }

}
