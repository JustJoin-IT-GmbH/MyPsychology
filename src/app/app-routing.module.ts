import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component';
import { InstitutionalComponent } from './institutional/institutional.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { PsychologistsComponent } from './psychologists/psychologists.component';
import { TestYourselfComponent } from './test-yourself/test-yourself.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'psychologists', component: PsychologistsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'test-yourself', component: TestYourselfComponent },
  { path: 'institutional', component: InstitutionalComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login-register', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
