import { Routes } from '@angular/router';

export const routes: Routes = [{path:'',loadChildren:()=>import('./modules/y-routing.module').then(e=>e.YRoutingModule)}];
