import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login-services/login.service';
import { Login } from '../login';
import { provideNgxMask } from 'ngx-mask';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [provideNgxMask()],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.removerToken(); 
  }

  authenticate(): void {
    this.loginService.authenticate(this.login).subscribe({
      next: (user) => {
        this.handleAuthenticationSuccess(user);
      },
      error: (error) => {
        this.handleAuthenticationError(error);
      }
    });
  }

  private handleAuthenticationSuccess(user: any): void {
    this.loginService.addToken(user.token);
    this.router.navigate(['/dashboard']);
  }

  private handleAuthenticationError(error: any): void {
    console.error('Authentication failed:', error);
  }
}
