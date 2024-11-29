// accordion.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  accordionItems = [
    {
      id: 'One',
      title: 'Como posso adotar um pet?',
      content: 'Navegue pelos perfis dos pets disponíveis em nosso site e contate a ONG pelo WhatsApp',
      isOpen: false
    },
    {
      id: 'Two',
      title: 'Quais são os requisitos para adotar um pet?',
      content: 'Ser maior de 18 anos, participar de uma entrevista com a equipe de adoção, assinar um termo de responsabilidade e quaisquer outras recomendações que a ONG lhe passar, lembre-se não há custos!',
      isOpen: false
    },
    {
      id: 'Three',
      title: 'Como faço para cadastrar um pet para adoção?',
      content: 'Apenas as ONGs podem cadastrar os pets, caso seja ong basta se cadastrar na nossa plataforma e preparar a melhor foto do pet e envia-la.',
      isOpen: false
    },
    {
      id: 'Four',
      title: 'Existe algum custo para adotar um pet?',
      content: 'Não! Todo o processo é gratuito!',
      isOpen: false
    },
    {
      id: 'Five',
      title: 'Quais são os cuidados básicos que devo ter com um novo pet?',
      content: 'Ao adotar um pet, você assume a responsabilidade pelo seu bem-estar, garantindo alimentação adequada e água fresca sempre disponível, visitas regulares ao veterinário para vacinação, vermifugação e check-ups, higiene regular, como banhos e escovação dos pelos, um ambiente seguro e confortável com espaço para se exercitar e descansar, e, acima de tudo, muito amor, carinho e atenção! ❤️ Lembre-se de pesquisar sobre as necessidades específicas da espécie e raça do seu pet para oferecer os melhores cuidados.',
      isOpen: false
    },
    {
      id: 'Six',
      title: 'Posso visitar o pet antes de adotar?',
      content: ' Sim, geralmente é possível visitar o pet antes de adotar para conhecê-lo melhor e ter certeza de que a conexão entre vocês é positiva. Entre em contato com a ONG ou protetor responsável pelo pet para agendar uma visita. Durante a visita, aproveite para interagir com o animal, observar seu comportamento e tirar todas as suas dúvidas. Essa é uma etapa importante para garantir que a adoção seja bem-sucedida e que o pet encontre um lar feliz e definitivo.',
      isOpen: false
    }
  ];

  toggleAccordion(selectedItem: any) {
    this.accordionItems.forEach(item => {
      if (item === selectedItem) {
        item.isOpen = !item.isOpen;
      } else {
        item.isOpen = false;
      }
    });
  }
}
