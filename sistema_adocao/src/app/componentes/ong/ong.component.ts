import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css'],
})
export class OngComponent implements OnInit {
  animais: Animal[] = []; // Lista de animais
  novoAnimal: Animal = this.resetAnimal(); // Novo animal para cadastro ou edição
  editandoId: string | null = null; // ID do animal sendo editado
  mostrarModal: boolean = false; // Controle de exibição do modal

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.carregarAnimais();
  }

  carregarAnimais(): void {
    this.animais = this.animalService.getAnimais(); // Busca animais no serviço
  }

  abrirModal(): void {
    this.mostrarModal = true;
    document.body.classList.add('modal-aberto'); // Adiciona classe para bloquear interações na página
  }

  fecharModal(event?: Event): void {
    if (event) {
      event.stopPropagation(); // Evita propagação do clique
    }
    this.mostrarModal = false;
    document.body.classList.remove('modal-aberto'); // Remove a classe do body
    this.novoAnimal = this.resetAnimal(); // Reseta o formulário ao fechar o modal
    this.editandoId = null; // Limpa o estado de edição
  }

  salvarAnimal(): void {
    if (this.editandoId) {
      // Atualiza animal existente
      this.animalService.editarAnimal(this.editandoId, this.novoAnimal);
    } else {
      // Adiciona novo animal
      this.animalService.adicionarAnimal(this.novoAnimal);
    }
    this.novoAnimal = this.resetAnimal(); // Reseta o formulário
    this.editandoId = null;
    this.mostrarModal = false; // Fecha o modal
    document.body.classList.remove('modal-aberto'); // Remove a classe do body
    this.carregarAnimais(); // Atualiza a lista
  }

  editarAnimal(animal: Animal): void {
    this.novoAnimal = { ...animal }; // Clona o objeto para edição
    this.editandoId = animal.id;
    this.abrirModal(); // Abre o modal
  }

  excluirAnimal(id: string): void {
    this.animalService.excluirAnimal(id); // Remove o animal
    this.carregarAnimais(); // Atualiza a lista
  }

  resetAnimal(): Animal {
    return {
      id: '',
      nome: '',
      idade: '',
      tipo: '',
      localizacao: '',
      contato: '',
      descricao: '',
      imagemUrl: '',
    };
  }
}
