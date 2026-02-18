describe('Validações de Alertas em JavaScript', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar a mensagem de alerta', () => {

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })
        cy.contains('button', 'Mostrar Alert').click()
    })

    it('Deve confirmar um dialogo e validar a resposta positiva', () => {

        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true; //true simula um comando OK
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve confirmar um dialogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false; //false simula um comando cancelar
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve interagir com um prompt, inserir um texto e validar a mensagem', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Fernando')
        })
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá Fernando! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()

    })
})