import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  title:string|undefined;
  desc:string|undefined;
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter;
  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log("submitted")
    const todo={
      sno:0,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
