/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { RequestPasswordComponent } from './pages/request-password/request-password.component';
import { ResetComponent } from './pages/reset/reset.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './@core/utils/auth.guard';
import { AreasService } from './@core/services/areas.service';
import { UsersService } from './@core/services/users.service'
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CreateAreasDialogComponent } from './pages/component/dialogs/create-areas-dialog/create-areas-dialog.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, LogoutComponent, RegisterComponent, RequestPasswordComponent, ResetComponent, 
    CreateAreasDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    Ng2SmartTableModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthService,
    AuthGuard,
    AreasService,
    UsersService
  ],
  entryComponents: [CreateAreasDialogComponent],
})
export class AppModule {
}
