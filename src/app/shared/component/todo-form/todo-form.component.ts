import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
isInEditMode:boolean=false;
@ViewChild('todoFom')todoFom !:NgForm
@Output() emitNewTodo:EventEmitter<Itodo>=new EventEmitter<Itodo>()
@Input() getEditTodo!:Itodo
@Output() emitupdatedTodo:EventEmitter<Itodo>=new EventEmitter<Itodo>()
  constructor() { }
 
  ngOnChanges(changes: SimpleChanges): void {
   if(!!changes ['getEditTodo'] ['currentValue']){
    this.isInEditMode = true
    this.todoFom.form.patchValue(changes ['getEditTodo'] ['currentValue'])
  }
  }
  ngOnInit(): void {
  }

  onTodoAdd(){
   if(this.todoFom.valid){
    let todo:Itodo={
      ...this.todoFom.value,
      todoId:Date.now().toString()
    }
    this.emitNewTodo.emit(todo)
    this.todoFom.reset()
   }
  }

  onTodoUpdate(){
    if(this.todoFom.valid){
      let updateObj:Itodo = {
         ...this.todoFom.value,
      todoId:this.getEditTodo.todoId
      }
      this.emitupdatedTodo .emit(updateObj)
      this.isInEditMode = false
      this.todoFom.reset()
  }

}
}