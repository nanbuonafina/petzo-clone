import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^\d{14}$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getters para facilitar a validação no template
  get nameControl() { return this.registerForm.get('name'); }
  get cnpjControl() { return this.registerForm.get('cnpj'); }
  get emailControl() { return this.registerForm.get('email'); }
  get phoneControl() { return this.registerForm.get('phone'); }
  get passwordControl() { return this.registerForm.get('password'); }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    // Marca todos os campos como touched para mostrar os erros
    Object.keys(this.registerForm.controls).forEach(key => {
      const control = this.registerForm.get(key);
      control?.markAsTouched();
    });

    // Verifica se há erros de validação
    if (!this.registerForm.valid) {
      this.showValidationErrors();
      return;
    }

    // Se já estiver submetendo, não permite nova submissão
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    const user: User = {
      id: Date.now(),
      ...this.registerForm.value
    };

    this.authService.register(user).subscribe({
      next: (response) => {
        this.successMessage = response;
        this.registerForm.reset();
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (error) => {
        this.errorMessage = typeof error === 'string' 
          ? error 
          : 'Erro ao registrar. Tente novamente!';
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }

  private showValidationErrors(): void {
    const controls = this.registerForm.controls;
    
    // Verifica cada campo e mostra o primeiro erro encontrado
    if (controls['name'].errors) {
      if (controls['name'].errors['required']) {
        this.errorMessage = 'O nome é obrigatório.';
      } else if (controls['name'].errors['minlength']) {
        this.errorMessage = 'O nome deve ter pelo menos 3 caracteres.';
      }
    }
    else if (controls['cnpj'].errors) {
      if (controls['cnpj'].errors['required']) {
        this.errorMessage = 'O CNPJ é obrigatório.';
      } else if (controls['cnpj'].errors['pattern']) {
        this.errorMessage = 'CNPJ inválido. Digite apenas os 14 números.';
      }
    }
    else if (controls['email'].errors) {
      if (controls['email'].errors['required']) {
        this.errorMessage = 'O email é obrigatório.';
      } else if (controls['email'].errors['email']) {
        this.errorMessage = 'Digite um email válido.';
      }
    }
    else if (controls['phone'].errors) {
      if (controls['phone'].errors['required']) {
        this.errorMessage = 'O telefone é obrigatório.';
      } else if (controls['phone'].errors['pattern']) {
        this.errorMessage = 'Telefone inválido. Digite apenas números (10 ou 11 dígitos).';
      }
    }
    else if (controls['password'].errors) {
      if (controls['password'].errors['required']) {
        this.errorMessage = 'A senha é obrigatória.';
      } else if (controls['password'].errors['minlength']) {
        this.errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
      }
    }
  }
}