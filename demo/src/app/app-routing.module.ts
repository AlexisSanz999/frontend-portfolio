import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperiencieComponent } from './components/experience/new-experiencie/new-experiencie.component';
import { EditExperiencieComponent } from './components/experience/edit-experiencie/edit-experiencie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newxp', component: NewExperiencieComponent},
  { path: 'editxp/:id', component: EditExperiencieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
