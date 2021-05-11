import { Transaction } from "./Transaction";

export class Ledger {
    transactions: Array<Transaction>;

    constructor() {
        this.transactions = [];
    }

    addDeposit(amount: number) {
        const transaction = new Transaction(amount);
        this.transactions.push(transaction)
        console.log(this.transactions)
    }

    addWithdrawal(amount: number) {
        const transaction = new Transaction(-amount);
        this.transactions.push(transaction)
    }

    transactionHistory() {
        return this.transactions;
    }
}