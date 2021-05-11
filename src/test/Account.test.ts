import { AccountService } from "../main/AccountService";
import { Account } from "../main/Account";
import { Ledger } from "../main/Ledger";
import { Transaction } from "../main/Transaction";
import { StatementPrinter } from "../main/StatementPrinter";

const ledger = new Ledger();
jest.mock("../main/Ledger");
jest.mock("../main/StatementPrinter");

describe('Account test', () => {
    const statementPrinter = new StatementPrinter();

    it("can deposit an amount", () => {
        const ledger = new Ledger();
        const account: AccountService = new Account(ledger, statementPrinter);
        account.deposit(1000);
        expect(ledger.addDeposit).toHaveBeenCalledWith(1000)
    })

    it("can withdraw an amount", () => {
        const ledger = new Ledger();
        const account: AccountService = new Account(ledger, statementPrinter);
        account.withdraw(1000);
        expect(ledger.addWithdrawal).toHaveBeenCalledWith(1000)
    })

    it("can print a statement", () => {
        const account: AccountService = new Account(ledger, statementPrinter);
        account.deposit(1000);
        account.printStatement();
        expect(statementPrinter.print).toHaveBeenCalledWith([
            new Transaction(1000)
        ])
    });
})