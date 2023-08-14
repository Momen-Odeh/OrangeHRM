import loginPage from "../../pageObjects/loginPage";
import PIMtab from "../../pageObjects/PIMTab";
const loginObj:loginPage = new loginPage();
const PIMobj:PIMtab = new PIMtab (); 
describe("Test the admin tab",()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.checkLogin("Admin","admin123");
        PIMobj.choosePIM()
        
        cy.wrap(null).then(() => {
            PIMobj.storeData();
        });
    })
    // it.only("search by user name",()=>{
    //     cy.wrap(null).then(() => {
    //         PIMobj.checkSearch({key:"Id",value:"0066"});
    //       });
        
    // })
    // it.only("check the tabel",()=>{
    //     cy.wrap(null).then(() => {
    //         PIMobj.checkTabel();
    //       });
        
    // })
    it.only("add new Employee",()=>{
        cy.wrap(null).then(() => {
            PIMobj.addNewEmployee("osama","othman","morad");
          });
        
    })
})
