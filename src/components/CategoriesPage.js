import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import { startAddCategory } from '../actions/categories';

export class CategoriesPage extends React.Component {
  onSubmit = (category) => {
    this.props.startAddCategory(category);
    this.props.history.push('/');
  };
  render(){
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Categories</h1>
          </div>
        </div>
        <div className="content-container">
          <CategoryForm 
            onSubmit={this.onSubmit}
          />          
        </div>
        <CategoryList />
      </div>
    )
  };
}

const mapDispatchToProps = (dispatch) => ({
  startAddCategory: (category) => dispatch(startAddCategory(category))
});

export default connect(undefined, mapDispatchToProps)(CategoriesPage);