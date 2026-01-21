import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit,OnChanges {
isInEditMode:boolean=false
@ViewChild('stdForm')stdForm!:NgForm
@Output() emitNewStd:EventEmitter<Istd>=new EventEmitter<Istd>()
@Input() getEditstd!:Istd
@Output() emitUpdatedObj:EventEmitter<Istd>=new EventEmitter<Istd>()  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(!! changes['getEditstd'] ['currentValue']){
      this.isInEditMode = true
      this.stdForm.form.patchValue(changes ['getEditstd'] ['currentValue'])
    }
  }

  ngOnInit(): void {
  }

  onstdAdd(){
    if(this.stdForm.valid){
      let stdObj : Istd = {...this.stdForm.value,
      id:Date.now()
    }
    // console.log(stdObj);
     this.emitNewStd.emit(stdObj)
    this.stdForm.reset()
    }
  }

 onStdUpdate(){
    if(this.stdForm.valid){
      let updateObj:Istd={
        ...this.stdForm.value,
        id:this.getEditstd.id
      }
      this.emitUpdatedObj.emit(updateObj)
      this.isInEditMode = false
      this.stdForm.reset() 
  }
}
}