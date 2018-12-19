import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer2',
  templateUrl: './customer2.component.html',
  styleUrls: ['./customer2.component.css']
})
export class Customer2Component implements OnInit {
  firstname: string = "default";
  lastname: string = "default";
  birthdate: string = "default";
  username: string = "default";
  password: string = "default";
  phonenumber: string = "default";
  phonetype: string = "default";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params=> {
        this.firstname = params['firstname'];
        this.lastname = params['lastname'];
        this.birthdate = params['birthdate'];
        this.username = params['username'];
        this.password = params['password'];
        this.phonenumber = params['phonenumber'];
        this.phonetype = params['phonetype'];
      }
    );
  }
}
