import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperiencieComponent } from './components/experience/new-experiencie/new-experiencie.component';
import { EditExperiencieComponent } from './components/experience/edit-experiencie/edit-experiencie.component';
import { NewEducationComponent } from './components/education/new-educacion/new-education.component';
import { EditEducationComponent } from './components/education/edit-education/edit-education.component';
import { EditSkillsComponent } from './components/skills/edit-skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills/new-skills.component';
import { EditAboutComponent } from './components/about/edit-about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewProyectComponent } from './components/proyects/new-proyect/new-proyect.component';
import { EditProyectComponent } from './components/proyects/edit-proyect/edit-proyect.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperiencieComponent,
    EditExperiencieComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditSkillsComponent,
    NewSkillsComponent,
    EditAboutComponent,
    NewProyectComponent,
    EditProyectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
