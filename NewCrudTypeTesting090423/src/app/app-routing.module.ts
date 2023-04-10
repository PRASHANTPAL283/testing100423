import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';

const routes: Routes = [
  {path:'display',component:DisplayComponentComponent},
  {path:'post',component:PostComponentComponent},
  {path:'update',component:UpdateComponentComponent},
  {path:'update/:id',component:UpdateComponentComponent},
  {path:'',redirectTo:'display',pathMatch:'full'},
  {path:'**',redirectTo:'display',pathMatch:'full'},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
