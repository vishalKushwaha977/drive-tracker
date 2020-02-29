import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {HomeComponent } from './home/home.component';
import { CreatedriveComponent } from './createdrive/createdrive.component';
import { ViewDriveComponent } from './createdrive/view-drive/view-drive.component';
import { UpdateDriveComponent } from './createdrive/view-drive/update-drive/update-drive.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'main',component:MainNavComponent,
  children:[
  {path:'home',component:HomeComponent},
  {path: 'create',component:CreatedriveComponent},
  {path:'view',component:ViewDriveComponent},
  {path:'edit',component:UpdateDriveComponent},
  {path:'Register',component:RegisterComponent},
  {path:'',redirectTo:'/main/home',pathMatch:'full'}
  ]},
  //{path:'child',loadChildren:'/driveAppmodule/app-module.module#driveAppmodule'},
  {path:'',redirectTo:'/login',pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
