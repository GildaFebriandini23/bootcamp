import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testlagi',
  templateUrl: './testlagi.component.html',
  styleUrls: ['./testlagi.component.css']
})
export class TestlagiComponent implements OnInit {
// testDataLagi: number = 1234;

// @Input() nilai:string;

@Input() PData:number;
@Output() childEvent = new EventEmitter();
constructor() { }
onChange(value) {
  this.childEvent.emit(value);
}

// @Output()
// reset : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

// onReset(){
//   this.reset.emit("Hello Emmit");
// }

}
