import adminTab from "../../pageObjects/adminTab";
import loginPage from "../../pageObjects/loginPage";
const adminObj:adminTab = new adminTab (); 
const loginObj:loginPage = new loginPage();
describe("Test the admin tab",()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        adminObj.chooseAdmin()
    })
    it.only("test add user in admin tab",()=>
    {
        adminObj.addUserByAPI()
    }
)
})