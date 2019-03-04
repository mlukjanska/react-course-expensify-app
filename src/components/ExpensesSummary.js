import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import '../locales/eu.js';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total';

// export class ExpensesSummary extends React.Component {

//     render () {
//         return (
//             <div>
//                 <p>Viewing {expenseCount}</p>
//             </div>            
//         );
//     }
// }

        // props.expenses.length === 1 ? (
        //     <p>Viewing {props.expenses.length} expense with total {numeral(props.expensesTotal / 100).format('$ #,##0.00')}</p>
        // ) : ( 
        //     <p>Viewing {props.expenses.length} expenses with total {numeral(props.expensesTotal / 100).format('$ #,##0.00')}</p>
        // )

//destruct props 
export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    numeral.locale('eu');
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100 ).format('$ #,##0.00');

    return (    
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
                </h1>
                <div className="page-header__actions-group">
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                    <div className="page-header__actions">
                        <Link className="button" to="/create-category">Add Category</Link>
                    </div>
                </div>              
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);