import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesSelect } from '../../components/CategoriesSelect';
import categories from '../fixtures/categories'

let onCategoryChange, wrapper;

beforeEach(() => {
    onCategoryChange = jest.fn();
});

test('should render CategoriesSelect correctly without selected category', () => {
    const categorySelected = '';
    wrapper = shallow(
        <CategoriesSelect 
            categories={categories}
            categorySelected={categorySelected} 
            onCategoryChange={onCategoryChange} 
        />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render CategoriesSelect correctly with selected category', () => {
    const categorySelected = categories[0].value;
    wrapper = shallow(
        <CategoriesSelect 
            categories={categories}
            categorySelected={categorySelected} 
            onCategoryChange={onCategoryChange} 
        />
    );
    expect(wrapper).toMatchSnapshot();
});