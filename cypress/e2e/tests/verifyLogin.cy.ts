import loginPage from "../../pageObjects/loginPage"
const loginObj:loginPage = new loginPage();
describe('check the ogin page', () => {
  beforeEach(function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 })
  it.only('check the login form', () => {
    loginObj.checkLogin("Admin","admin123");
  })
})