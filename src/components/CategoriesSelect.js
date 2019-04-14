import React from 'react';
import Select from 'react-select';

export default class CategoriesSelect extends React.Component {
    onCategoryChange = (category) => {
        this.props.onCategoryChange( category ? category.id : '' );
    };         
    render () {
        return (
            <div>
                {
                    this.props.categories.length === 0 ? (
                        <p>No categories</p>
                    ) : ( 
                        <Select
                            className="react-select"
                            placeholder="Select category..."
                            isClearable={true}
                            onChange={this.onCategoryChange}
                            value={ this.props.categorySelected ? this.props.categories.find((category) => category.id === this.props.categorySelected) : '' }
                            options={this.props.categories}>
                        </Select>
                        )
                }

            </div>
        )
    }
}