import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { SingleDatePicker } from 'react-dates';
import CategoriesSelect from './CategoriesSelect';
import SubCategoriesSelect from './SubCategoriesSelect';

export class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            categorySelected: props.expense ? props.expense.category : '',
            subcategorySelected: props.expense ? props.expense.subcategory : '',
            subcategories: (props.expense && props.subcategoriesAll) ? props.subcategoriesAll.filter((subcategory) => subcategory.parentkey === props.expense.category) : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
        //or
        //e.persist()
        //this.setState(() => ({ note: e.target.value }));
    };   
    onCategoryChange = (categoryId) => {
        this.setState(() => ( { categorySelected: categoryId } ));
        this.setState(() => ( { subcategorySelected: '' } ));
        const filteredSubcategories = this.props.subcategoriesAll.filter((subcategory) => subcategory.parentkey === categoryId);
        this.setState(() => ( {
            subcategories: filteredSubcategories ? filteredSubcategories : ''            
        } ));
    };   
    onSubCategoryChange = (subcategoryId) => {
        this.setState(() => ( { subcategorySelected: subcategoryId } ));
    };       
    onAmountChange = (e) => {
        const amount = e.target.value;
        //regexe101.com
        if ( !amount || amount.match (/^\d{1,}(\.\d{0,2})?$/) ) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };  
    onSubmit = (e) => {
        //Prevent browser refresh
        e.preventDefault();
        if (!this.state.description || !this.state.amount || !this.state.categorySelected ) {
            this.setState(() => ({ error: 'Please provide description, amount and category!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                category: this.state.categorySelected,
                subcategory: this.state.subcategorySelected,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render () {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Amount"            
                    value={this.state.amount}                      
                    onChange={this.onAmountChange}
                />
                <CategoriesSelect
                    categorySelected={this.state.categorySelected}
                    categories={this.props.categoriesAll}
                    onCategoryChange={this.onCategoryChange}>
                </CategoriesSelect>
                <SubCategoriesSelect
                    categorySelected={this.state.categorySelected}
                    subcategorySelected={this.state.subcategorySelected}
                    subcategories={this.state.subcategories}
                    onSubCategoryChange={this.onSubCategoryChange}>
                </SubCategoriesSelect>
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea
                    className="textarea"
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        categoriesAll: state.categories,
        subcategoriesAll: state.subcategories
    };
}

export default connect(mapStateToProps)(ExpenseForm); 