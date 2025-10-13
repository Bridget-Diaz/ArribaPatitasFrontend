import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoFormComponent } from './productos/producto-form/producto-form.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // de tantos nombres 
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ServicioListComponent } from './serviciosPet/servicio-list/servicio-list.component';
import { ServicioFormComponent } from './serviciosPet/servicio-form/servicio-form.component';
import { ClientesComponent } from './clientes/clientes.component';
//https://www.youtube.com/watch?v=RB6PStwqSGk

//se ve ordenado?
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'panel',component:PanelAdminComponent,canActivate:[AuthGuard]},
  { path: 'productos', component: ProductosComponent, canActivate: [AuthGuard] },
  { path: 'productos/nuevo', component: ProductoFormComponent, canActivate: [AuthGuard] },
  { path: 'productos/editar/:id', component: ProductoFormComponent, canActivate: [AuthGuard] },
  { path: 'mascotas', component: MascotasComponent, canActivate: [AuthGuard] }, 
  { path: 'servicios', component: ServicioListComponent, canActivate: [AuthGuard] },
  { path: 'servicios/nuevo', component: ServicioFormComponent, canActivate: [AuthGuard] },
  { path: 'servicios/editar/:id', component: ServicioFormComponent, canActivate: [AuthGuard] },
  { path: 'clientes',component:ClientesComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

//aea
