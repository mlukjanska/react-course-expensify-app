import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import '../locales/eu.js';
import selectExpenses from '../selectors/expenses';
import selectExpensesBySubcategoryTotal from '../selectors/charts/expenses-by-subcategory-total';
import selectExpensesByCategoryTotal from '../selectors/charts/expenses-by-category-total';
import selectExpensesByDaysTotal from '../selectors/charts/expenses-by-days-total';
import { VictoryBar, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';

export const ExpensesBarChart = (props) => {
    numeral.locale('eu');

    const formattedExpensesBySubcategoriesTotal = props.expensesBySubcategoryTotal.map( (expensesBySubcategoryTotal) => 
        ({ subcategory: expensesBySubcategoryTotal.subcategory, amount: expensesBySubcategoryTotal.amount / 100 })
    );
    
    const formattedExpensesByCategoriesTotal = props.expensesByCategoryTotal.map( (expensesByCategoryTotal) => 
        ({ category: expensesByCategoryTotal.category, amount: expensesByCategoryTotal.amount / 100 })
    );

    const formattedExpensesByDaysTotal = props.expensesByDaysTotal.map( (expensesByDaysTotal) => 
        ({ day: expensesByDaysTotal.day, amount: expensesByDaysTotal.amount / 100 })
    );

    const barChartStyle = {                              
        data: { fill: "#1c88bf", opacity: 0.9 },
    };

    const chartLabelStyle = {
        textAnchor: "start",
        fontSize: "20px"
    };
        
    return (

        <div className="chart-container">
            <div className="chart-item">    
                { 
                    <VictoryChart
                        domainPadding={30}
                        width={800}
                    >
                    <VictoryLabel 
                        x={40} 
                        y={10} 
                        style={chartLabelStyle}
                        text="Expenses by day"
                    />
                    <VictoryAxis
                        tickLabelComponent={<VictoryLabel angle={-90} dx={-2} dy={-5} textAnchor="end"/>}
                    />                               
                    <VictoryBar
                        style={barChartStyle}
                        data={formattedExpensesByDaysTotal}
                        labels={(formattedExpensesByDaysTotal) => `€${formattedExpensesByDaysTotal.amount}`}
                        labelComponent={<VictoryLabel angle={-45} dx={10}/>}
                        // data accessor for x values
                        x="day"
                        // data accessor for y values
                        y="amount"
                        sortKey="x"
                        sortOrder="descending"
                        />
                    </VictoryChart>
                }        
            </div>
            <div className="chart-item">
                { 
                    <VictoryChart
                        domainPadding={30}
                        width={800}
                    >
                        <VictoryLabel 
                            x={40} 
                            y={10} 
                            style={chartLabelStyle}
                            text="Expenses by categories"
                        />
                        <VictoryAxis
                            tickLabelComponent={<VictoryLabel angle={-45} dx={-2} dy={-5} textAnchor="end"/>}
                        />                         
                        <VictoryBar
                            style={barChartStyle}
                            data={formattedExpensesByCategoriesTotal}
                            labels={(formattedExpensesTotal) => `€${formattedExpensesTotal.amount}`}
                            labelComponent={<VictoryLabel angle={-45} dx={10}/>}
                            // data accessor for x values
                            x="category"
                            // data accessor for y values
                            y="amount"
                            sortKey="y"
                            sortOrder="descending"
                        />
                    </VictoryChart>
                }
            </div>
            <div className="chart-item">    
                { 
                    <VictoryChart
                        domainPadding={30}
                        width={800}
                        height={500}
                        padding={{ left: 50, top: 100, bottom: 100 }}
                    >
                    <VictoryLabel 
                        x={40} 
                        y={10} 
                        style={chartLabelStyle}
                        text="Expenses by subcategories"
                    />
                    <VictoryAxis
                        tickLabelComponent={<VictoryLabel angle={-90} dx={-2} dy={-5} textAnchor="end" />}
                    />                                             
                    <VictoryBar
                        style={barChartStyle}
                        data={formattedExpensesBySubcategoriesTotal}
                        labels={(formattedExpensesBySubcategoriesTotal) => `€${formattedExpensesBySubcategoriesTotal.amount}`}
                        labelComponent={<VictoryLabel angle={-45} dx={10}/>}
                        // data accessor for x values
                        x="subcategory"
                        // data accessor for y values
                        y="amount"
                        sortKey="y"
                        sortOrder="descending"
                        />
                    </VictoryChart>
                }        
            </div>            
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesByCategoryTotal: selectExpensesByCategoryTotal(visibleExpenses, state.categories),
        expensesBySubcategoryTotal: selectExpensesBySubcategoryTotal(visibleExpenses, state.subcategories, state.categories),
        expensesByDaysTotal: selectExpensesByDaysTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesBarChart); 