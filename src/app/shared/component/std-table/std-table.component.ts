import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../model/std';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {
@Input()stdObj: Array<Istd>=[]
@Output() emitStdRemove:EventEmitter<string> = new EventEmitter<string>()
@Output() emitStdEdit:EventEmitter<Istd> = new EventEmitter<Istd>() 
trackById(index:number,std:Istd){
  return std.id
}
  constructor( private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }

  onEditStd(std:Istd){
     this.emitStdEdit.emit(std)  
  }
   
  

  onRemoveStd(std:Istd){
    let matConfig = new MatDialogConfig()
        matConfig.width = '500px'
        matConfig.data = `Are you sure you want to remove todoItem`
        matConfig.disableClose = true
        let matDialogRef=this._matDialog.open(GetConfirmComponent,matConfig)
        matDialogRef.afterClosed()
         .subscribe(flag =>{
           if(flag){
            this.emitStdRemove.emit(std.id)
           }
         })
  }

}
