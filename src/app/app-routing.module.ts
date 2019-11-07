import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {ViewComponent} from './view/view.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AudioComponent} from './audio/audio.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'view/:id', component:ViewComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login',component: LoginComponent},
  // {path: 'view/:id/audio#', component: AudioComponent},
  {path: '**', component:AudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
