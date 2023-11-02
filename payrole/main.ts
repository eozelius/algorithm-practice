/**
 * Given an amount of money `amount` and a list of employees `employees`, determine how much to pay employee.
 * Constraints:
 *   1. Each employee has a maximum amount that they are able to be paid.
 *   2. The money should be shared _as evenly as possible_
 *
 * Note: it is possible that a remainder will exist, that value is returned in the function response.
 */

import { payroll, Employee, PayrollResponse } from "./src/payroll";

const employeesToPay: Employee[] = [
  {
    name: "eric",
    maxPay: 5,
    amountPaid: 0
  },
  {
    name: "anna",
    maxPay: 100,
    amountPaid: 0
  },
  {
    name: "Greg",
    maxPay: 200,
    amountPaid: 0
  },
  {
    name: "jeff",
    maxPay: 50,
    amountPaid: 0
  },
  {
    name: "morgan",
    maxPay: 25,
    amountPaid: 0
  }
];

const bankAccountAmount = 201.28;

const response: PayrollResponse = payroll(
  bankAccountAmount,
  employeesToPay,
  false /* debugMode */
);

console.log(`response => `, response);

const asdf = async () => {
  try {
    const response = await window.fetch('https://www.linkedin.com/')

    console.log(`response => `, response)
  } catch (error) {
    console.error('caught error =>', error)
  }
}