import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerData: string = "Hallo Test"; //buat variabel untuk di panggil di html
  customerDataTwoWays = "inputan";
  firstname = "firstname";
  lastname = "lastname";
  birthdate = "birthdate";
  username = "username";
  password = "password";
  phonenumber = "phonenumber";
  phonetype = "phonetype";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  customerAlert(){
    this.customerData = this.customerDataTwoWays;
    alert(this.customerDataTwoWays);
  }

  ok(){
    this.router.navigate(['/customer2',{firstname: this.firstname, lastname: this.lastname, birthdate: this.birthdate,
      username: this.username, password: this.password, phonenumber: this.phonenumber, phonetype: this.phonetype }]);
  }

}

