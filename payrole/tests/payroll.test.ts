import { payroll, Employee, PayrollResponse } from "../src/payroll";

describe("payroll()", () => {
  describe("when amount >= sum(maxPay)", () => {
    it("evenly distributes money equally with 0 remainder", () => {
      const amount = 201;
      const employees: Employee[] = [
        { name: "eric", maxPay: 5, amountPaid: 0 },
        { name: "anna", maxPay: 100, amountPaid: 0 },
        { name: "Greg", maxPay: 200, amountPaid: 0 },
        { name: "jeff", maxPay: 50, amountPaid: 0 },
        { name: "morgan", maxPay: 25, amountPaid: 0 }
      ];

      const response: PayrollResponse = payroll(amount, employees);

      expect(response.remainder).toEqual(0);

      expect(response.ledger).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "eric", maxPay: 5, amountPaid: 5 }),
          expect.objectContaining({ name: "jeff", maxPay: 50, amountPaid: 50 }),
          expect.objectContaining({
            name: "morgan",
            maxPay: 25,
            amountPaid: 25
          }),
          expect.objectContaining({
            name: "anna",
            maxPay: 100,
            amountPaid: 60.5
          }),
          expect.objectContaining({
            name: "Greg",
            maxPay: 200,
            amountPaid: 60.5
          })
        ])
      );
    });

    it("evenly distributes the money when amount is enough to pay each employee their max pay and remainder > 0", () => {
      const amount = 100;
      const employees: Employee[] = [
        { name: "eric", maxPay: 10, amountPaid: 0 },
        { name: "anna", maxPay: 10, amountPaid: 0 },
        { name: "jeff", maxPay: 10, amountPaid: 0 }
      ];

      const response: PayrollResponse = payroll(amount, employees);

      expect(response.remainder).toEqual(70);
      expect(response.ledger).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "eric", maxPay: 10, amountPaid: 10 }),
          expect.objectContaining({ name: "anna", maxPay: 10, amountPaid: 10 }),
          expect.objectContaining({ name: "jeff", maxPay: 10, amountPaid: 10 })
        ])
      );
    });
  });

  describe("when amount < sum(maxPay)", () => {
    it("evenly distributes the money", () => {
      const amount = 30;
      const employees: Employee[] = [
        { name: "eric", maxPay: 20, amountPaid: 0 },
        { name: "anna", maxPay: 20, amountPaid: 0 }
      ];

      const response: PayrollResponse = payroll(amount, employees);

      expect(response.remainder).toEqual(0);
      expect(response.ledger).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: "anna", maxPay: 20, amountPaid: 15 }),
          expect.objectContaining({
            name: "eric",
            maxPay: 20,
            amountPaid: 15
          })
        ])
      );
    });
  });
});
