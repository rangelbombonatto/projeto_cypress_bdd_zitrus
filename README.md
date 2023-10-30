<h1 align="center">🧑‍🎓 Testes Automatizados Site Zitrus</h1>

<p align="center"> 
    <img src="./public/imagemTestesZitrus.png"/>
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)

## 💻 Projeto

O projeto tem como responsabilidade realizar testes E2E no Site da Zitrus. Foram automatizados os seguintes cenários:
- Validar acesso ao site da Zitrus;
- Validar informações de obrigatóriedade do formulário de contato;
- Validar se todas as soluções do menu estão abrindo corretamente;
- Validar se está exibindo todas as soluções da Zitrus.


## 🚀 Como executar

- Clone o repositório

### Para rodar localmente

Na pasta do projeto:

- Rode `npm install` para instalar as dependências;
- Rode `npx cypress open` para abrir a interface no cypress;
- Selecione a opção "E2E Testing";
- Selecione um navegador;
- Em Spec clique no arquivo: "zitrus.feature".
