import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourthComponent } from './fourth.component';
import { ChildTwoComponent } from '../child-two/child-two.component';

const routes: Routes = [
  { path: '', component: FourthComponent}, 
  { path: 'two', component : ChildTwoComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthRoutingModule { }
