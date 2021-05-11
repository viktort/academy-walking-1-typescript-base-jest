import { Ledger } from "../main/Ledger";
import { Transaction } from "../main/Transaction";

describe("Test Ledger object", () => {
    it("adds and amount", function () {
        const transactions = [
            new Transaction(1000)
        ]
        const ledger = new Ledger();
        ledger.add(1000);
        expect(ledger.transactionHistory()).toEqual(transactions)
    });
});