import React from 'react';
import { connect } from 'react-redux';
import SubCategoryListItem from './SubCategoryListItem'


export class SubCategoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parentkey: props.parentkey ? props.parentkey : '',
        };
    }

    render () {
        return (
            <div className="content-container">
                <div className="list-header">
                    <div>Subcategories</div>
                </div>
                <div className="list-body">
                {
                    this.props.subcategories.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No subcategories</span>
                        </div>
                    ) : ( 
                        this.props.subcategories.map((subcategory) => {
                                return <SubCategoryListItem key={subcategory.id} {...subcategory}/>;
                            })
                        )
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        subcategories: state.subcategories.filter((subcategory) => subcategory.parentkey === props.parentkey)
    };
}

export default connect(mapStateToProps)(SubCategoryList); 