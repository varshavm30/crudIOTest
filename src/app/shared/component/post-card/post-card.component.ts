import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Ipost } from '../../model/post';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() postObj!:Array<Ipost>
@Output() emitRemovePost = new EventEmitter<Ipost>()
@Output() emitEditPost = new EventEmitter<Ipost>()
  constructor(
    private _matDIalog:MatDialog
  ) { }

  ngOnInit(): void {
  }
  trackById(index: number, post: Ipost) {
  return post.id
 }

onRemove(post:Ipost){
 let matConfig= new MatDialogConfig()
 matConfig.disableClose = true
 matConfig.data = `Are you sure you want to remove post `
  
  let matDialogRef=this._matDIalog.open(GetConfirmComponent,matConfig)
  matDialogRef.afterClosed()
  .subscribe(res=>{
    if(res){
      this.emitRemovePost.emit(post)
    }
  })
}

OnEdit(post:Ipost){
  this.emitEditPost.emit(post)
}

}
