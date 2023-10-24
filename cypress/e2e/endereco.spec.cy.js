/// <reference types="cypress" />

context('Funcionalidade Endereço de entrega', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit > .fa').click()
        cy.get('#billing_first_name').clear().type('Karina')
        cy.get('#billing_last_name').clear().type('Macedo')
        cy.get('#billing_address_1').clear().type('Rua comprida')
        cy.get('#billing_address_2').clear().type('570')
        cy.get('#billing_city').clear().type('São Paulo')
        cy.get('#billing_postcode').clear().type('02222-020')
        cy.get('#billing_phone').clear().type('(11)-11111.2222')
        cy.get('#billing_email').clear().type('kmg@gmail.com')

        cy.get('.button').click()

        

    })


});