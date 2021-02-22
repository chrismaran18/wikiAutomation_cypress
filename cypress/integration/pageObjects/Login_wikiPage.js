class Login_wikiPage{

    visit(url){
        //cy.visit("https://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page")
        cy.visit(url)
    }

    userName(value){
       const userNameField = cy.get('#wpName1')
       userNameField.clear()
       userNameField.type(value)
       return this 
    }

    password(value){
        const passwordField = cy.get('#wpPassword1')
        passwordField.clear()
        passwordField.type(value)
        return this 
     }

     submitButton(){
         //const keepMe = cy.get('#wpRemember')
         //keepMe.click()
         const submitBtn = cy.get('#wpLoginAttempt')
         submitBtn.click()
     }

     logOut(){
         const logout = cy.get('#pt-logout > a')
         logout.click()
         //cy.get('#firstHeading').contains('Log Out')
     }
} export default Login_wikiPage