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

export class TodoComponent implements ITodo{

  @Input() completed: boolean;
  @Input() task: string; 


  toDoList=[]; // initialized empty array

  constructor() { 
   }

  ngOnInit() {
  }

  addTask() {  
      this.toDoList.push({task:this.task, completed:false});
      this.task='';
  }

  removeTask(i){
    this.toDoList.splice(i,1);
  }

  completeTask(i){
    this.toDoList[i].completed=true; 
  }

}

