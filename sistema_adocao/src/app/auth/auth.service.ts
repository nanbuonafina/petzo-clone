import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = []; // Simulando um "banco de dados"
  private currentUser: User | null = null;

  constructor() {
    // Inicializar com um usuário de teste (opcional)
    this.users.push({
      id: 1,
      name: 'Test User',
      email: 'test@test.com',
      password: '12345678',
      cnpj: '12345678901234',
      phone: '123456789'
    });
  }



  register(user: User): Observable<string> {
    // Verificar se o email já existe
    const existingUser = this.users.find(u => u.email === user.email);
    if (existingUser) {
      return throwError(() => 'Email já cadastrado');
    }

    this.users.push(user);
    console.log('Usuários registrados:', this.users); // Para debug
    return of('Registro realizado com sucesso!');
  }

  login(email: string, password: string): Observable<User> {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      return of(user);
    }
    return throwError(() => 'Credenciais inválidas');
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}