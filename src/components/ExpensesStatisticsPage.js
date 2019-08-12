import React from 'react';
import ExpensesChartSummary from './ExpensesChartSummary';
import ExpenseChartFilters from './ExpenseChartFilters';
import ExpensesBarChart from './ExpensesBarChart';

const ExpensesStatisticsPage = () => (
    <div>
        <ExpensesChartSummary />
        <ExpenseChartFilters />
        <ExpensesBarChart />
    </div>
);

export default ExpensesStatisticsPage;