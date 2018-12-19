import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestlagiComponent } from './test/testlagi.component';

import {FormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Customer2Component } from './customer/customer2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestlagiComponent,
    CustomerComponent,
    Customer2Component,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
