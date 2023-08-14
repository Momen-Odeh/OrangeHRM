import Table from "./Tabel"
import keyVal from "../interfaces/keyVal"
const tabelObj:Table = new Table()
class PIMtab {
    elements ={
        PIMbtn :()=> cy.get(':nth-child(2) > .oxd-main-menu-item'),
        EId :()=>cy.get(':nth-child(2) > .oxd-input'),
        EmployeeName:()=>cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        SupervisorName:()=> cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input'),
        searchBtn:()=>cy.get('.oxd-form-actions > .oxd-button--secondary'),
        addEmp:()=>cy.get('.orangehrm-header-container > .oxd-button'),
        EmployeeInputName:()=>cy.get('.--name-grouped-field'),
        saveNewEmp:()=>cy.get('.oxd-button--secondary')

    }
    addNewEmployee(firstName:string,MiddleName:string,lastName:string)
    {
        this.elements.addEmp().click({force:true});

        this.elements.EmployeeInputName().children().eq(0).children().eq(1).type(firstName);
        this.elements.EmployeeInputName().children().eq(1).children().eq(1).type(MiddleName);
        this.elements.EmployeeInputName().children().eq(2).children().eq(1).type(lastName);

        this.elements.saveNewEmp().click({force:true})
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
            tabelObj.checkSearch(this.TableHeader,{key:"FirstName",value:firstName+" "+MiddleName},{key:"LastName",value:lastName});


    }
    TableHeader ={ //enum
        Id:"Id",
        FirstName:"FirstName",
        LastName:"LastName",
        JobTitle:"JobTitle",
        EmploymentStatus:"EmploymentStatus",
        SubUnit:"SubUnit",
        Supervisor:"Supervisor",
    }
    choosePIM(){
        this.elements.PIMbtn().click()
    }
    storeData()
    {
        tabelObj.storeRecourde(this.TableHeader);
    }
    checkSearch(...arr:keyVal[])
    {
        for(let i=0 ; i< arr.length;i++){
            if(arr[i].key == "Id")
            {
                this.elements.EId().type(arr[i].value);
            }
            else if(arr[i].key == "EmployeeName")
            {
                this.elements.EmployeeName().type(arr[i].value);
            }
            else if(arr[i].key == "Supervisor")
            {
                this.elements.SupervisorName().type(arr[i].value)
            }
            
        }
        this.elements.searchBtn().click({ force: true })
        tabelObj.checkSearch(this.TableHeader,...arr)
    }
    checkTabel(){
        tabelObj.checkTabel(this.TableHeader)
    }
} 

export default PIMtab