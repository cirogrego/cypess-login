import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orage HRM Tests', () => { 


  const selectorList = {

  }

  
  it.only('User Info Update - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessPerformance()
    menuPage.accessAdmin()
    menuPage.accessPIM()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessDirectory()
    menuPage.accessMaintenance()
    menuPage.accessMaintenanceCancel()
    menuPage.accessClaim()
    menuPage.accessBuzz()
    menuPage.accessMyInfo()

    myInfoPage.fillEmployeeName('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', '123456', '2025-10-01')
    myInfoPage.fillStatus()
     myInfoPage.saveForm()


  })

it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
    
  })

})