import moment from 'moment';
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter, setCategoryFilter } from '../../actions/filters';

test ('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test ('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test ('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test ('should generate sort by date action object', () => {
    // const action = sortByDate();
    // expect(action).toEqual({
    //     type: 'SORT_BY_DATE',
    // });
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test ('should generate set text filter action object with no text value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_FILTER',
        text: ''
    });
});

test ('should generate set text filter action object with text value', () => {
    const text = 'input text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_FILTER',
        text
    });
});

test ('should generate set category filter action object with no category value', () => {
    const action = setCategoryFilter();
    expect(action).toEqual({
        type: 'SET_CATEGORY_FILTER',
        category: ''
    });
});

test ('should generate set category filter action object with category value', () => {
    const category = 'category_key';
    const action = setCategoryFilter(category);
    expect(action).toEqual({
        type: 'SET_CATEGORY_FILTER',
        category
    });
});