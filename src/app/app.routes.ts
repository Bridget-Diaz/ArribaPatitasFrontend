import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoFormComponent } from './productos/producto-form/producto-form.component';
import { MascotasComponent } from './servicios/mascotas/mascotas/mascotas.component'; 
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; 
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ServicioListComponent } from './servicios/servicios/servicio-list/servicio-list.component';
import { ServicioFormComponent } from './servicios/servicios/servicio-form/servicio-form.component';
import { ClientesComponent } from './servicios/Clientes/clientes/clientes.component'; 


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


