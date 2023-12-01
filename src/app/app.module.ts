import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PsychologistsComponent } from './psychologists/psychologists.component';
import { TestYourselfComponent } from './test-yourself/test-yourself.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { PartnersComponent } from './home/components/partners/partners.component';
import { HowItWorksComponent } from './home/components/how-it-works/how-it-works.component';
import { PsychologistsListComponent } from './home/components/psychologists-list/psychologists-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PsychologistsComponent,
    CommunityComponent,
    TestYourselfComponent,
    InstitutionalComponent,
    BlogComponent,
    LoginRegisterComponent,
    HeroComponent,
    PartnersComponent,
    HowItWorksComponent,
    PsychologistsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
