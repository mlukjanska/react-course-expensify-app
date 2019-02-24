import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    startAddCategory,
    addCategory,
    setCategories,
    startSetCategories
} from '../../actions/categories';
import categories from '../fixtures/categories';
import database from '../../firebase/firebase';

const uid = 'testuid';
const defaultAuthState = { auth: {uid} };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const categoryData = {};
    categories.forEach( ({ id, value, label }) => {
        categoryData[id] = { value, label };
    });
    database.ref(`users/${uid}/categories`).set(categoryData).then(() => done());
});


test('should setup add category action object with provided values', () => {
    const action = addCategory(categories[2]);
    expect(action).toEqual({
        type: 'ADD_CATEGORY',
        category: categories[2]
    });
});

test('should add category to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const categoryData = {
        value: 'travel',
        label: 'Travel'
    };

    store.dispatch(startAddCategory(categoryData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_CATEGORY',
            category: {
                id: expect.any(String),
                ...categoryData
            }            
        });

        return database.ref(`users/${uid}/categories/${actions[0].category.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(categoryData);
        done();
    });
});

test('should setup set category action object with data', () => {
    const action = setCategories(categories);
    expect(action).toEqual({
        type: 'SET_CATEGORIES',
        categories
    });
});

test('should fetch the categories from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetCategories()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_CATEGORIES',
            categories
        });
        done();
    });
});

// test('should setup add expense action object with default values', () => {

// });