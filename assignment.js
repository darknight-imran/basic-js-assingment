// Problem: 1
/* function anaToVori(ana) {
    if (typeof ana != 'number') {
        return ('Enter the Number')
    }
    const vori = ana / 16;
    return vori;
}
const voriResult = anaToVori(64);
console.log(voriResult); */






// Problem: 2
function pandaCost(singara, samosa, jilapi) {
    const singaraPice = singara * 7;
    const samosaPice = samosa * 10;
    const jilapiPice = jilapi * 15;
    const total = singaraPice + samosaPice + jilapiPice;
    return total;
}
const totalCost = pandaCost(1, 1, 1);
console.log(totalCost);






// Problem: 3
/* function picnicBudget(persions) {
    const frist100Persion = 5000;
    const second100Persion = 4000;
    const thirdRestPersion = 3000;
    if (persions <= 100) {
        const frist10Calculation = persions * frist100Persion;
        return frist10Calculation;
    }
    else if (persions <= 200) {
        const persion100Amonut = 100 * frist100Persion;
        const restPersion = persions - 100;
        const second100Amount = restPersion * second100Persion;
        const totalAmount = persion100Amonut + second100Amount;
        return totalAmount;
    }
    else {
        const persion100Amonut = 100 * frist100Persion;
        const second100Amount = 100 * second100Persion;
        const restPersion = persions - 200;
        const restPersionCalculation = restPersion * thirdRestPersion;
        const totalAmounts = persion100Amonut + second100Amount + restPersionCalculation;
        return totalAmounts;
    }
}

const picnicBudgetResults = picnicBudget(201);
console.log(picnicBudgetResults); */





// Problem: 4
/* const friendNames = ['rana', 'rabi', 'jobaer', 'imran', 'halim'];
function oddFriend(names) {
    let oddName = [];
    for (let i = 0; i < names.length; i++) {
        let frdName = names[i].length;
        if (frdName % 2 != 0) {
            oddName.push(names[i]);
            return oddName;
        }
    }

}
const friendsNames = oddFriend(friendNames);
console.log(friendsNames); */
