import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class AreasService {

  private db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
   }

  createArea(area: any){
    this.db.collection('areas').add({
      areaName: area['areaName'],
      resId: area['resId'],
      userQty: area['userQty'],
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  deleteArea(){

  }

  editArea(){

  }

  getAreas(): Observable<any[]>{
    return this.db.collection('areas').valueChanges();
  }
}
