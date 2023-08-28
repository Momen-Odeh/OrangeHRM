import Table from "./Tabel"
import keyVal from "../interfaces/keyVal"
const tableObj:Table = new Table()
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
            tableObj.checkSearch(this.TableHeader,{key:"FirstName",value:firstName+" "+MiddleName},{key:"LastName",value:lastName});


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
        tableObj.storeRecourde(this.TableHeader);
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
        tableObj.checkSearch(this.TableHeader,...arr)
    }
    checkTabel(){
        tableObj.checkTabel(this.TableHeader)
    }
    addUserByAPI()
    {
        let data = {firstName: "Momen", middleName: "Hasan", lastName: "Odeh", empPicture: null, employeeId: "02023"}
        cy.request("POST","https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",data)
        .then((res) => {
        const responseBody = res.body;
        console.log(responseBody);
        expect(res.status).to.equal(200)
        this.checkSearch({key:"Id",value:data.employeeId});
        tableObj.element.tableRecourde().children().eq(0).children().first().contains(data.employeeId)
        tableObj.element.tableRecourde().children().eq(0).children().first().contains(data.firstName+" "+data.middleName)
      });
    }
} 

export default PIMtab