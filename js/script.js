"use strict";
class Account {
    constructor(balanceInit) {
        this.balanceInit = 0;
    }
    Deposit() {
        return this.balanceInit + 20;
    }
    whitDraw() {
        return this.Deposit() - 10;
    }
    secondDeposit() {
        return this.whitDraw() + 30;
    }
    secondWhitDraw() {
        return this.secondDeposit() - 15;
    }
}
class MotherAccount extends Account {
    balance() {
        return "Saldo attuale " + this.secondWhitDraw();
    }
    addInterest() {
        return this.balance() + 2, 5;
    }
}
let mom = new MotherAccount(0);
console.log("Saldo della madre:" + mom.balance());
console.log("Interessi:" + mom.addInterest());
class SonAccount extends Account {
    balance() {
        return "Saldo attuale " + this.secondWhitDraw();
    }
}
let son = new SonAccount(0);
console.log("Saldo del figlio:" + son.balance());
