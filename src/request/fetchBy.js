import {  getAllPkm, getByGen, getByType, getByName, getById  } from "./Fetches";
import { concatArray } from "../Functions/concatArray";

// SET RESPONSE OF SEARCHING ALL POKEMONS----------------------------------
/**
 * 
 * @param {*} setState take the setter of a useState hook
 * @returns set response of seraching all pkms into the state given
 */
export async function fetchPokemons(setState) {
    try {
       const response = await getAllPkm();
        return setState(response) 
    } catch (error) {
        console.log(error);
    }
    
}


// SET RESPONSE OF SEARCHING POKEMONS BY TYPE------------------------------
/**
 * 
 * @param {*} array take an array to do APIsearches with all elements of this array
 * @param {*} setState  take the setter of a useState hook
 * @return setState(results of searches) in this case, to have all types of pkms
 */
export async function fecthByType(array, setState) {

    try {
            
        let table = [];

        // create new table with all search in the array
        await array.map(element => getByType(element)

        // then with each result of element, assign it to the empty table
        .then((result) => {
            table.push(result);

            let concatTable = concatArray(table);

            // eslint-disable-next-line no-self-compare
            const finalTable = Array.from(new Set(concatTable.map(el => el.id)))
            .map(id => {
                return concatTable.find(el => el.id === id )
            })

            // order by element.id function(array) => sort();
            setState(finalTable.sort((a, b) => a.id - b.id))

        }));

    } catch (error) {

        console.log(error);

    }

}


// SET RESPONSE OF SEARCHING POKEMONS BY GENERATION----------------------------------
/**
 * 
 * @param {*} array take an array to do APIsearches with all elements of this array
 * @param {*} setState  take the setter of a useState hook
 * @return setState(results of searches) in this case, to have all generations of pkms
 */
export async function fecthByGen(array, setState) {

    try {
        
        let table = [];

        // create new table with all search in the array
        await array.map(element => getByGen(element)

        // then with each result of element, assign it to the empty table
        .then((result) => {
            table.push(result);

            let finalTable = concatArray(table);

            // order by element.id function(array) => sort();
            setState(finalTable.sort((a, b) => a.id - b.id))
        }));

    } catch (error) {
        
        console.log(error);

    }
}

// SET RESPONSE OF SEARCHING ALL POKEMONS NAMES----------------------------------
/**
 * 
 * @param {*} setState take the setter of a useState hook
 * @returns set response of seraching all pkms names into the state given
 */
 export async function fetchPokemonsNames(setState) {
    try {
       const response = await getAllPkm();
        return setState(response.map(element => {
           return {"name" : element.name, "id": element.id}
        }));
    } catch (error) {
        console.log(error);
    }
    
}

// SET RESPONSE OF A UNIQUE POKEMON BY HIS NAME----------------------------------
/**
 * 
 * @param {*} pokeName takes a name of a pokemon
 * @param {*} setState takes the setter to set pokemon values
 * @returns if there is a name, returns pokemon values, if not, returns nothing
 */
export async function fetchByName(pokeName, setState) {
    if(pokeName) {
        try {
            const response = await getByName(pokeName);
            return setState(response);
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('no name');
    }
    
}

// SET RESPONSE OF A UNIQUE POKEMON BY HIS ID----------------------------------
/**
 * 
 * @param {*} pokeId takes the Id of a pokemon
 * @param {*} setState takes the setter to set pokemon values
 * @returns  if there is an Id, returns pokemon values, if not, returns nothing
 */
export async function fetchById(pokeId, setState, setId) {
    if(pokeId) {
        try {
            const response = await getById(pokeId);
            setState(response);
            setId([])
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('no id');
    }
}