describe('Cadastro', () => {
    beforeEach(() => {
        cy.goToSignup()

        // cy.intercept('POST', 'http://localhost:3333/api/users/register', {
        //     statusCode: 201,
        //     body: {
        //         message: 'Usuario cadastrado com sucesso'
        //     }
        // }).as('postSignup')
    })

    it('Deve cadastrar um novo usuario', () => {
        cy.get('#name').type('Gabriel Vera')
        cy.get('#email').type('gabrielfdsu2@gmail.com')
        cy.get('#password').type('Gabriel@07')
        cy.contains('button', 'Criar conta').click()

        // cy.wait('@postSignup')
        cy.contains('Conta criada com sucesso!')
            .should('be.visible')
    })
})