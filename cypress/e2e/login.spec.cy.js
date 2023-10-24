/// <reference types='cypress' />

context('Funcionalidade Login', () => {

    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso' , () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password'). type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário ', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password'). type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click() 
        
        cy.get('.woocommerce-error').should('contain' , 'Erro: a senha fornecida para o e-mail ebac@teste.com está incorreta.')
    })

    it('Deve conter uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password'). type('teste1@teste.com')
        cy.get('.woocommerce-form > .button').click() 
        
        cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
    })  
})
    

