import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    category: 'food',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    category: 'house-utilities',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    category: 'bills',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];