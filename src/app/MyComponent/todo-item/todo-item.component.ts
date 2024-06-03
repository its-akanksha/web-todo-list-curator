import { Component, Input, Output, EventEmitter } from '@angular/core';
import { todo } from '../../todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: todo;
  @Output() todoDelete : EventEmitter<todo> = new EventEmitter();

  onClick(todo: todo){
    this.todoDelete.emit(todo)
    console.log("Onclick has been triggered")
  }
}
