import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// tslint:disable-next-line: import-spacing
import { Router } from  '@angular/router';
// tslint:disable-next-line: import-spacing
import { User } from  'firebase';

@Injectable()
// {providedIn: 'root'}
export class AuthService {

  user: User;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
   }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    });
  }

  async  login(email:  string, password:  string) {

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