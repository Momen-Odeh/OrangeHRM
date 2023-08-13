import Table from "./Tabel"
const tabelObj:Table = new Table()
class PIMtab {
    elements ={
        PIMbtn :()=> cy.get(':nth-child(2) > .oxd-main-menu-item'),
        EId :()=>cy.get(':nth-child(2) > .oxd-input'),
        searchBtn:()=>cy.get('.oxd-form-actions > .oxd-button--secondary')
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
    // checkSearch(key,value)
    // {
    //     tabelObj.checkSearch(this.TableHeader,{key,value})
    // }
    checkTabel(){
        tabelObj.checkTabel(this.TableHeader)
    }
} 

export default PIMtab