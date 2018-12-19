import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  showChild:boolean;

  @Input()
  first_name : string;
  last_name : string;
  

  @Output()
  reset : EventEmitter<string> = new EventEmitter<string>();
  // result = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onReset(){
    this.reset.emit("hallo emit");
  }

  show()
  {
  this.showChild=true;
  }

  hide()
  {
  this.showChild=false;
  }


}
 