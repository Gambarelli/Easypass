import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent  } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestPasswordComponent } from './pages/request-password/request-password.component';
import { ResetComponent } from './pages/reset/reset.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LoginComponent,
    //   },
    //   {
    //     path: 'login',
    //     component: LoginComponent,
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent,
    //   },
    //   {
    //     path: 'logout',
    //     component: LogoutComponent,
    //   },
    //   {
    //     path: 'request-password',
    //     component: RequestPasswordComponent,
    //   },
    //   {
    //     path: 'reset-password',
    //     component: ResetComponent,
    //   },
    // ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
