// SubCategories reducer

const subCategoriesReducerDefaultState = [];

export default (state = subCategoriesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_SUBCATEGORY':
            return [
                ...state,
                action.subcategory
            ]                   
            case 'SET_SUBCATEGORIES':
                return action.subcategories;
            default:
                return state;
    }
};