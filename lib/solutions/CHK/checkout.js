'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let totalPrice = 0
    const skusList = skus.split("")
    let numberOfA = 0
    let numberOfB = 0
    let numberOfC = 0
    let numberOfD = 0

    for (const item of skusList) {
        if (item === "A") {
            numberOfA++
        }

        if (item === "B") {
            numberOfB++
        }

        if (item === "C") {
            numberOfC++
        }

        if (item === "D") {
            numberOfD++
        }
    }

    const numberOfASpecialDeals = Math.floor(numberOfA / 3)
    const remainingAs = numberOfA % 3
    const priceOfAs = (numberOfASpecialDeals * 130) + (remainingAs * 50)

    const numberOfBSpecialDeals = Math.floor(numberOfB / 2)
    const remainingBs = numberOfB % 2
    const priceOfBs = (numberOfBSpecialDeals * 45) + (remainingBs * 30)
    
    const priceOfCs = 20 * numberOfC
    const priceOfDs = 15 * numberOfD

    return priceOfAs + priceOfBs + priceOfCs + priceOfDs

};