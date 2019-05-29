import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AreasService } from '../../@core/services/areas.service';
import { LocalDataSource } from '../../../../node_modules/ng2-smart-table';

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

// tslint:disable-next-line: comment-format
  //Aqui se define las opciones y el titulo de la tabla
  settings = {
    delete: {
      confirmDelete: true,
    },
    add: {
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      areaName: {
        title: 'Residencia',
      },
      resId: {
        title: 'Id',
      },
      uid: {
        title: 'uid',
      },
      userQty: {
        title: 'Cantidad de  usuarios',
      },
    },
  };

  //Este es el arreglo que va en la tabla
  areasList: LocalDataSource;
  areasService: AreasService;

  constructor(areasService: AreasService) {
    this.areasService = areasService;
  }

  ngOnInit() {
    const areas: Observable<any[]> = this.areasService.getAreas();
    areas.forEach(item => {
      //la variable item aqui tiene el arreglo que viene del servicio
      this.areasList = new LocalDataSource(item);
    });

  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      this.areasService.createArea(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
