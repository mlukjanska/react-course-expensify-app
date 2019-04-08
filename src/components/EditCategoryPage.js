import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import SubCategoryForm from './SubCategoryForm';
import SubCategoryList from './SubCategoryList';
import { startEditCategory } from '../actions/categories';
import { startAddSubCategory } from '../actions/subcategories';

export class EditCategoryPage extends React.Component {
    onCategorySubmit = (category) => {
        this.props.startEditCategory(this.props.category.id, category);
        this.props.history.push('/categories');
    }; 
    onSubCategorySubmit = (subcategory) => {
        this.props.startAddSubCategory(subcategory);
    };  
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Category</h1>
                    </div>
                </div>
                <div className="content-container">  
                    <CategoryForm 
                        category={this.props.category}
                        onSubmit={this.onCategorySubmit}
                    />
                    <SubCategoryForm
                        parentkey={this.props.category.id}
                        onSubmit={this.onSubCategorySubmit}
                    />
                </div>
                <SubCategoryList
                    parentkey={this.props.category.id}
                />     
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    startEditCategory: (id, category) => dispatch(startEditCategory(id, category)),
    startAddSubCategory: (subcategory) => dispatch(startAddSubCategory(subcategory))
});

const mapStateToProps = (state, props) => ({
    category: state.categories.find((category) => category.id === props.match.params.id),
});

export default connect(mapStateToProps,mapDispatchToProps)(EditCategoryPage);