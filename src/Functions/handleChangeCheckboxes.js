    let tableType = []
    let tableGen = []

    let checkboxesGen = []
    let checkboxesType = []

//create uncheckall function
function uncheckAll(input) {
    let inputs = input;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}
/**
 * 
 * @param {*} data = data from an input (able to get .target or in this case, checked : true/false of a checkbox)
 * @returns table whith all data where {data.target.checked === true}
 */
    export const handleChangeType = (data) => {

        checkboxesType.push(data.target)
        
        if(data.target.checked){
            tableType.push(data.target.value);
            if(checkboxesGen[0] !== 'undefined') {
                uncheckAll(checkboxesGen);
                tableGen = []
            }
        } else if(!data.target.checked) {
            const find = tableType.findIndex(element => element ===  data.target.id);
            tableType.splice(find, 1)
        }
        return { tableType, checkboxesType }
    }

    /**
 * 
 * @param {*} data = data from an input (able to get .target or in this case, checked : true/false of a checkbox)
 * @returns table whith all data where {data.target.checked === true}
 */
     export const handleChangeGen = (data) => {
        checkboxesGen.push(data.target)
        
        if(data.target.checked){
            tableGen.push(data.target.value);
            if(checkboxesType[0] !== 'undefined') {
                uncheckAll(checkboxesType);
                tableType = []
            }
        } else if(!data.target.checked) {
            const find = tableGen.findIndex(element => element ===  data.target.id);
            tableGen.splice(find, 1)
        }
        return { tableGen, checkboxesGen }
    }
   

export { tableType, tableGen, checkboxesGen, checkboxesType }



