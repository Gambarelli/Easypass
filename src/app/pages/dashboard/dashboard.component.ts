import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {


  Accesos: Observable<any[]>;

// tslint:disable-next-line: one-line
  constructor(db: AngularFirestore){
    this.Accesos = db.collection('access').valueChanges();
    this.Accesos.forEach(item => {

      console.log(item);
    });
  }
}
