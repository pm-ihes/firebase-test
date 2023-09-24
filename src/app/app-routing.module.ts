import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { authGuard } from './shared/guard/auth.guard';
import { outerauthGuard } from './shared/guard/outerauth.guard';
import { CreateCaseComponent } from './components/create-case/create-case.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [outerauthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [outerauthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },

  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'loading',
    component: LoadingIndicatorComponent
  },
  {
    path: 'create_case',
    component: CreateCaseComponent,
    canActivate: [authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
