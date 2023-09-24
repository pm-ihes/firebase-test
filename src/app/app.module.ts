import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgIf } from '@angular/common';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { OutterHeaderComponent } from './components/outter-header/outter-header.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FooterInformationComponent } from './components/footer-information/footer-information.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ThemePalette} from '@angular/material/core';
import { InnerHeaderComponent } from './components/inner-header/inner-header.component';
import { DashboardElementComponent } from './components/dashboard/dashboard-element/dashboard-element.component';
import {MatDividerModule} from '@angular/material/divider';
import { ToastrModule } from 'ngx-toastr';
import { CaseCreateComponent } from './components/case-create/case-create.component';
import { CaseViewComponent } from './components/case-view/case-view.component';
import { CaseViewElementComponent } from './components/case-view/case-view-element/case-view-element.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    OutterHeaderComponent,
    VerifyEmailComponent,
    FooterInformationComponent,
    LoadingIndicatorComponent,
    InnerHeaderComponent,
    DashboardElementComponent,
    CaseCreateComponent,
    CaseViewComponent,
    CaseViewElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    MatProgressSpinnerModule,
    MatDividerModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
