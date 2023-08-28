import PIMtab from "../../pageObjects/PIMTab";
import Table from "../../pageObjects/Tabel";
import loginPage from "../../pageObjects/loginPage";
const pimObj:PIMtab = new PIMtab (); 
const loginObj:loginPage = new loginPage();
const tableObj:Table = new Table ();
describe("Test the admin tab",()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        pimObj.choosePIM()
    })
    it.only("test add user in admin tab",()=>
    {
        pimObj.addUserByAPI()
    })
}
)