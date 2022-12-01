import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotesService } from './services/notes.service';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
//import { CanActivateRouteGuard } from './can-activate-route.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes= [
  {path: 'login',component: LoginComponent},
//  {path: 'dashboard',component: DashboardComponent, canActivate: [cancelActivateRouterGuard]},
{path: 'dashboard',component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,),
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    // MatCardTitle,
    // MatCardContent
    //RouterModule.forRoot(routes)
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
