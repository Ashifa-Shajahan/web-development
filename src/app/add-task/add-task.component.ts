import { Component, EventEmitter, Output, output } from '@angular/core';
import { todolist } from '../to-do-list.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
ActionInp: string="";
NoteInp: string="";

  @Output() onTask = new EventEmitter<todolist>();

  addTask() {
    let todo: todolist = {
      Actions: this.ActionInp,
      Note: this.NoteInp,
    };
    this.onTask.emit(todo)

  }
}
