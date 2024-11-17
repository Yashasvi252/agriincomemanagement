const ExpenseSchmea = require("../models/expenseModel");
const { param } = require("../routes/transactions");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const Expense = ExpenseSchmea({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !date || !description) {
        return res.status(400).send('All fields are required');
    }
    if (amount <= 0 || !amount  === 'number'  ) {
        return res.status(400).send('Amount must be positive');
    }

    await Expense.save();
    // console.log(Expense);
    res.status(201).json({message:'Expense Added'});

  } catch (error) {
    console.log(error); 
    res.status(500).json({ error: "Server Error" });
  }

  console.log(Expense);
};


exports.getExpense = async (req, res) => {
    try {
        const Expenses = await ExpenseSchmea.find().sort({createdAt : -1});
        res.status(201).json(Expenses);
        
    } catch (error) {
            console.log(error); 
            res.status(500).json({ error: "Error Occurred!" });
        
    }
}


exports.deleteExpense = async (req, res) => {

   const  {id} = req.params; 
   let expense= await ExpenseSchmea.findByIdAndDelete(id);
   if(!expense){
       return res.status(404).json({ message:"No Record Found"})
   }
   res.status(200).json({ message:"Record Deleted Successfully" })
   
}