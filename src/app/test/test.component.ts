import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testData: string = "Hallo Test"; //buat variabel untuk di panggil di html
  testDataTwoWays = "test";
  showChild:boolean;
  input_satu = "";
  
  public CData: number;
  constructor() { }

  ngOnInit() {
  }

  testAlert(){
    this.testData = this.testDataTwoWays;
    alert(this.testDataTwoWays);
  }

  show()
  {
  this.showChild=true;
  }

  hide()
  {
  this.showChild=false;
  }

  // onPencet(event){
  //   console.log(event);
  // }

}
 