import { Transaction } from "./Transaction";

export class Ledger {
    transactions: Transaction[];

    constructor() {
        this.transactions = [];
    }

    add(amount: number) {
        const transaction = new Transaction(amount);
        this.transactions.push(transaction)
    }


    transactionHistory() {
        return this.transactions;
    }
}