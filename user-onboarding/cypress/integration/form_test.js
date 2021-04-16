describe ('my first test', function () {
    it('Does not do much', function () {
        expect(true).to.equal(true);
    })
})

describe('My Second Test', function () {
    //Arrange
    it('Visits Jades form', function() {
    // Act
    cy.visit("http://localhost:3000/");
    })
})

describe('Fills out the User Form and Submits', function () {
    it ('Gets the name Input and types', function () {
        cy.get('input#name').type('John Smith').should('have.value', 'John Smith')
    })
    it ('Gets the email Input and types', function () {
        cy.get('input#email').type('jsmith@fake.com').should('have.value', 'jsmith@fake.com')
    })
    it ('Gets the name Input and types', function () {
        cy.get('input#password').type('!#34DSDFfsfsde').should('have.value', '!#34DSDFfsfsde')
    })
    it ('Checks the checkbox can be clicked', function () {
        cy.get('input#tos').click()
    })
    it ('Checks the submit button works', function () {
        cy.get('button').click()
    })
})


describe('Checks Validation', function () {
    it('Visits Jades form', function() {
        // Act
        cy.visit("http://localhost:3000/");
        })
    
    it('Checks Name Validation', function() {
        cy.get('input#name').then($el => $el[0].checkValidity()).should('be.true')
    })

    it('Submit button should not be enabled if input is empty', function() {
        cy.get('button').should('not.be.enabled')
    })
})


