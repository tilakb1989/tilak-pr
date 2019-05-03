import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthLoggedGuard } from './services/auth/auth-logged.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    resolve: [AuthLoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
