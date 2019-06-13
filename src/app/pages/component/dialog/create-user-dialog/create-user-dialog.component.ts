import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<CreateUserDialogComponent>) { }

  selectedItem = '';

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  submit(identidad, nombre, correo, contraseña) {
    const data: any = {};
    data.identidad = identidad;
    data.name = nombre;
    data.email = correo;
    data.password = contraseña;
    data.typeId = this.selectedItem;
    this.dialogRef.close(data);
  }

}
