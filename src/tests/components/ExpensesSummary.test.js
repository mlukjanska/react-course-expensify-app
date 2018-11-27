import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

// test('should not render ExpensesSummary with no expenses', () => {
//     const wrapper = shallow(<ExpensesSummary expenses={[]}/>);
//     expect(wrapper).toMatchSnapshot();
// });

// test('should render ExpensesSummary with single expense', () => {
//     const wrapper = shallow(<ExpensesSummary expenses={expenses[0]}/>);
//     expect(wrapper).toMatchSnapshot();
// });

test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23514324} />);
    expect(wrapper).toMatchSnapshot();
});