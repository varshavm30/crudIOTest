import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../model/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() todoObj:Array<Itodo> = []
@Output() emitTodoRemove:EventEmitter<string> = new EventEmitter<string>()
@Output() emitTodoEdit:EventEmitter<Itodo> = new EventEmitter<Itodo>()
  trackById(index:number,todo:Itodo){
    return todo.todoId
  }
constructor(
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onTodoRemove(todo:Itodo){
    let matConfig = new MatDialogConfig()
    matConfig.width = '500px'
    matConfig.data = `Are you sure you want to remove todoItem`
    matConfig.disableClose = true
    let matDialogRef=this._matDialog.open(GetConfirmComponent,matConfig)
    matDialogRef.afterClosed()
     .subscribe(flag =>{
       if(flag){
        this.emitTodoRemove.emit(todo.todoId)
       }
     })
}

onTodoEdit(todo:Itodo){
  this.emitTodoEdit.emit(todo)
}
}