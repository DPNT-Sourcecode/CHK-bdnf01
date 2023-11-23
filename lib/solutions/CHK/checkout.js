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
    let numberOfG = 0
    let numberOfH = 0
    let numberOfI = 0
    let numberOfJ = 0
    let numberOfK = 0
    let numberOfL = 0
    let numberOfM = 0
    let numberOfN = 0
    let numberOfO = 0
    let numberOfP = 0
    let numberOfQ = 0
    let numberOfR = 0
    let numberOfS = 0
    let numberOfT = 0
    let numberOfU = 0
    let numberOfV = 0
    let numberOfW = 0
    let numberOfX = 0
    let numberOfY = 0
    let numberOfZ = 0

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
        } else if (item === "G") {
            numberOfG++
        } else if (item === "H") {
            numberOfH++
        } else if (item === "I") {
            numberOfI++
        } else if (item === "J") {
            numberOfJ++
        } else if (item === "K") {
            numberOfK++
        } else if (item === "L") {
            numberOfL++
        } else if (item === "M") {
            numberOfM++
        } else if (item === "N") {
            numberOfN++
        } else if (item === "O") {
            numberOfO++
        } else if (item === "P") {
            numberOfP++
        } else if (item === "Q") {
            numberOfQ++
        } else if (item === "R") {
            numberOfR++
        } else if (item === "S") {
            numberOfS++
        } else if (item === "T") {
            numberOfT++
        } else if (item === "U") {
            numberOfU++
        } else if (item === "V") {
            numberOfV++
        } else if (item === "W") {
            numberOfW++
        } else if (item === "X") {
            numberOfX++
        } else if (item === "Y") {
            numberOfY++
        } else if (item === "Z") {
            numberOfZ++
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

    numberOfF = numberOfF - Math.floor(numberOfF / 3)

    const priceOfFs = numberOfF * 10

    const numberOfHSpecialDeals10Bought = Math.floor(numberOfH / 10)
    const numberOfHSpecialDeals5Bought = Math.floor((numberOfH - (numberOfHSpecialDeals10Bought * 10)) / 5)
    const priceOfHs = numberOfH * 

    return priceOfAs + priceOfBs + priceOfCs + priceOfDs + priceOfEs + priceOfFs
};
