class MyInfoPage {

    selectorList() {
        const selector = {
            firstNameField:"[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField:"[name='lastName']",
            genericField:".oxd-input--active",
            dateCloseButton:".--close",
            genericComboBoxField:".oxd-select-text--arrow",
            fifthItemComboBox:".oxd-select-dropdown > :nth-child(5)",
            thirdItemComboBox:".oxd-select-dropdown > :nth-child(3)",
            genderField:".oxd-radio-wrapper",
            submitButton:"[type='submit']"
        }
            
       
        return selector
    }

    fillEmployeeName(firstName, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName) 
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate, dateOfBirth) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericField).eq(7).clear().type(dateOfBirth)
        
        
    }

    saveForm() {
        cy.get(this.selectorList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorList().genericComboBoxField).eq(0).click({force: true})
        cy.get(this.selectorList().fifthItemComboBox).click()
        cy.get(this.selectorList().genericComboBoxField).eq(1).click({force: true})
        cy.get(this.selectorList().thirdItemComboBox).click()
        cy.get(this.selectorList().genderField).eq(0).click()
    }

}


export default MyInfoPage