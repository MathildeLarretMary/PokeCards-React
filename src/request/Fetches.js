import axios from "axios";

// request API for All pokémons
/**
 * 
 * @returns datas of all pokémons on PokéBuild API
 */
export async function getAllPkm() {
    const result = await axios.get('https://pokebuildapi.fr/api/v1/pokemon');
    return result.data;
}

// request API for a specific type of pokémons
/**
 * 
 * @param {*} type take a type to do a request to PokéBuild API
 * @returns datas of all pokémons of a specific type PokéBuild API
 */
export async function getByType(type) {
    const result = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/type/${type}`);
    return result.data; 
}

// request API for a specific generation of pokémons
/**
 * 
 * @param {*} gen take a generation to do a request to PokéBuild API
 * @returns datas of all pokémons of a specific generation PokéBuild API
 */
export async function getByGen(gen) {
    const result = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${gen}`);
    return result.data;
}

// request API for a specific pokémon by his name
/**
 * 
 * @param {*} pokéName takes a name of a unique pokemon
 * @returns data of pokemon has been searched by his name
 */
export async function getByName(pokeName) {
    const result = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokeName}`);
    return result.data;

}

// request API for a specific pokémon by his Id
/**
 * 
 * @param {*} pokeId takes an Id of a unique pokemon
 * @returns data of pokemon has been searched by his Id
 */
export async function getById(pokeId) {
    const result = await axios.get(`https://pokebuildapi.fr/api/v1/pokemon/${pokeId}`);
    return result.data;
}
