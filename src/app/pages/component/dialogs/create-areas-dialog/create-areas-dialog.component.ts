import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'create-areas-dialog',
  templateUrl: './create-areas-dialog.component.html',
  styleUrls: ['./create-areas-dialog.component.scss']
})
export class CreateAreasDialogComponent implements OnInit {

  constructor(protected dialogRef: NbDialogRef<CreateAreasDialogComponent>) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  submit(name, resId) {
    const data: any = {};
    data.name = name;
    data.resId = resId;
    this.dialogRef.close(data);
  }
}
