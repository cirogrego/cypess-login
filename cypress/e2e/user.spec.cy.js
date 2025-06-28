import userData from '../fixtures/user-data.json'

describe('Orage HRM Tests', () => {


  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:   "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField:"[name='firstName']",
    lastNameField:"[name='lastName']",
    genericField:".oxd-input--active",
    licenseExpiryDateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    genericComboBoxField:".oxd-select-text--arrow",
    fifthItemComboBox:".oxd-select-dropdown > :nth-child(5)",
    thirdItemComboBox:".oxd-select-dropdown > :nth-child(3)",
    dateOfBirthField:"[placeholder='yyyy-dd-mm']",
    genderField:".oxd-radio-wrapper",
    submitButton:"[type='submit']"
  }

  
  it.only('User Info Update - Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get (selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorList.licenseExpiryDateField).eq(0).clear().type('2025-10-01')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericComboBoxField).eq(0).click({force: true})
    cy.get(selectorList.fifthItemComboBox).click()
    cy.get(selectorList.genericComboBoxField).eq(1).click({force: true})
    cy.get(selectorList.thirdItemComboBox).click()
    cy.get(selectorList.dateOfBirthField).eq(1).clear().type('1980-10-05')
    cy.get(selectorList.genderField).eq(0).click()
    cy.get(selectorList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')





  })

it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    
  })

})