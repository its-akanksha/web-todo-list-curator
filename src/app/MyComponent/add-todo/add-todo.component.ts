import { Component, Output, EventEmitter } from '@angular/core';
import { todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<todo> = new EventEmitter();

  onSubmit(){
    const todo={
      sno: 0,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
