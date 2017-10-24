//Imports
import { Component } from '@angular/core';

//@component decorator
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

//Todolist Component
export class TodoListComponent  {
  title = 'Todo List';
  // todo list array of object
  todoList=[
    {text:'First todo',status:true}
  ];

  //todo list function to add values of todo
  todoListData(todoText){
    this.todoList.push(todoText);
  }
}
