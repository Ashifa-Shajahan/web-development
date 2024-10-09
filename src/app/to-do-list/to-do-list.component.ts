import { Component, Input, input } from '@angular/core';
import { todolist } from '../to-do-list.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  @Input() task: todolist = {
     Actions:"empty",
     Note:"empty",
};
}