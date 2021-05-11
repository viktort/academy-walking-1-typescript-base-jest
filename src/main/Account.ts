import { AccountService } from "./AccountService";
import { Ledger } from "./Ledger";
import { StatementPrinter } from "./StatementPrinter";

export class Account implements AccountService {
    ledger: Ledger
    statementPrinter: StatementPrinter

    constructor(ledger: Ledger, statementPrinter: StatementPrinter) {
        this.ledger = ledger;
        this.statementPrinter = statementPrinter;
    }

    deposit(amount: number): void {
        this.ledger.addDeposit(amount);
    }

    withdraw(amount: number): void {
        this.ledger.addWithdrawal(amount);
    }

    printStatement(): void {
        this.statementPrinter.print(this.ledger.transactionHistory())
    }
}