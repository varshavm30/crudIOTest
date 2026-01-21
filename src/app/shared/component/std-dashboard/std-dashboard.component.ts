import { Component, OnInit } from '@angular/core';
import { Istd } from '../../model/std';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.scss']
})
export class StdDashboardComponent implements OnInit {
stdArr:Array<Istd> = [
  {
    id: '101',
    fname: "Neha",
    lname: "Joshi",
    email: "neha.joshi@gmail.com",
    contact: "9876501234"
  },
  {
    id: '102',
    fname: "Rohit",
    lname: "Deshmukh",
    email: "rohit.deshmukh@gmail.com",
    contact: "9123409876"
  },
  {
    id: '103',
    fname: "Pooja",
    lname: "Nair",
    email: "pooja.nair@gmail.com",
    contact: "9988123456"
  },
  {
    id: '104',
    fname: "Suresh",
    lname: "Iyer",
    email: "suresh.iyer@gmail.com",
    contact: "9012678901"
  },
  {
    id: '105',
    fname: "Anjali",
    lname: "Bansal",
    email: "anjali.bansal@gmail.com",
    contact: "8899001122"
  }
]
  constructor(
    private _snackBar:SnackBarService
  ) { }

  getNewStd(std:Istd){
    this.stdArr.unshift(std)
    this._snackBar.openSnackBar('Student added successfully')
  }
  ngOnInit(): void {
  }

  getRemoveId(id:string){
    let getIndex = this.stdArr.findIndex(std=>std.id === id)
    this.stdArr.splice(getIndex,1)
    this._snackBar.openSnackBar(`The student with id ${id} removed successfully`)
  }

  editStd!:Istd
  getEditstd(std:Istd){
   this.editStd = std
  }

  getUpdatedStd(std:Istd){
    let getIndex = this.stdArr.findIndex(s=>s.id === std.id)
    this.stdArr[getIndex] = std
    this._snackBar.openSnackBar('Student updated successfully')
  }
}
