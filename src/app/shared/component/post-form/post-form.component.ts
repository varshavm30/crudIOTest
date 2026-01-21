import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ipost } from '../../model/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnChanges{
@ViewChild('postForm')postForm!:NgForm
isInEditMode:boolean=false
@Output() emitNewPost = new EventEmitter<Ipost>()
@Output() emitUpdatedPost = new EventEmitter<Ipost>()
@Input() editObj!:Ipost

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!! changes['editObj'] ['currentValue']){
      this.postForm.form.patchValue(changes ['editObj'] ['currentValue'])
      this.isInEditMode = true
    }
  }

  onUpdate(){
    if(this.postForm.valid){
    let updatedObj :Ipost={
      ...this.postForm.value,
      id:this.editObj.id
    }
    this.emitUpdatedPost.emit(updatedObj)
    this.isInEditMode = false
    this.postForm.reset()
  }
}

onAdd(){
  if(this.postForm.valid){
    let postObj:Ipost = {
      ...this.postForm.value,
      id:Date.now().toString()
    }
    this.emitNewPost.emit(postObj)
    this.postForm.reset()
    }
}

}
