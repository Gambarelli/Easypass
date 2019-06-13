import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AreasService } from '../../@core/services/areas.service';
import { NbDialogService } from '@nebular/theme';
import { CreateAreasDialogComponent } from '../component/dialogs/create-areas-dialog/create-areas-dialog.component';


export interface Residencia {
  areaName: string;
  resId: string;
  userQty: string;
}

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  displayedColumns: string[] = ['areaName', 'resId', 'userQty', 'actions'];

  //Este es el arreglo que va en la tabla
  areasList: Residencia[];
  areasService: AreasService;

  constructor(areasService: AreasService, private dialogService: NbDialogService) {
    this.areasService = areasService;
  }

  crearResidencia(){
    this.dialogService.open(CreateAreasDialogComponent)
    .onClose.subscribe(data => this.areasService.createArea(data));
  }

  borrarResidencia(item){
    if (window.confirm('Are you sure you want to delete?')) {
      this.areasService.deleteArea(item).subscribe();
     }
  }

  ngOnInit() {
    const areas: Observable<Residencia[]> = this.areasService.getAreas();
    areas.forEach(item => {
      //la variable item aqui tiene el arreglo que viene del servicio
      console.log(item);
      this.areasList = item;
    });

  }

}
