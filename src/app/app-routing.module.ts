import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { SecondComponentDeactivateGuard } from './second-component-deactivate.guard';
import { ChildOneComponentActivateGuard } from './child-one-component-activate.guard';


const routes: Routes = [
  {path : 'first', component : FirstComponent},
  {path : 'second', component : SecondComponent, canDeactivate:[SecondComponentDeactivateGuard]},
  {path : 'third',
      children: [
        {path : '', component : ThirdComponent},
        {path : 'one', component : ChildOneComponent, canActivate:[ChildOneComponentActivateGuard]}
      ]
  },
  { path: 'fourth', loadChildren: () => import('./fourth/fourth.module').then(m => m.FourthModule) },
  { path: '**', redirectTo : '/first'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
