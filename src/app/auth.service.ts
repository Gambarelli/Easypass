import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// tslint:disable-next-line: import-spacing
import { Router } from  '@angular/router';
// tslint:disable-next-line: import-spacing
import { User } from  'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
// {providedIn: 'root'}
export class AuthService {

  user: User;
  private db: AngularFirestore;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router, db: AngularFirestore) {

    this.db = db;
    this.afAuth.authState.subscribe(user => {
      if (user) {
        const usuarios: Observable<any[]> = this.getUser();
        usuarios.forEach(item => {
          let userEasyPassData = item.find(data => data.uid === user.uid);
          if (userEasyPassData != undefined) {
            this.user = Object.assign({}, user, userEasyPassData);
            localStorage.setItem('user', JSON.stringify(this.user, this.getCircularReplacer()));
          }
    });
      } else {
        localStorage.setItem('user', null);
      }
    });

   }

  doRegister(value) : Promise<any>{
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res)
      }, err => reject(err))
    });
  }

  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  getUser(): Observable<any[]>{
    return this.db.collection('users').snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as any;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  async login(email:  string, password:  string) {

    try {
        await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['pages/dashboard']);
    } catch (e) {
        alert('Error!'  +  e.message);
    }
    }

  async logout(){
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}


}
