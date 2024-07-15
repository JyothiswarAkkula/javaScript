// Define the object structure for each transaction
const Transaction = {
    payeeName: "",
    amount: 0,
    date: new Date(),
    category: "", // Optional: You can add a category property for transactions
  };
  
  // Create an empty array to store transactions
  const transactions = [];
  
  // Add a sample transaction
  transactions.push(Object.assign(Transaction, {
    payeeName: "John Doe",
    amount: 100,
    category: "Shopping",
  }));
  
  // Function to add a new transaction
  function addTransaction(payeeName, amount, category = "") {
    const newTransaction = Object.assign({}, Transaction, {
      payeeName,
      amount,
      category,
    });
    transactions.push(newTransaction);
  }
  
  // Function to display all transactions
  function displayTransactions() {
    if (transactions.length === 0) {
      console.log("No transactions found.");
      return;
    }
  
    console.log("PhonePe Transactions:");
    for (const transaction of transactions) 
    {
      console.log(
        `Payee: ${transaction.payeeName}, Amount: ₹${transaction.amount}, Date: ${transaction.date.toLocaleDateString()}, Category: ${transaction.category || "Uncategorized"}`
      );
    }
  }
  
  // Add a few more transactions
  addTransaction("Electric Bill", 250);
  addTransaction("Movie Ticket", 150, "Entertainment");
  
  // Display all transactions
  displayTransactions();
  