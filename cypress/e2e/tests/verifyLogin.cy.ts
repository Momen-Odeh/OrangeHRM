import loginPage from "../../pageObjects/loginPage"
const loginObj:loginPage = new loginPage();
describe('check the ogin page', () => {
  beforeEach(function() {
    cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('loginPage');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // cy.wait('@loginPage');
      
 })
  it.only('check the login form', () => {
    
    cy.wait('@loginPage').then(()=>{
      loginObj.checkLogin("Admin","admin123");
    });
    
  })
  
})