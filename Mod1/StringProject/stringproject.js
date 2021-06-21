/*this program is meant to allow someone to see whether or not they can spend a certain amount of money
over a specified amount of months. They will have to input a starting balance, a desired amount to spend
every month, and how many months they want to spend that amount for. This program can serve 
people looking to retire, people looking to take vacation, or anything of that nature.*/

//this is to add the proper endings for months. Ex: 3rd, 2nd, 1st, etc.
let endings = "th" + "st" + "nd" + "rd";
let th = endings.substring(0, 2);
let st = endings.substr(2, 2);
let nd = endings.slice(4, 6);
let rd = endings.slice(6, 8);

//these are the sentences which will be printed and the user would see.
let firstSent =
  "Your starting balance is x dollars. With a starting balance of x dollars, you will ";
let firstYesSent = "be able to spend v dollars ";
let secondYesSent = "per month for w months ";
let thirdYesSent = "and will have a remaining balance of x dollars.";
let secondSent = "deplete your total balance by the x";
let thirdSent =
  " month. To prevent this, you should increase your balance with an additional amount of z dollars.";
let firstNoSent =
  "not be able to make it past the first month. Try entering a different starting balance. ";

//this is where the user will input how much they want to spend, for how long, and what their starting balance is.
let desiredSpend;
let monthsSpending;
let startingBalance;

//this is where the math is done.
let possibleSpend = desiredSpend * monthsSpending;
let remainingBalance = startingBalance - possibleSpend;
let spendingEnd = Math.floor(startingBalance / desiredSpend); //Math.floor((possibleSpend-startingBalance)/monthsSpending)
let amountToAdd = desiredSpend * monthsSpending - startingBalance;

//the purpose of this is to add the needed dollar and month values into the sentences being printed.
let firstReplace = firstSent.replace(/x/g, startingBalance);
let secondReplace = firstYesSent.replace("v", desiredSpend);
let thirdReplace = secondYesSent.replace("w", monthsSpending);
let fourthReplace = secondSent.replace("x", spendingEnd);
let fifthReplace = thirdSent.replace("z", amountToAdd);
let sixthReplace = thirdYesSent.replace("x", remainingBalance);

//this is to target the last number in months in order to allow proper ordinal usage. Such as 1st, 2nd, 3rd, etc.
let endingNumb = spendingEnd % 10;

//if the amount they can spend over the amount of time is greater than the starting balance
if (startingBalance < possibleSpend) {
  if (endingNumb == 0 || endingNumb >= 4) {
    post = th;
    console.log(firstReplace.concat(fourthReplace) + post + fifthReplace);
  } else if (endingNumb == 1) {
    post = st;
    console.log(firstReplace.concat(fourthReplace) + post + fifthReplace);
  } else if (endingNumb == 2) {
    post = nd;
    console.log(firstReplace.concat(fourthReplace) + post + fifthReplace);
  } else if (endingNumb == 3) {
    post = rd;
    console.log(firstReplace.concat(fourthReplace) + post + fifthReplace);
  }
}
//if the amount they want to spend over the amount of time is lower than the starting balance.
else {
  console.log(firstReplace.concat(secondReplace + thirdReplace + sixthReplace));
}
