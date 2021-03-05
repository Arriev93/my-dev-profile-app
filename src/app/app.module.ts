import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { TopJumbotronComponent } from './top-jumbotron/top-jumbotron.component';
import { EmailComponent } from './email/email.component';
import { WorkHistoryComponent } from './work-history/work-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopNavbarComponent,
    ProjectsComponent,
    ContactComponent,
    CurriculumVitaeComponent,
    TopJumbotronComponent,
    EmailComponent,
    WorkHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
