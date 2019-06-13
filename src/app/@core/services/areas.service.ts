import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AreasService {

  private db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
   }

  createArea(area: any){
    this.db.collection('areas').add({
      areaName: area['name'],
      resId: area['resId'],
      userQty: "0",
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
  }

  deleteArea(area: any) : Observable<any>{
    return Observable.fromPromise(this.db.collection('areas').doc(area.id).delete()
    .then(function() {
      console.log("Document successfully deleted!");
     })
    .catch(function(error) {
      console.error("Error deleting document: ", error);
    }));
  }

  editArea(){

  }

  getAreas(): Observable<any[]>{
    return this.db.collection('areas').snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as any;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }
}
