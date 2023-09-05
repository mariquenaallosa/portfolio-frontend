import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ResumenComponent } from './components/resumen/resumen.component';
// Router
const routes: Routes = [
  {path:'inicio', component: HomeComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'resumen', component: ResumenComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
  {path:'login', component: LoginComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
