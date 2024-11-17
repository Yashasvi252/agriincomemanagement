import { dashboard, expenses, transactions, trend } from "./icons";


export const menuItems = [
    {
      id: 1 , 
      title : 'Dashboard',
      icon : dashboard,
      link: '/dashboard'  
    },
    {
        id: 2 , 
        title : 'Income',
        icon : trend,
        link: '/icome'  
      },
      {
        id: 3 , 
        title : 'Expense',
        icon : expenses,
        link: '/expense'  
      },
      {
        id: 4 , 
        title : 'Transactions',
        icon : transactions,
        link: '/transactions'  
      }
    
]