import { fetchPokemonsNames } from "../request/fetchBy";
import { toNoAccent } from "./toNoAccentString";

/**
 * 
 * @param {*} value the value of an input type="text" to be compared
 * @param {*} array an array of different values to compare with value
 * @param {*} setFalse the setter to turn a boolean to false
 * @param {*} setNames the setter to set compared values on state
 * @returns a new array with all compared values 
 */
export const isInArray = (value, array, setFalse, setNames) => {
    
    if(array !== []) {

        let arrayCopy = [...array]
        let upperFirstLetter = value.charAt(0).toUpperCase() + value.slice(1);

        let finalTable = arrayCopy.filter((element) => {
            return element.name.includes(upperFirstLetter)
        })

        if(finalTable.length > 0 && finalTable.length !== array.length) {
            return finalTable
        } else {
            setFalse(false)
            fetchPokemonsNames(setNames);
        }

    } else {
        console.log('no array');
        setFalse(false)
    }
}

export const checkToSubmit = (value, array, setSearch, setShowSuggests, setNotFound, setInjection) => {
    let toLowerCase = value.toLowerCase();

    let upperFirstLetter = toLowerCase.toLowerCase().charAt(0).toUpperCase() + toLowerCase.slice(1);

    const justNames = array.map(element => toNoAccent(element.name))

    if(justNames.includes(upperFirstLetter)){
        console.log(`${upperFirstLetter} find`)
        setSearch('');
        setShowSuggests(false)
        return true;
    } else if (value.match(/[<\\/>?;$]/g)) {
        setSearch('');
        console.log('petit malandrin');
        setInjection(true)
        return false;
    } else {
        console.log('is not checked or searchbar is empty');
        setNotFound(true)
        return false;
    }
    
}