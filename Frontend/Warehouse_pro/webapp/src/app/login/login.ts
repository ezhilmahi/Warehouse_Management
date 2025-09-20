import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import gsap from 'gsap';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements AfterViewInit {
  @ViewChild('card', { static: false }) card!: ElementRef;

  credentials = {
    email: '',
    password: ''
  };

  maskedEmail = '';
  errorMessage = '';
  showPassword = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngAfterViewInit(): void {
    gsap.from(this.card.nativeElement, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: 'power3.out'
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onEmailInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const rawEmail = input.value;

    this.credentials.email = rawEmail;

    const [local, domain] = rawEmail.split('@');
    if (!local || !domain) {
      this.maskedEmail = rawEmail;
      return;
    }

    const maskedLocal =
      local.length > 1 ? local[0] + '*'.repeat(local.length - 1) : '*';
    this.maskedEmail = `${maskedLocal}@${domain}`;
  }

  onLogin() {
    this.http.post<any>('http://localhost:8080/api/auth/login', this.credentials)
      .subscribe({
        next: (response) => {
          const role = response.role?.trim().toLowerCase() || 'user';
          localStorage.setItem('userRole', role);
          this.router.navigate([role === 'admin' ? '/admin' : '/user']);
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Login failed';
        }
      });
  }
}
