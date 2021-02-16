import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { CuentaComponent } from './components/cuenta/cuenta.component';

import { AuthGuard } from './guards/auth.guard';
import { GeneradorReportesComponent } from './components/generador-reportes/generador-reportes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home' , component: HomeComponent,canActivate: [AuthGuard]},
  {path: 'cuentas', component: CuentasComponent,canActivate: [AuthGuard]},
  {path: 'cuenta', component: CuentaComponent},
  {path: 'cuenta/:id', component: CuentaComponent},
  {path: 'generadorReportes', component: GeneradorReportesComponent},

  {path: '**' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
