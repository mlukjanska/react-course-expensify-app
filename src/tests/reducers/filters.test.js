import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test ('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        category: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test ('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount');
});

test ('should setup sortBy to date', () => {
    const currentState = {
        text: '',
        category: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined       
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test ('should set text filter', () => {
    const text = 'Test Text';
    const action = { 
        type: 'SET_FILTER', 
        text  
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
 });

 test ('should set category filter', () => {
    const category = 'category_key';
    const action = { 
        type: 'SET_CATEGORY_FILTER', 
        category  
    };
    const state = filtersReducer(undefined, action);
    expect(state.category).toBe(category);
 });

test ('should set start date filter', () => {
    const startDate = moment();
    const action = { 
        type: 'SET_START_DATE', 
        startDate 
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test ('should set end date filter', () => {
    const endDate = moment();
    const action = { 
        type: 'SET_END_DATE', 
        endDate 
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});