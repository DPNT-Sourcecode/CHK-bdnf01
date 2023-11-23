'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    const skusList = skus.split("")
    let numberOfA = 0
    let numberOfB = 0
    let numberOfC = 0
    let numberOfD = 0
    let numberOfE = 0
    let numberOfF = 0

    for (const item of skusList) {
        if (item === "A") {
            numberOfA++
        } else if (item === "B") {
            numberOfB++
        } else if (item === "C") {
            numberOfC++
        } else if (item === "D") {
            numberOfD++
        } else if (item === "E") {
            numberOfE++
        } else if (item === "F") {
            numberOfF++
        } else {
            return -1
        }
    }

    const freeBsFromESpecialDeal = Math.floor(numberOfE / 2)
    numberOfB = Math.max(0, numberOfB - freeBsFromESpecialDeal)

    const numberOfASpecialDealsFor5Bought = Math.floor(numberOfA / 5)
    const numberOfASepcialDealsFor3Bought = Math.floor((numberOfA - (numberOfASpecialDealsFor5Bought * 5)) / 3)
    const remainingAs = numberOfA - (numberOfASpecialDealsFor5Bought * 5) - (numberOfASepcialDealsFor3Bought * 3)
    const priceOfAs = (numberOfASpecialDealsFor5Bought * 200) + (numberOfASepcialDealsFor3Bought * 130) + (50 * remainingAs)

    const numberOfBSpecialDeals = Math.floor(numberOfB / 2)
    const remainingBs = numberOfB % 2
    const priceOfBs = (numberOfBSpecialDeals * 45) + (remainingBs * 30)
    
    const priceOfCs = 20 * numberOfC
    const priceOfDs = 15 * numberOfD
    const priceOfEs = 40 * numberOfE

    return priceOfAs + priceOfBs + priceOfCs + priceOfDs + priceOfEs
};