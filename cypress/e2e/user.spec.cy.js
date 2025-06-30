import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orage HRM Tests', () => { 


  it('User Info Update - Success', () => {

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

    myInfoPage.fillEmployeeName(chance.first(),'Middle Name', chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', '123456', '2025-10-01')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()


  })



})