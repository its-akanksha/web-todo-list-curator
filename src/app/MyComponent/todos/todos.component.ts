import { Component } from '@angular/core';
import { todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  
  todos: todo[];
  constructor(){
    
    this.todos = [];
  }
  deleteTodo(todo:todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    
  }
  addTodo(todo:todo){
    console.log(todo);
    this.todos.push(todo);
    
  }
}
