import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { AuthLoggedGuard } from './services/auth/auth-logged.guard';
import { CollectionsModule } from './modules/collections/collections.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CollectionsModule,
    FormsModule,
  ],
  providers: [AuthLoggedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
