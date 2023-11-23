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

    let priceOfAs = (numberOfA % 3) * 130 
    
    const priceOfCs = 20 * numberOfC
    const priceOfDs = 15 * numberOfD

};