export type Employee = {
  name: string;
  maxPay: number;
  amountPaid: number;
};

export type PayrollResponse = {
  ledger: Employee[];
  remainder: number;
};

/**
 * @param amount  - Number of dollars that can be distributed
 * @param employees - List of employees that are eligible to be paid
 * @returns - object containing ledger describing how much each employee has been
 * paid, and the remaining money.
 */
export const payroll = (
  amount: number,
  employees: Employee[],
  debugMode = false
): PayrollResponse => {
  // Format to Money
  amount = parseFloat(amount.toFixed(2));

  // recursive base case, either the money has all been distributed,
  // or there are zero employees eligible to be paid more
  if (!employees || employees.length === 0 || amount <= 0.01) {
    return {
      remainder: amount,
      ledger: employees
    };
  }

  const ledger: Employee[] = [];
  const eligibleToBePaidMore: Employee[] = [];
  const notEligibleToBePaidMore: Employee[] = [];
  const fairShare = parseFloat((amount / employees.length).toFixed(2));

  employees.forEach((e) => {
    const newLedgerItem: Employee = {
      name: e.name,
      maxPay: e.maxPay,
      amountPaid: e.amountPaid
    };

    if (fairShare + e.amountPaid >= e.maxPay) {
      // Employee WILL reach their max pay. Pay them their max pay (e.maxPay - e.amountPaid)
      // and add them to notEligibleToBePaidMore[]
      const pay = e.maxPay - e.amountPaid;
      newLedgerItem.amountPaid += pay;
      amount -= pay;
      notEligibleToBePaidMore.push(newLedgerItem);
    } else {
      // Employee has NOT reached their max pay. Pay them their fair share
      // and add them to eligibleToBePaidMore[]
      newLedgerItem.amountPaid += fairShare;
      amount -= fairShare;
      eligibleToBePaidMore.push(newLedgerItem);
    }

    ledger.push(newLedgerItem);
  });

  if (debugMode) {
    console.log("ledger => ", ledger);
    console.log("eligibleToBePaidMore => ", eligibleToBePaidMore);
    console.log("notEligibleToBePaidMore => ", notEligibleToBePaidMore);
    console.log(`remainder: `, amount);
  }

  const recursiveResponse = payroll(amount, eligibleToBePaidMore);

  return {
    // Recursively call payrole in the event that amount > 0 and eligibleToBePaidMore has
    // at least one employee
    ledger: [...notEligibleToBePaidMore, ...recursiveResponse.ledger],
    remainder: recursiveResponse.remainder
  };
};
