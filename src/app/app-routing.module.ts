import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUiComponentComponent} from "./home/dashboard/image-ui-component/image-ui-component.component";
import {RouterModule,Routes} from "@angular/router";
import {DashboardComponent} from "./home/dashboard/dashboard.component";


const routes: Routes = [
  {
    path: "dashboard/images",
    component: DashboardComponent
    // pathMatch: "full",
   },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
