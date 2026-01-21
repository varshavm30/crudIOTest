import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../model/post';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
postArr:Array<Ipost>= [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    }
  ]
  constructor(
    private _snackBar:SnackBarService
  ) { }
getEditObj!:Ipost
  ngOnInit(): void {
  }

  getNewPost(post:Ipost){
    this.postArr.unshift(post)
    this._snackBar.openSnackBar('Post added successfully')
  }

getRemovePost(removeId:Ipost){
  let getIndex = this.postArr.findIndex(post=>post.id === removeId.id)
  this.postArr.splice(getIndex,1)
  this._snackBar.openSnackBar(`The post with id ${removeId.id} removed successfully`)
}

getEditPost(post:Ipost){
  this.getEditObj = post
}

getUpdatePost(post:Ipost){
  let getIndex = this.postArr.findIndex(p=>p.id === post.id)
  this.postArr[getIndex] = post
  this._snackBar.openSnackBar('Post updated successfully')
}

}