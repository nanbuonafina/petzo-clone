# Site de Adoção de Animais 🐾

Este projeto foi desenvolvido como parte da residência tecnológica do Embarque Digital para a empresa SERPRO, em que tivemos que criar uma aplicação web de adoção de animais. A aplicação se destina apenas ao front-end, sem integração com um backend ou banco de dados, permitindo que ONGs registrem animais e que visitantes consultem esses dados e realizem solicitações de adoção.

## 🎯 Objetivo do Projeto

Desenvolver uma plataforma de adoção de animais onde ONGs possam cadastrar e gerenciar animais disponíveis para adoção, e visitantes possam consultar esses dados, visualizar os detalhes dos animais e fazer solicitações de adoção.

## 🚀 Tecnologias Utilizadas

- **Angular**: Estruturação do front-end com criação de componentes reutilizáveis, roteamento e gerenciamento de estado.
- **TypeScript**: Tipagem estática e melhor controle de dados e funcionalidades.
- **HTML e CSS**: Estruturação e estilização das páginas com design responsivo.
- **Bootstrap**: Framework para criação de layouts e componentes responsivos.
- **Node.js**: Servidor local para desenvolvimento do front-end.

## 📋 Estrutura do Projeto

### Telas

A aplicação é composta pelas seguintes telas:

1. **Tela de Login**
   - **Para ONG**: Contém campos de e-mail e senha, com os botões "Entrar", "Esqueci minha senha" e "Registrar-se".

3. **Tela de Registro**
   - **Para ONG**: Formulário para cadastro com os campos nome da ONG, CNPJ, e-mail, senha e confirmar senha. Botão "Registrar".

4. **Tela de Cadastro de Animais** (ONG apenas)
   - Formulário para cadastramento de animais, incluindo campos para nome, idade, raça, espécie, descrição, status, e upload de fotos. Botão "Cadastrar".

5. **Tela de Listagem de Animais**
   - Exibe uma lista de animais com foto, nome, raça e status. Inclui filtros para espécie, raça e idade, com botões "Ver detalhes" e "Filtrar".

6. **Tela de Detalhes do Animal**
   - Exibe informações detalhadas sobre o animal, incluindo fotos e descrição. Contém botões para "Solicitar Adoção" (disponível para adotantes), "Remover" e "Editar" (visíveis apenas para ONGs).

7. **Tela de Solicitação de Adoção** (adotante)
   - Modal acionado a partir da tela de detalhes do animal, contendo um formulário com campos de nome, e-mail e mensagem, além do botão "Enviar".

8. **Tela de Perfil da ONG**
   - Lista todos os animais cadastrados pela ONG, com opções para editar ou remover cada animal. Possui botões para "Adicionar Animal", "Editar" e "Remover".

### Backlog do Produto

O backlog do projeto é dividido em três épicos principais, cada um com funcionalidades específicas:

1. **Gerenciamento de Animais**: Inclui o cadastro, listagem, exibição de detalhes, atualização e remoção de animais. Esse épico permite que ONGs gerenciem os animais para adoção, garantindo que as informações estejam sempre disponíveis e atualizadas para os adotantes.

2. **Autenticação e Gerenciamento de ONG**: Abrange as funcionalidades de registro, login e acesso para ONGs, permitindo que elas gerenciem seus perfis e os animais sob seus cuidados.

3. **Adoção de Animais**: Focado em facilitar a interação dos adotantes com o sistema, permitindo que eles solicitem a adoção de animais e iniciem o contato com as ONGs.

## 🌐 Estrutura de Componentes

Os principais componentes do Angular são organizados para cada funcionalidade:

- **LoginComponent**: Tela de login.
- **RegisterComponent**: Tela de registro.
- **AnimalListComponent**: Exibe a lista de animais.
- **AnimalDetailsComponent**: Mostra detalhes do animal.
- **AnimalFormComponent**: Formulário para cadastrar e editar.
- **AdoptionRequestComponent**: Modal de solicitação de adoção.

## 🛠️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone (https://github.com/menezeslivia/adocao-animais.git)
   ```
2. Navegue até a pasta do projeto:
  ```bash
  cd adocao-animais
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```
4. Inicie o servidor local:
 ```bash
  ng serve
  ```
5. Acesse no navegador:
  ```bash
  http://localhost:4200
  ```

