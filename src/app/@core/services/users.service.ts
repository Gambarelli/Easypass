import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private db: AngularFirestore;
  constructor(db: AngularFirestore, private authService: AuthService) {
    this.db = db;
   }

   createUser(user: any){
   this.authService.doRegister(user).then(data => {
    let resId = JSON.parse(localStorage.getItem('user')).resId;
    this.db.collection('users').add({
      name: user['name'],
      resId: resId,
      typeId: user['typeId'],
      uid: data.user.uid
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
   });
  
}

deleteUser(usuario){

}

editUser(){

}

getUser(): Observable<any[]>{
  const user: any = JSON.parse(localStorage.getItem('user'));
   return Observable.create(observer => this.db.collection('users').ref.where('resId', '==', user.resId).onSnapshot(observer));
  }

  getUsers(): Observable<any[]>{
    return this.db.collection('users').snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as any;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
  });
  }
}
