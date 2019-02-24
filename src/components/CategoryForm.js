import React from 'react';

export default class CategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.category ? props.category.value : '',
            label: props.category ? props.category.label : '',
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
            this.setState(() => ({ error: 'Please provide category label!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                value: this.state.value,
                label: this.state.label
            });
        }
    }       
    render () {
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.onSubmit}>
                    <input 
                      type="text"
                      placeholder="Label"
                      value={this.state.label}                      
                      onChange={this.onLabelChange}
                    />
                    <button>Add Category</button>
                </form>
            </div>
        )
    }
}