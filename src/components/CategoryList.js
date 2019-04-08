import React from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem'

export const CategoryList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div>Categories</div>
        </div>
        <div className="list-body">
        {
            props.categories.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No categories</span>
                </div>
            ) : ( 
                    props.categories.map((category) => {
                        return <CategoryListItem key={category.id} {...category}/>;
                    })
                )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
}

export default connect(mapStateToProps)(CategoryList); 