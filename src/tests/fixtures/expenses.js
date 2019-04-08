import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    category: '1',
    subcategory: '1',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    category: '4',
    subcategory: '3',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    category: '4',
    subcategory: '',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];