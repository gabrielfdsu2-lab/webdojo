import { personal, company } from '../fixtures/consultancy.json'

describe('Formulario de Consultoria', () => {

    before(() => {
        cy.log('Isso aparece uma vez so no inicio dos testes uma unica vez')
    })
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')

    })

    it('Deve solicitar consultoria individual', () => {

        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validadeConsultacyModal()
    })

    it('Deve solicitar consultoria In Company', () => {

        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validadeConsultacyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        const requiredFields = [ 
            { label: 'Nome Completo', message: 'Campo obrigatório'},
            { label: 'Email', message: 'Campo obrigatório'},
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso'}
        ]

        requiredFields.forEach(({ label, message}) => {
             cy.contains('label', label)
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', message)
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })

    afterEach(() => {
        cy.log('isso acontece uma vez ao final de cada teste')
    })

    after(() => {
        cy.log('isso e so uma vez no final de todos os testes ')
    })
})