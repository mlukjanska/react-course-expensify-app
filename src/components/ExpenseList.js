import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : ( 
                    //map takes in an object and returns its modified replacement
                    props.expenses.map((expense) => {
                        //Spread operator pass the required properties
                        //will destructure them directly in props,
                        //so no need for using props.descripton etc
                        //also unique key is required on props
                        return <ExpenseListItem key={expense.id} {...expense}/>;
                        //Alternative without spreading operator
                        //  <ExpenseListItem 
                        //      key={expense.id} 
                        //      description={expense.description}
                        //      amount={expense.amount}
                        //      createdAt={expense.createdAt}
                        // />
                    })
                )
        }

    </div>
);

//HOC - higher order component - example explicit
// const ConnectedExpenseList = connect((state) =>{
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList); 

// export default ConnectedExpenseList;

//commonly is exported inline without extra variable

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList); 