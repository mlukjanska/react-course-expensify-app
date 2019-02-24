import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import { startAddCategory } from '../actions/categories';

export class AddCategoryPage extends React.Component {
  onSubmit = (category) => {
    this.props.startAddCategory(category);
    this.props.history.push('/');
  };
  render(){
    return (
      <div>
        <h1>Add Category</h1>
        <CategoryForm 
          onSubmit={this.onSubmit}
        />
      </div>
    )
  };
}

//Abstracting away dispatch functions
const mapDispatchToProps = (dispatch) => ({
  startAddCategory: (category) => dispatch(startAddCategory(category))
});

export default connect(undefined, mapDispatchToProps)(AddCategoryPage);