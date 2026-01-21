import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
   editTodo !: Itodo
todoArr:Array<Itodo>=[
    {
      todoItem:"js",
      todoId:"101"
    },
    {
      todoItem:"ts",
      todoId:"102"
    },
    {
      todoItem:"angular",
      todoId:"103"
    },
    {
      todoItem:"css",
      todoId:"104"
    }
  ]
  constructor(
    private _snackBar:SnackBarService
  ) { }

  ngOnInit(): void {
  }

  getNewTodo(todo:Itodo){
     this.todoArr.unshift(todo)
     this._snackBar.openSnackBar('Todo added successfully')
    
  }

  getRemoveId(id:string){
    let getIndex = this.todoArr.findIndex(todo=>todo.todoId === id)
    this.todoArr.splice(getIndex,1)
    this._snackBar.openSnackBar(`The todo Item with id ${id} removed successfully`)
  }

  getEditTodo(todo:Itodo){
    this.editTodo = todo
  }

  getUpdatedTodo(todo:Itodo){
    let getIndex = this.todoArr.findIndex(t=>t.todoId  === todo.todoId )
    this.todoArr[getIndex] = todo
    this._snackBar.openSnackBar(`The todo Item with id ${todo.todoId} updated successfully`)
  }
}
