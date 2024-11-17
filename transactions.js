// create a route  for transction api 
// import express from 'express';       

const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add_income' , addIncome)
router.get('/get_income' , getIncome)
router.delete('/delete_income/:id' ,deleteIncome)
        .post('/add_expense' , addExpense)
        .get('/get_expense', getExpense)
        .delete('/delete_expense/:id' , deleteExpense);

module.exports = router ; 