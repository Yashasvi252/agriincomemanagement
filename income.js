const IncomeSchmea = require("../models/incomeModel");
const { param } = require("../routes/transactions");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchmea({
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

    await income.save();
    // console.log(income);
    res.status(201).json({message:'Income Added'});

  } catch (error) {
    console.log(error); 
    res.status(500).json({ error: "Server Error" });
  }

  console.log(income);
};


exports.getIncome = async (req, res) => {
    try {
        const incomes = await IncomeSchmea.find().sort({createdAt : -1});
        res.status(201).json(incomes);
        
    } catch (error) {
            console.log(error); 
            res.status(500).json({ error: "Error Occurred!" });
        
    }
}


exports.deleteIncome = async (req, res) => {
   const  {id} = req.params; 
   let income=await IncomeSchmea.findByIdAndDelete(id);
   if(!income){
       return res.status(404).json({ message:"No Record Found"})
   }
   res.status(200).json({ message:"Record Deleted Successfully" })


   
}