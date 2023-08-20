class loginPage
{
    elements={
        userName : () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        password :() => cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        loginBtn : ()=> cy.get('.oxd-button')
    }
    
    checkLogin(userName:string,password:string){
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        
        this.elements.loginBtn().click()

    }

}
export default loginPage; 