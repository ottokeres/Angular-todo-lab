import { Component, OnInit, Input } from '@angular/core';

interface ITodo {
  completed: boolean;
  task: string;
}

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements ITodo {

  @Input() completed: boolean;
  @Input() task: string; 

  toDoList=[
    {task:'pay bills', completed: true},
    {task:'grocery shop', completed: false},
    {task:'laundry', completed: true},
    {task:'go to work', completed: false}
  ]; 

  constructor() { 
   }

  ngOnInit() {
  }
}
