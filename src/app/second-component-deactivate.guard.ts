import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecondComponent } from './second/second.component';

@Injectable({
  providedIn: 'root'
})
export class SecondComponentDeactivateGuard implements CanDeactivate<SecondComponent> {
  canDeactivate(
    component: SecondComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return component.canDeactivate() ? true : confirm("Are you sure you want to discard all the changes?");
  }
  
}
