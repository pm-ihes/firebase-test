import { Injectable, NgZone, inject } from '@angular/core';
import { Auth, onAuthStateChanged, user } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData!: any;
  constructor(private fireauth: AngularFireAuth, private db: AngularFirestore, private router: Router, private auth: Auth, private toastr: ToastrService) { 
    


    onAuthStateChanged(this.auth,(user: any)=>{
      if(user){
        this.UserData = user;
        localStorage.setItem('user', JSON.stringify(this.UserData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

  //get User from firebase
  getAuthFire () {
    return this.auth.currentUser;
  }

  //get User from local storage
  getAuthLokal () {
    const token = localStorage.getItem('user');
    const user = JSON.parse(token as string);
    return user;
  }

  //login method
  login(email: string, password: string) {
    //this.fireauth.setPersistence(this.firebase.auth.Auth.Persistence.SESSION)

    this.fireauth.signInWithEmailAndPassword(email, password).then( cred => {
      

      localStorage.setItem('token', 'true');

      if(cred.user?.emailVerified){
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['verify-email'], {
          queryParams: { email: email },
        });
      }
    }, err => {
      this.toastr.error('Überprüfen Sie Ihre Anmeldedaten', 'Fehler beim Login:', {positionClass: 'toast-bottom-right'});
      this.router.navigate(['login']);
    })
  }

  //register method
  register(firstname: string, lastname: string, email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(cred => {
      this.sendEmailForVerification(cred.user);
      return this.db.collection('users').doc(cred.user?.uid).set({
        firstname: firstname,
        lastname: lastname,
        email: email
      })
    }, err => {
      alert(err.message);
      this.router.navigate(['register']);
    });
  }

  //sign-out method
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }, err => {
      alert(err.message);
    })
  }

  //email verification
  sendEmailForVerification(user: any){
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['verify-email'], {
        queryParams: { email: user.email },
      })
    }, (err: any) => {
      alert('Somethin went wront. Not able to send mail');
    })
  }

  //user authentication
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('user')
    const user = JSON.parse(token as string);
    return user !== null ? true : false;
  }

}
