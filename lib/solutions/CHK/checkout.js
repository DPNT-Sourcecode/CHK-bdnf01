'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const skusList = skus.split("")
    let numberOfA = 0
    let numberOfB = 0
    let numberOfC = 0
    let numberOfD = 0

    for (const item of skusList) {
        if (item === "A") {
            numberOfA++
        } else if (item === "B") {
            numberOfB++
        } else if (item === "C") {
            numberOfC++
        } else if (item === "D") {
            numberOfD++
        } else {
            return -1
        }
    }

    const numberOfASpecialDealsFor5Bought = Math.floor(numberOfA / 5)
    const numberOfBSepcialDealsFor3Bought = numberOfA - (numberOfASpecialDealsFor5Bought * 5)
    const remainingAs = numberOfA - (numberOfASpecialDealsFor5Bought * 5) - (numberOfBSepcialDealsFor3Bought * 3)
    const priceOfAs = (numberOfASpecialDeals * 130) + (remainingAs * 50)

    const numberOfBSpecialDeals = Math.floor(numberOfB / 2)
    const remainingBs = numberOfB % 2
    const priceOfBs = (numberOfBSpecialDeals * 45) + (remainingBs * 30)
    
    const priceOfCs = 20 * numberOfC
    const priceOfDs = 15 * numberOfD

    return priceOfAs + priceOfBs + priceOfCs + priceOfDs

};

