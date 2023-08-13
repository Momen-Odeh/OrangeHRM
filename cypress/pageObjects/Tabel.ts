import keyVal from "../interfaces/keyVal"
class Table{
    element = {
        tableRecourde:() => cy.get('.oxd-table-body'),
    }
    recourde= []
    storeRecourde(TableHeader)
    {
        this.element.tableRecourde().children().each(($el,index)=>{
            let obj ={
                index:index, 
            }
            let i =1; 
            for (const key in TableHeader) {
                obj={
                    ...obj,
                    [key]:$el.children().first().children()[i++].innerText
                }
                // console.log(`${key}: ${TableHeader[key]}`);
            }
            this.recourde.push(obj)
        })
        cy.log("all stored recourd : ==> ",this.recourde);
    }


    getRecourde(dataObj)
    {
        
        let res =this.recourde.filter((x) => {
            let found = true
                for (const key in dataObj) 
                {
                    if(x[key] != dataObj[key])
                        {
                            found =false; 
                            break; 
                        }
                }
                if(found) return x; 
        })
        return res
    }
    checkSearch(TableHeader,...dataObjs:keyVal[])
    {
        let searchObj={}
        for (const data of dataObjs)
        {
            searchObj={
                ...searchObj,
                [data.key]: data.value
            }
            
        }
        console.log(searchObj);
        let res = this.getRecourde(searchObj);
        console.log(res);
        for(let k=0;k<res.length;k++)
        {
            let i =0; 
            for (const key1 in TableHeader) {
                if(this.recourde[k][key1] != "")
                    this.element.tableRecourde().children().eq(k).contains(this.recourde[k][key1])
                        
                    
            }
        }
        // inputText.type(dataObj[0].value);    
        // inputBtn.click({ force: true });
        // console.log("index")
        // 
        // let resElements = this.element.tableRecourde().children(); 
        
    }

    checkTabel(TableHeader)
    {
        this.element.tableRecourde().children().each(($el,index)=>{
            let i =1; 
            for (const key in TableHeader) {
                // console.log(index)
                if(this.recourde[index][key] != "")
                    cy.wrap($el).contains(this.recourde[index][key]);
            }
        })
    }

}

export default Table