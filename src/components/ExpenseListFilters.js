import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import CategoriesSelect from './CategoriesSelect';
import { setTextFilter, setCategoryFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

//Controlled inputs - ie controlled by javascript

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onCategoryChange = (categoryId) => {
        this.props.setCategoryFilter( categoryId );
    }; 
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            this.props.sortByAmount();
        }
    };
    render () {
        return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                    type="text"
                    className="text-input"
                    placeholder="Search expenses"
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} />
                </div>
                <div className="input-group__item">
                    <select 
                        className="select"
                        value={this.props.filters.sortBy} 
                        onChange={this.onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>                
                </div>
            </div>
            <div className="input-group">
                <div className="input-group__item">
                    <CategoriesSelect
                        className="select"
                        categorySelected={this.props.filters.category}
                        categories={this.props.categoriesAll}
                        onCategoryChange={this.onCategoryChange}>
                    </CategoriesSelect>
                </div>   
                <div className="input-group__item">
                    <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />                
                </div>        
            </div>
        </div>         
        );
    }
}

// with return
// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters,
//         sortBy: state.sortBy
//     };
// };

// Explicitly returning the object
const mapStateToProps = (state) => ({
    filters: state.filters,
    sortBy: state.sortBy,
    categoriesAll: state.categories
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);