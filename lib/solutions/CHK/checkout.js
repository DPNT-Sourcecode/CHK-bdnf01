"use strict";

//noinspection JSUnusedLocalSymbols
module.exports = function(skus) {
  const skusList = skus.split("");
  let numberOfA = 0;
  let numberOfB = 0;
  let numberOfC = 0;
  let numberOfD = 0;
  let numberOfE = 0;
  let numberOfF = 0;
  let numberOfG = 0;
  let numberOfH = 0;
  let numberOfI = 0;
  let numberOfJ = 0;
  let numberOfK = 0;
  let numberOfL = 0;
  let numberOfM = 0;
  let numberOfN = 0;
  let numberOfO = 0;
  let numberOfP = 0;
  let numberOfQ = 0;
  let numberOfR = 0;
  let numberOfS = 0;
  let numberOfT = 0;
  let numberOfU = 0;
  let numberOfV = 0;
  let numberOfW = 0;
  let numberOfX = 0;
  let numberOfY = 0;
  let numberOfZ = 0;

  for (const item of skusList) {
    if (item === "A") {
      numberOfA++;
    } else if (item === "B") {
      numberOfB++;
    } else if (item === "C") {
      numberOfC++;
    } else if (item === "D") {
      numberOfD++;
    } else if (item === "E") {
      numberOfE++;
    } else if (item === "F") {
      numberOfF++;
    } else if (item === "G") {
      numberOfG++;
    } else if (item === "H") {
      numberOfH++;
    } else if (item === "I") {
      numberOfI++;
    } else if (item === "J") {
      numberOfJ++;
    } else if (item === "K") {
      numberOfK++;
    } else if (item === "L") {
      numberOfL++;
    } else if (item === "M") {
      numberOfM++;
    } else if (item === "N") {
      numberOfN++;
    } else if (item === "O") {
      numberOfO++;
    } else if (item === "P") {
      numberOfP++;
    } else if (item === "Q") {
      numberOfQ++;
    } else if (item === "R") {
      numberOfR++;
    } else if (item === "S") {
      numberOfS++;
    } else if (item === "T") {
      numberOfT++;
    } else if (item === "U") {
      numberOfU++;
    } else if (item === "V") {
      numberOfV++;
    } else if (item === "W") {
      numberOfW++;
    } else if (item === "X") {
      numberOfX++;
    } else if (item === "Y") {
      numberOfY++;
    } else if (item === "Z") {
      numberOfZ++;
    } else {
      return -1;
    }
  }

  const freeBsFromESpecialDeal = Math.floor(numberOfE / 2);
  numberOfB = Math.max(0, numberOfB - freeBsFromESpecialDeal);

  const freeMsFromNSpecialDeal = Math.floor(numberOfN / 3);
  numberOfN = Math.max(0, numberOfN - freeMsFromNSpecialDeal);

  const freeQsFromRSpecialDeal = Math.floor(numberOfR / 3);
  numberOfQ = Math.max(0, numberOfQ - freeQsFromRSpecialDeal);

  const numberOfASpecialDealsFor5Bought = Math.floor(numberOfA / 5);
  const numberOfASepcialDealsFor3Bought = Math.floor(
    (numberOfA - numberOfASpecialDealsFor5Bought * 5) / 3
  );
  const remainingAs =
    numberOfA -
    numberOfASpecialDealsFor5Bought * 5 -
    numberOfASepcialDealsFor3Bought * 3;
  const priceOfAs =
    numberOfASpecialDealsFor5Bought * 200 +
    numberOfASepcialDealsFor3Bought * 130 +
    50 * remainingAs;

  const numberOfBSpecialDeals = Math.floor(numberOfB / 2);
  const remainingBs = numberOfB % 2;
  const priceOfBs = numberOfBSpecialDeals * 45 + remainingBs * 30;

  const priceOfCs = 20 * numberOfC;
  const priceOfDs = 15 * numberOfD;
  const priceOfEs = 40 * numberOfE;

  numberOfF = numberOfF - Math.floor(numberOfF / 3);

  const priceOfFs = numberOfF * 10;
  const priceOfGs = numberOfG * 10;

  const numberOfHSpecialDeals10Bought = Math.floor(numberOfH / 10);
  const numberOfHSpecialDeals5Bought = Math.floor(
    (numberOfH - numberOfHSpecialDeals10Bought * 10) / 5
  );
  const remainingHs =
    numberOfH -
    numberOfHSpecialDeals10Bought * 10 -
    numberOfHSpecialDeals5Bought * 5;
  const priceOfHs =
    remainingHs * 10 +
    numberOfHSpecialDeals10Bought * 80 +
    numberOfASpecialDealsFor5Bought * 45;

  const priceOfIs = numberOfI * 35;
  const priceOfJs = numberOfJ * 60;

  const numberOfKSpecialDeals = Math.floor(numberOfK / 2);
  const remainingKs = numberOfK % 2;
  const priceOfKs = numberOfKSpecialDeals * 150 + remainingKs * 80;

  const priceOfLs = numberOfL * 90;
  const priceOfMs = numberOfM * 15;
  const priceOfNs = numberOfN * 40;
  const priceOfOs = numberOfO * 10;

  const numberOfPSpecialDeals = Math.floor(numberOfP / 5);
  const remainingPs = numberOfP % 5;
  const priceOfPs = numberOfPSpecialDeals * 200 + remainingPs * 50;

  const numberOfQSpecialDeals = Math.floor(numberOfQ / 3);
  const remainingQs = numberOfQ % 3;
  const priceOfQs = numberOfQSpecialDeals * 80 + remainingQs * 30;

  const priceOfRs = 50 * numberOfR;
  const priceOfSs = 30 * numberOfS;
  const priceOfTs = 20 * numberOfT;

  numberOfU = numberOfU - Math.floor(numberOfU / 3);
  const priceOfUs = numberOfU * 40;

  const numberOfVSpecialDealsFor3Bought = Math.floor(numberOfV / 3);
  const numberOfVSepcialDealsFor2Bought = Math.floor(
    (numberOfV - numberOfVSpecialDealsFor3Bought * 3) / 2
  );
  const remainingVs =
    numberOfV -
    numberOfVSpecialDealsFor3Bought * 3 -
    numberOfVSepcialDealsFor2Bought * 2;
  const priceOfVs =
    numberOfVSpecialDealsFor3Bought * 130 +
    numberOfVSepcialDealsFor2Bought * 90 +
    50 * remainingVs;

  const priceOfWs = 20 * numberOfW;
  const priceOfXs = 90 * numberOfX;
  const priceOfYs = 10 * numberOfY;
  const priceOfZs = 50 * numberOfZ;

  return (
    priceOfAs +
    priceOfBs +
    priceOfCs +
    priceOfDs +
    priceOfEs +
    priceOfFs +
    priceOfGs +
    priceOfHs +
    priceOfIs +
    priceOfJs +
    priceOfKs +
    priceOfLs +
    priceOfMs +
    priceOfNs +
    priceOfOs +
    priceOfPs +
    priceOfQs +
    priceOfRs +
    priceOfSs +
    priceOfTs +
    priceOfUs +
    priceOfVs +
    priceOfWs +
    priceOfXs +
    priceOfYs +
    priceOfZs
  );
};





