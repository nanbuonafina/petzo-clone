import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:
 Router // Router injetado no construtor
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido:', response);
          this.router.navigate(['/home']); // Redireciona para /home após o login
        },
        error: (error) => {
          console.error('Erro no login:', error);
          this.handleLoginError(error);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  private handleLoginError(error: any): void {
    if (error?.error?.message) {
      this.errorMessage = error.error.message;
    } else {
      this.errorMessage = 'Ocorreu um erro durante o login. Tente novamente.';
    }
    this.isLoading = false;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.loginForm.get(fieldName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `Campo obrigatório`;
      }
      if (control.errors['email']) {
        return 'Email inválido';
      }
      if (control.errors['minlength']) {
        return 'Mínimo de 6 caracteres';
      }
    }
    return '';
  }
}