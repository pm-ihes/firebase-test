import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection, getDocs } from 'firebase/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, retry } from 'rxjs';
import { Case } from 'src/app/model/interfaces/case';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  case: Observable<any>;
  cases: Array<Case> = [];

  constructor(private db: AngularFirestore, private toastr: ToastrService, private router: Router, private firestore: Firestore) {
    this.case = this.db.collection('makler_case').valueChanges();
   }

  createCase(firstname: string, lastname: string, email: string, kzn: string){
    return this.db.collection('makler_case').doc().set({
      firstname: firstname,
      lastname: lastname,
      email: email,
      kzn: kzn
    }).then( () => {
      this.router.navigate(['dashboard']);
      this.toastr.success('Der eingetragene Fall wurde erfolgreich an uns vermittelt', 'Erfolgreich angelegt!', { positionClass: 'toast-bottom-right' });
    }, err => {
      this.toastr.error('Probieren Sie es nocheinmal oder wenden Sie sich an unseren Support', 'Fehler beim Speichern!', { positionClass: 'toast-bottom-right'});
      this.router.navigate(['case_view']);
    });
  }

  getCases () {
    this.case.subscribe(data => {
      this.cases.push(data);
    });
    return this.cases;
  }
}
