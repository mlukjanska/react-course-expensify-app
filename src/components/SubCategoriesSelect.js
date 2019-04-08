import React from 'react';
import Select from 'react-select';


export default class SubCategoriesSelect extends React.Component {
    onSubCategoryChange = (subcategory) => {
        this.props.onSubCategoryChange( subcategory.id );
    };    
    render () {
        return (
            <div>
                {             
                    this.props.subcategories.length === 0 ? (
                        <p>No subcategories</p>
                    ) : ( 
                        <Select
                            className="react-select" 
                            onChange={this.onSubCategoryChange}
                            value={this.props.subcategories.find((subcategory) => subcategory.id === this.props.subcategorySelected)}
                            options={this.props.subcategories}>
                        </Select>
                        )
                }

            </div>
        )
    }
}