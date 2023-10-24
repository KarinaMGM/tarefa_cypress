/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

context('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    it('Deve completar o pré cadastro com sucesso', () =>{
        let firstName = faker.person.firstName()
        let lastName = faker.person.lastName()
        let emailFaker = faker.internet.email(firstName)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type(firstName)
        cy.get('#account_last_name').type(lastName)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')

    })

});