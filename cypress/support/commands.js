// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("logoZitrus", () => {
    return cy.get("img[class='attachment-full size-full wp-image-1321']")
})

Cypress.Commands.add("buscaSolucaoDataID", (dataID) => {
    return cy.get(`div[data-id="${dataID}"]`)
})

Cypress.Commands.add("menuSolucoes", () => {
    return cy.get('a.elementor-item.has-submenu').contains('Soluções')
})

Cypress.Commands.add("opcoesMenuSolucoes", (solucao) => {
    return cy.get('a.elementor-sub-item').contains(solucao)
})

Cypress.Commands.add("botaoEnviar", () => {
    return cy.get('button').contains("Enviar")
})


Cypress.Commands.add("botaoContato", () => {
    return cy.get('a[role="button"]').find('span').contains('Contato')
})




Cypress.Commands.add("formularioContato", (nome, email, empresa, cargo ) => {
    if (nome != '')    cy.get('input[name="name"]').type(nome);
    if (email != '')   cy.get('input[name="email"]').type(email);
    if (empresa != '') cy.get('input[name="company"]').type(empresa);
    if (cargo != '')   cy.get('input[name="job_title"]').type(cargo);
})