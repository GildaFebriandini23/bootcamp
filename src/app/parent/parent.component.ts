import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  first_name =""
  last_name=""
  constructor() { }

  ngOnInit() {
  }

  onPencet(event){
    console.log(event);
  //  this.first_name = ""
  //  this.last_name=""
  }

  // prosesResult(event){
  //   this.first_name =""
  // } 
}
 