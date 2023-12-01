import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { HomeComponent } from './home/home.component'; // adjust the path as needed
import { InstitutionalComponent } from './institutional/institutional.component';
import { LoginComponent } from './login/login.component';
import { PsychologistsComponent } from './psychologists/psychologists.component';
import { RegisterComponent } from './register/register.component';
import { TestYourselfComponent } from './test-yourself/test-yourself.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'psychologists', component: PsychologistsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'test-yourself', component: TestYourselfComponent },
  { path: 'institutional', component: InstitutionalComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
