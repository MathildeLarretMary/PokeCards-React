
/**
 * 
 * @param {*} array this in for an array of arrays
 * @returns a new array with just values inside (no arrays, just objects like a result of only a single API request)
 */
export const concatArray = (array) => {
  
    let newArray = []
//###############################################################
    for(let i=0; i<array.length; i++) {
      newArray.push(...array[i])
  }

//##############################################################
  
    return newArray
}