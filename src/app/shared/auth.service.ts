import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then( cred => {
      localStorage.setItem('token', 'true');

      if(cred.user?.emailVerified){
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['verify-email']);
      }
    }, err => {
      alert(err.message);
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
      this.router.navigate(['verify-email'])
    }, (err: any) => {
      alert('Somethin went wront. Not able to send mail');
    })
  }


}
