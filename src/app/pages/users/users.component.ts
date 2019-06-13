import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../@core/services/users.service';
import { Observable } from 'rxjs';
import { AreasService } from '../../@core/services/areas.service';
import { NbDialogService } from '@nebular/theme';
import { CreateUserDialogComponent } from '../../pages/component/dialog/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'typeId', 'actions'];
  usersList: any[];
  usersService: UsersService;

  constructor( userService: UsersService, private dialogService: NbDialogService) {
    this.usersService = userService;
   }

   crearUsuario(){
    this.dialogService.open(CreateUserDialogComponent)
    .onClose.subscribe(data => this.usersService.createUser(data));
  }

  borrarUsuario(item){
    if (window.confirm('Are you sure you want to delete?')) {
      // this.usersService.deleteUser(item).subscribe();
     }
  }

  ngOnInit() {
    const usuarios: Observable<any[]> = this.usersService.getUser();

    usuarios.subscribe(item => {
      this.usersList = item.docs.map(actions => {
        const data = actions.data() as any;
        const id = actions.id;
        return { id, ...data };
      });
    });

    // usuarios.subscribe({
    //   next(item) {
    //     item.docs.forEach(actions => {
    //           const data = actions.data() as any;
    //           const id = actions.id;
    //           this.userList.push({ id, ...data });
    //     });
    //    }
    // });


    // usuarios.forEach(item => {
    //   //la variable item aqui tiene el arreglo que viene del servicio
    //   // console.log(item);
    //       let userList: any[] = this.usersList;
    //       item.docs.forEach(actions => {
    //         const data = actions.data() as any;
    //         const id = actions.id;
    //         userList.push({ id, ...data });
    //   });
    //   this.usersList = userList;

    // });

  }


}
