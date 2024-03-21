// Transaction Analysis

const transaction = [
    {
        id: 1,
        description: 'Grocery Shopping',
        amount: -50
    },
    {
        id: 2,
        description: 'Salary Deposit',
        amount: 2000
    },
    {
        id: 3,
        description: 'Utility Bill Payment',
        amount: -100
    },
    {
        id: 4,
        description: 'Online Purchase',
        amount: -30
    }
]

// 1. Calculate Total Balance
const totalBalance = transaction.reduce((accumulator, transaction) => accumulator + transaction.amount, 0);
console.log('Total Balance: ', totalBalance);

// 2. Fins the largest transaction (Income or Expense)
const largestTransaction = transaction.reduce((maxTransaction, transaction) => {
  return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction;
}, transaction[0]);

console.log('Largest Transaction: ', largestTransaction);

// 3. Filter Purchase Transaction
const purchaseTransaction = transaction.filter(transaction => transaction.amount < 0);
console.log('Purchase Transaction: ', purchaseTransaction);

// 4. Find a Transaction by Description
const transactionByDescription = transaction.find(transaction => transaction.description === 'Online Purchase');
console.log('Transaction By Description: ', transactionByDescription);

// 5. Find Index of a Transaction by Amount
const indexTransactionByAmount = transaction.findIndex(transaction => transaction.amount === -30);
console.log('Index Transaction By Amount: ', indexTransactionByAmount);

// 6. Update Transaction Descriptions
transaction.forEach(transaction => {
    if (transaction.amount < 0) {
        transaction.description = 'Expense', transaction.description;
    } else {
        transaction.description = 'Income', transaction.description;
    }
});

console.log('Updated Transaction Descriptions: ', transaction);