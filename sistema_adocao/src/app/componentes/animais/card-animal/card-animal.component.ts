import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-animal',
  templateUrl: './card-animal.component.html',
  styleUrl: './card-animal.component.css'
})
export class CardAnimalComponent {
  @Input() imageUrl: string = '';
  @Input() nome: string = '';
  @Input() especie: string = '';
  @Input() idade: string = '';
  @Input() local: string = '';
  @Input() descricao: string = '';
}
