import { AccountService } from "../main/AccountService";
import { Account } from "../main/Account";
import { Ledger } from "../main/Ledger";
jest.mock("../main/Ledger")

describe('Account test', () => {

    it("can deposit an amount", () => {
        const ledger = new Ledger;
        const account: AccountService = new Account(ledger);
        account.deposit(1000);
        expect(ledger.add).toHaveBeenCalledWith(1000)
    })
})