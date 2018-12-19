import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestlagiComponent } from './test/testlagi.component';
import { CustomerComponent } from './customer/customer.component';
import { Customer2Component } from './customer/customer2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child.component';

const routes: Routes = [
  {
    path:'test',
    component: TestComponent
  },
  {
    path:'testlagi',
    component: TestlagiComponent
  },
  {
    path:'customer',
    component: CustomerComponent
  },
  {
    path:'customer2',
    component: Customer2Component
  },
  {
    path:'parent',
    component: ParentComponent
  },
  {
    path:'child',
    component: ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
