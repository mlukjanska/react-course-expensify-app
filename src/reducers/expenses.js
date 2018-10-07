// Expenses reducer

const expensesReducerDefaultState = [];

//const expensesReducer = (state = expensesReducerDefaultState, action) => {
export default (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            //item is kept if result is true, filter returns new array { id } is destructured expense object
            return state.filter( ( { id } ) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ... expense,
                        ... action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};