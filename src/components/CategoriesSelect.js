import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


export class CategoriesSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categorySelected: props.categorySelected ? props.categorySelected : ''
        };
    };
    onCategoryChange = (category) => {
        this.setState( { categorySelected: category } );
        this.props.onCategoryChange( category.value );
    };    
    render () {
        return (
            <div>
                {
                    this.props.categories.length === 0 ? (
                        <p>No categories</p>
                    ) : ( 
                        <Select 
                            onChange={this.onCategoryChange}
                            value={this.state.categorySelected}
                            options={this.props.categories}>
                        </Select>
                        )
                }

            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        categories: state.categories,
        categorySelected: state.categories.find((category) => category.value === props.category)
    };
}

export default connect(mapStateToProps)(CategoriesSelect); 