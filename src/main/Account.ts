import { AccountService } from "./AccountService";
import { Ledger } from "./Ledger";

export class Account implements AccountService {
    ledger: Ledger

    constructor(ledger: Ledger) {
        this.ledger = ledger
    }

    deposit(amount: number): void {
        this.ledger.add(amount);
    }
}