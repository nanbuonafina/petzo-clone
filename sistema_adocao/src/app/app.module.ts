import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Certifique-se de que este está importado
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CadastroAnimalComponent } from './componentes/cadastro-animal/cadastro-animal.component'; // Importe o componente corretamente
import { routes } from './app.routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AnimalService } from './services/animal.service';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { ButtonComponent } from './componentes/button/button.component';
import { MainComponent } from './componentes/main/main.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { AnimaisComponent } from './componentes/animais/animais.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AccordionComponent } from './componentes/accordion/accordion.component';
import { CardAnimalComponent } from './componentes/animais/card-animal/card-animal.component';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';
import { OngComponent } from './componentes/ong/ong.component';
import { RegisterComponent } from './componentes/registro/register.component';
import { TodosAnimaisComponent } from './componentes/todos-animais/todos-animais.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    AppComponent,
    CadastroAnimalComponent, // Declare o componente aqui
    FooterComponent,
    HomeComponent,
    ButtonComponent,
    MainComponent,
    SobreComponent,
    AnimaisComponent,
    CardAnimalComponent,
    AuthLayoutComponent,
    AnimaisComponent,
    AccordionComponent,
    LoginComponent,
    OngComponent,
    RegisterComponent,
    TodosAnimaisComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Inclua este módulo aqui
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, AuthGuard, AnimalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
