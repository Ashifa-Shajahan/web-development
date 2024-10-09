import { Component } from '@angular/core';
import { todolist } from './to-do-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';

  tasks:todolist[] = [];
onTaskAdd(task: todolist){
  this.tasks.push(task);
}
items:todolist[] =[
  {
    Actions:"brush your teeth",
    Note:"get paste from jerry's hole",
  },
  {
    Actions:"keep cheese out of fridge",
    Note:"beware of jerry",
  },
  {
    Actions:"go for fellow cats meetup",
    Note:"dont trust them easily",
  },
  {
    Actions:"chase jerry for one hour",
    Note:"dont let jerry fool you",

  }
]
}