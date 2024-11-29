import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animais: Animal[] = [];

  // Dados estáticos iniciais
  private animaisIniciais: Animal[] = [
    {
      id: this.gerarId(),
      nome: 'Luna',
      idade: '5 meses',
      tipo: 'Gato',
      localizacao: 'São Paulo, SP',
      contato: '(11) 91234-5678',
      descricao: 'Gatinha brincalhona e cheia de energia, pronta para encontrar um novo lar.',
      imagemUrl: 'https://th.bing.com/th/id/R.96c09442b3bbadbf0440427d10cb7f6b?rik=hbS5xYJiJF3QBQ&pid=ImgRaw&r=0',
    },
    {
      id: this.gerarId(),
      nome: 'Thor',
      idade: '2 anos',
      tipo: 'Cachorro',
      localizacao: 'Rio de Janeiro, RJ',
      contato: '(21) 98765-4321',
      descricao: 'Cachorro dócil e protetor, ideal para famílias com crianças.',
      imagemUrl: 'https://www.adoropets.com.br/wp-content/uploads/2018/03/golden-retriever-em-pe.jpg',
    },
    {
      id: this.gerarId(),
      nome: 'Mimi',
      idade: '3 meses',
      tipo: 'Gato',
      localizacao: 'Curitiba, PR',
      contato: '(41) 99876-5432',
      descricao: 'Filhote carinhoso que adora brincar e está pronto para um novo lar amoroso.',
      imagemUrl: 'https://1.bp.blogspot.com/-jBBURgcZut4/TocO3_ykhTI/AAAAAAAADMM/DnT6aYm3tKY/s1600/Gatito+5.jpg',
    },
    {
      id: this.gerarId(),
      nome: 'Max',
      idade: '1 ano',
      tipo: 'Cachorro',
      localizacao: 'Belo Horizonte, MG',
      contato: '(31) 98765-4321',
      descricao: 'Cachorro ativo e leal, ótimo companheiro para quem gosta de aventuras ao ar livre.',
      imagemUrl: 'https://th.bing.com/th/id/OIP.Q3mUzo7LjL3cKnoHenMqlwHaEK?rs=1&pid=ImgDetMain',
    },
    {
      id: this.gerarId(),
      nome: 'Spike',
      idade: '3 anos',
      tipo: 'Cachorro',
      localizacao: 'Florianópolis, SC',
      contato: '(48) 91234-5678',
      descricao: 'Cachorro forte e amigável, ótimo para famílias e pessoas ativas.',
      imagemUrl: 'https://th.bing.com/th/id/OIP.lbSskNvnv8qCFYKY5gPwUAHaEV?rs=1&pid=ImgDetMain',
    },
    {
      id: this.gerarId(),
      nome: 'Lola',
      idade: '4 meses',
      tipo: 'Gato',
      localizacao: 'Salvador, BA',
      contato: '(71) 98765-4321',
      descricao: 'Filhote esperta e independente, cheia de charme e energia.',
      imagemUrl: 'https://th.bing.com/th/id/OIP.RoyeBIRDXh_MzhrcHEEqcQHaFW?rs=1&pid=ImgDetMain',
    },
  ];

  constructor() {
    this.carregarDoStorage();
  }

  // Retorna todos os animais
  getAnimais(): Animal[] {
    return this.animais;
  }

  // Retorna um animal específico por ID
  getAnimalPorId(id: string): Animal | undefined {
    return this.animais.find((animal) => animal.id === id);
  }

  // Adiciona um novo animal
  adicionarAnimal(animal: Animal): void {
    animal.id = this.gerarId(); // Gera um ID único
    this.animais.push(animal);
    this.salvarNoStorage(); // Salva no LocalStorage
  }

  // Edita um animal
  editarAnimal(id: string, dadosAtualizados: Partial<Animal>): void {
    const index = this.animais.findIndex((animal) => animal.id === id);
    if (index !== -1) {
      this.animais[index] = { ...this.animais[index], ...dadosAtualizados };
      this.salvarNoStorage(); // Salva no LocalStorage
    }
  }

  // Exclui um animal
  excluirAnimal(id: string): void {
    this.animais = this.animais.filter((animal) => animal.id !== id);
    this.salvarNoStorage(); // Salva no LocalStorage
  }

  // Gera um ID único
  private gerarId(): string {
    return uuidv4();
  }

  // Salva os animais no LocalStorage
  private salvarNoStorage(): void {
    localStorage.setItem('animais', JSON.stringify(this.animais));
  }

  // Carrega os animais do LocalStorage e combina com os dados estáticos
  private carregarDoStorage(): void {
    if (typeof window === 'undefined') return; // Verifica se é SSR (no servidor não há acesso ao LocalStorage)

    const dados = localStorage.getItem('animais');
    const animaisDoLocalStorage: Animal[] = dados ? JSON.parse(dados) : [];

    // Cria um Set com os IDs dos animais armazenados no LocalStorage
    const idsExistentes = new Set(animaisDoLocalStorage.map(animal => animal.id));

    // Filtra os animais estáticos para adicionar apenas os que não estão no LocalStorage
    const animaisNaoDuplicados = this.animaisIniciais.filter(animal => !idsExistentes.has(animal.id));

    // Combina os animais do LocalStorage com os animais não duplicados
    this.animais = [...animaisDoLocalStorage, ...animaisNaoDuplicados];

    // Atualiza o LocalStorage com todos os dados combinados
    this.salvarNoStorage();
  }
}