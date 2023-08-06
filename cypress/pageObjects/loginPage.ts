class loginPage
{
    elements={
        usernameInput : () => cy.get('input[name="userName"]'),//cy.get('[data-cy="submit"]')
        passwordInput : () => cy.get('input[name="password"]'),    
        loginBtn : () => cy.get('input[name="submit"]'),
        successTxt : () => cy.get('h3'),
        errorTxt : () => cy.get('span')
    }
    enterUsername(username:string)
    {
        this.elements.usernameInput().clear();
        this.elements.usernameInput().type(username);
    }

   enterPassword(password:string)
    {
        this.elements.passwordInput().clear();
        this.elements.passwordInput().type(password);
    }
  
   clickSubmit() 
    {
        this.elements.loginBtn().click();
    }

    //get functions
    get username()
    {
        return cy.get('input[name="userName"]');
    }

   get password()
    {
        return cy.get('input[name="password"]');
    }

   get submit()
    {
        return cy.get('input[name="submit"]');
    }

   get successText()
    {
        return cy.get('h3');
    }

   get errorText()
   {
       return cy.get('span');
   }

}
export default loginPage; 