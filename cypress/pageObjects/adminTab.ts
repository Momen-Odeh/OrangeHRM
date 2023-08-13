import Table from "./Tabel";
import keyVal from "../interfaces/keyVal";
const tabelObj:Table = new Table()

class admainTab{
    element={
        admainBtn:()=>cy.get(':nth-child(1) > .oxd-main-menu-item'),
        tableRecourde:() => cy.get('.oxd-table-body'),
        useNameInput:()=> cy.get(':nth-child(2) > .oxd-input'),
        searchBtn :()=> cy.get('.oxd-form-actions > .oxd-button--secondary'),
        resetBtn :()=> cy.get('.oxd-button--ghost'),
        addBtn :()=>cy.get('.orangehrm-header-container > .oxd-button'),
        roleCombo:()=>cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
    }
    
    TableHeader ={ //enum
        Username:"Username",
        UserRole:"UserRole",
        EmployeeName:"EmployeeName",
        Status:"Status",
    }
    getTableRecourd()
    {
        return this.element.tableRecourde();
    }
    chooseAdmin(){
        this.element.admainBtn().click()
    }
    storeRecourde()
    {
        tabelObj.storeRecourde(this.TableHeader);
    }
    checkSearch(...arr:keyVal[])
    {
        for(let i=0 ; i< arr.length;i++){
            if(arr[i].key == "Username")
            {
                this.element.useNameInput().type(arr[i].value);
            }
            else if(arr[i].key == "UserRole")
            {
                // this.element.useNameInput().type(arr[i].value);
                this.element.roleCombo().children().eq(1).click({ force: true })
                this.element.roleCombo().children().eq(0).type(arr[i].value)
            }
            
        }
        this.element.searchBtn().click({ force: true })
        tabelObj.checkSearch(this.TableHeader,...arr)
    }

    checkTabel()
    {
        tabelObj.checkTabel(this.TableHeader)
    }


    
    
    
    
}

export default admainTab