import categoriesReducer from '../../reducers/categories';
import categories from '../fixtures/categories';

test ('should set default state', () => {
    const state = categoriesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test ('should add a category', () => {
    const category = {
        id: '109',
        value: 'New',
        label: 'New'    
    };
    const action = {
        type: 'ADD_CATEGORY',
        category
    }    
    const state = categoriesReducer(categories, action);
    expect(state).toEqual([...categories,category]);    
});

test ('should set categories', () => {
    const action = {
        type: 'SET_CATEGORIES',
        categories: [categories[1]]
    }; 
    const state = categoriesReducer(categories, action);
    expect(state).toEqual([categories[1]]);       
});

// test ('should ', () => {

// });