import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() i:number | undefined;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter;
  @Output() toggleCheckbox:EventEmitter<Todo>=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo):void{
    this.todoDelete.emit(todo);
    console.log("On click triggered")
  }
  markDone(todo: Todo) {
    this.toggleCheckbox.emit(todo);
  }
}
