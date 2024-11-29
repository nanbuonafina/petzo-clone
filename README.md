# Site de Adoção de Animais 🐾

Este projeto foi desenvolvido como parte de uma residência tecnológica do Embarque Digital para a empresa SERPRO, em que tivemos que criar uma aplicação web de adoção de animais. A aplicação se destina apenas ao front-end, sem integração com um backend ou banco de dados, permitindo que ONGs registrem animais e que visitantes consultem esses dados e realizem solicitações de adoção.

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

1. **Home**
   - Tela inicial com as informações sobre como funciona o site, contendo as seguintes sessões:
     
   1.1. **Listagem de Animais**
   - Exibe uma lista de animais com foto, nome, idade, espécie, localização da ong, texto descritivo do animal e contato da ong.

   1.2 **FAQ**
   - Sessão com as perguntas frequentes sobre o site e como realizar as adoções, como registrar e outras dúvidas.
  
   1.3 **Explicação sobre como funciona a dinâmica do site"**
   - Explica de forma simplificada para as ongs e adotantes como podem realizar as atividades no site.

2. **Tela de Login**
   - **Para ONG**: Contém campos de e-mail e senha, com os botões "Entrar", "Esqueci minha senha" e "Registrar-se".

3. **Tela de Registro**
   - **Para ONG**: Formulário para cadastro com os campos nome da ONG, CNPJ, e-mail, senha e confirmar senha. Botão "Registrar".

4. **Tela de Perfil da ONG**
   - Lista todos os animais cadastrados pela ONG, com opções para editar ou remover cada animal. Possui botões para "Adicionar Animal", "Editar" e "Remover".
     
   4.1 **Tela de Cadastro de Animais**
   - Formulário para cadastramento de animais, incluindo campos para nome, idade, raça, espécie, descrição, status, e upload de fotos. Botão "Cadastrar".

### Backlog do Produto

O backlog do projeto é dividido em três épicos principais, cada um com funcionalidades específicas:

1. **Gerenciamento de Animais**: Inclui o cadastro, listagem, exibição de detalhes, atualização e remoção de animais. Esse épico permite que ONGs gerenciem os animais para adoção, garantindo que as informações estejam sempre disponíveis e atualizadas para os adotantes.

2. **Autenticação e Gerenciamento de ONG**: Abrange as funcionalidades de registro, login e acesso para ONGs, permitindo que elas gerenciem seus perfis e os animais sob seus cuidados.

3. **Adoção de Animais**: Focado em facilitar a interação dos adotantes com o sistema, permitindo que eles solicitem a adoção de animais e iniciem o contato com as ONGs.

## 🛠️ Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone (https://github.com/menezeslivia/adocao-animais.git)
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd sistema_adocao
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
