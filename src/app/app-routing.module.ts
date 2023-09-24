import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { authGuard } from './shared/guard/auth.guard';
import { outerauthGuard } from './shared/guard/outerauth.guard';
import { CaseCreateComponent } from './components/case-create/case-create.component';
import { CaseViewComponent } from './components/case-view/case-view.component';

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
    path: 'case_create',
    component: CaseCreateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'case_view',
    component: CaseViewComponent,
    canActivate: [authGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
