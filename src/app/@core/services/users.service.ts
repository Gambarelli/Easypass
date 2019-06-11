import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this.db = db;
   }

   createArea(user: any){
    this.db.collection('users').add({
      name: user['name'],
      resId: user['resId'],
      typeId: user['typeId'],
      uid: user['uid']
  })
  .then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

deleteUser(){

}

editUser(){

}

getUser(): Observable<any[]>{
  return this.db.collection('users').valueChanges();
}
}
