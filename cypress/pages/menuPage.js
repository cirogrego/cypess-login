class MenuPage {

    selectorList() {
        const selector = {
            myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton: '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            maintenanceButtonCancel: '.oxd-button--ghost',
            claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
        }
       
        return selector
   
    }

    accessPerformance() {
        cy.get(this.selectorList().performanceButton).click()
    }
    
    accessAdmin() {
        cy.get(this.selectorList().adminButton).click()

}

    accessPIM() {
        cy.get(this.selectorList().pimButton).click()

}   

    accessLeave() {
        cy.get(this.selectorList().leaveButton).click()
    }

    accessTime() {
        cy.get(this.selectorList().timeButton).click()
    }

    accessRecruitment() {
        cy.get(this.selectorList().recruitmentButton).click()
    }

    accessDirectory(){
        cy.get(this.selectorList().directoryButton).click()
    }

    accessMaintenance(){
        cy.get(this.selectorList().maintenanceButton).click()
    }

    accessMaintenanceCancel() {
        cy.get(this.selectorList().maintenanceButtonCancel).click()
    }

    accessClaim(){
        cy.get(this.selectorList().claimButton).click()
    }

    accessBuzz() {
        cy.get(this.selectorList().buzzButton).click()
    }

     accessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()

    }
}


export default MenuPage