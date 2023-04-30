import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperiencieComponent } from './components/experience/new-experiencie/new-experiencie.component';
import { EditExperiencieComponent } from './components/experience/edit-experiencie/edit-experiencie.component';
import { NewEducationComponent } from './components/education/new-educacion/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newxp', component: NewExperiencieComponent},
  { path: 'editxp/:id', component: EditExperiencieComponent},
  { path: 'newedu', component: NewEducationComponent},
  { path: 'editedu/:id', component: EditEducationComponent},
  { path: 'newskills', component: NewSkillsComponent},
  { path: 'editskills/:id', component: EditSkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
