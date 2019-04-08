import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import categoriesReducer from '../reducers/categories';
import subCategoriesReducer from '../reducers/subcategories';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore (
        combineReducers({
            expenses: expensesReducer,
            categories: categoriesReducer,
            subcategories: subCategoriesReducer,           
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    
    return store;
};