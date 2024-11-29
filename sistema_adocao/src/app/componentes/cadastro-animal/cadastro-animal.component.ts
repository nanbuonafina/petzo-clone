import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-animal',
  templateUrl: './cadastro-animal.component.html',
  styleUrl: './cadastro-animal.component.css',
})
export class CadastroAnimalComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: [''], // Campo para o nome do animal
      especie: [''], // Campo para a espécie
      faixaEtaria: [''], // Campo para a faixa etária
      descricao: [''], // Campo para a descrição
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.cadastroForm.value); // Mostra os dados preenchidos no console
  }
}
