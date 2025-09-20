import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {
  credentials = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  message = '';
  isError = false;

  constructor(private http: HttpClient) {}

  onRegister() {
    
    if (this.credentials.password !== this.credentials.confirmPassword) {
      this.message = 'Passwords do not match.';
      this.isError = true;
      return;
    }

    const payload = {
      email: this.credentials.email,
      password: this.credentials.password
    };

    this.http.post('http://localhost:8080/api/admin/register', payload, { responseType: 'text' })
      .subscribe({
        next: res => {
          this.message = res;
          this.isError = false;

         
          this.credentials.email = '';
          this.credentials.password = '';
          this.credentials.confirmPassword = '';
        },
        error: err => {
          this.message = err.error || 'Registration failed';
          this.isError = true;
        }
      });
  }
}
