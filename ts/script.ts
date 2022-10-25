class Account {
    balanceInit: number;
    
    constructor (balanceInit: number,){
        this.balanceInit = 0;
    }
    Deposit(): number{
        return this.balanceInit + 20;
    }
    whitDraw(){
        return this.Deposit() - 10;
    }
    secondDeposit(): number{
        return this.whitDraw() + 30;
    }
    secondWhitDraw() {
        return this.secondDeposit() - 15;
    }
}

class MotherAccount extends Account {
    balance(){
        return "Saldo attuale " + this.secondWhitDraw();
    }
    addInterest(){

        return (this.secondWhitDraw()*10) /100;
    }
}
let mom = new MotherAccount(0)

console.log("Saldo della madre:" + mom.balance())
console.log("Interessi del 10% per la madre di:" + mom.addInterest())

class SonAccount extends Account {
    balance(){
        return "Saldo attuale " + this.secondWhitDraw();
    }
}
let son = new SonAccount(0)
console.log("Saldo del figlio:" + son.balance())