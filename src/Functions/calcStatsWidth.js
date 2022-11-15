
/**
 * 
 * @param {*} value number
 * @returns calcul of a percentage of value ((value * 100) / 180)
 */
export const calcWidth = (value) => {
    if (value <= 180) {
        return ((value * 100) / 180)//px ou %????
    } else {
        return 100
    }
}