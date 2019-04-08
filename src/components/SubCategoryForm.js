import React from 'react';

export default class SubCategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parentkey: props.parentkey ? props.parentkey : '',
            value: props.subcategory ? props.subcategory.value : '',
            label: props.subcategory ? props.subcategory.label : '',
            error: ''
        };
    }
    onLabelChange = (e) => {
        const label = e.target.value;
        const value = e.target.value.toLowerCase();
        this.setState(() => ({ label }));
        this.setState(() => ({ value }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.label) {
            this.setState(() => ({ error: 'Please provide subcategory label!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                parentkey: this.state.parentkey,
                value: this.state.value,
                label: this.state.label
            });
            this.setState(() => ({ label: '' }));
        }
    }       
    render () {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Enter subcategory label"
                    value={this.state.label}                      
                    onChange={this.onLabelChange}
                />
                <div>
                    <button className="button">Save Subcategory</button>
                </div>
            </form>
        )
    }
}