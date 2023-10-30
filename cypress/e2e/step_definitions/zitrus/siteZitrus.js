import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("Eu acesso o site da Zitrus", () => {
    cy.visit('/')
})

Then("Eu devo visualizar o logo da empresa", () => {
    cy.logoZitrus().should('be.visible')
})


Then('Eu devo visualizar todas as soluções da Zitrus', (listSolucoes) => {
    listSolucoes.hashes().forEach((row) => {
        const dataId = row.dataId;
        const solucaoNaTabela = row.solucao;

        cy.buscaSolucaoDataID(dataId)
            .find('a')
            .contains(solucaoNaTabela)
            .should('be.visible');
    });
});


When("Eu clicar na {string}", (solucao) => {
    cy.intercept('page load').as('load');

    cy.menuSolucoes().click();
    cy.opcoesMenuSolucoes(solucao).click();
})


When("Eu clico no botão de Contato", () => {
    cy.wait(3000)
    cy.botaoContato().click()
})

When("Preencho as informações {string} {string} {string} {string} faltando campos obrigatórios", (nome, email, empresa, cargo) => {
    cy.wait(3000)
    cy.formularioContato(nome, email, empresa, cargo)
 
})

When("Eu clico em Enviar", () => {
    cy.botaoEnviar().click() 
})

Then('Eu devo visualizar a mensagem de campo obrigatório', () => {
    cy.get('label').contains("Campo obrigatório").should('be.visible')
});







Then('Eu devo ser redirecionado para a página {string}', (url) => {
    const currentUrl = cy.url()
    currentUrl.should('include', url)
});

