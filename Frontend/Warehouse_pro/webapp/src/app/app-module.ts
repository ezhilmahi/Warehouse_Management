import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { BookingComponent } from './booking/booking';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { TrackingComponent } from './tracking/tracking';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { Register } from './register/register';
import { Login } from './login/login';
import { AdminPanel } from './admin-panel/admin-panel';
import { UserPanel } from './user-panel/user-panel';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  declarations: [
    App,
    Navbar,
    Home,
    Footer,
    TrackingComponent,
    Register,
    Login,
    AdminPanel,
    UserPanel,
    BookingComponent
    
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,  
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule ,
    MatTableModule,
    BrowserAnimationsModule,
      FormsModule,
      MatSelectModule,
      MatInputModule,
      MatFormFieldModule,


   
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
