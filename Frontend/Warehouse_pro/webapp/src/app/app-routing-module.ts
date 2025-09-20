import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { TrackingComponent } from './tracking/tracking';
import { Register } from './register/register';
import { Login } from './login/login';
import { UserPanel } from './user-panel/user-panel';
import { AdminPanel } from './admin-panel/admin-panel';
import { BookingComponent } from './booking/booking';
import { AuthGuard } from './auth-guard'; 

const routes: Routes = [
  { path: '', component: Home },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { 
    path: 'user', 
    component: UserPanel,
    canActivate: [AuthGuard],
    data: { roles: ['user'] } 
  },
  {
    path: 'admin',
    component: AdminPanel,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  { path: 'booking', component: BookingComponent },
  { path: 'tracking', component: TrackingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }