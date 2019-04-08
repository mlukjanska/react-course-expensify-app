import React from 'react';
import { Link } from 'react-router-dom';

const CategoryListItem = ({id, label}) => {
    return (
          <Link className="list-item" to={`/edit-category/${id}`}>
            <div>
              <h3 className="list-item__title">{label}</h3>
            </div>    
          </Link>
      )
};

export default CategoryListItem;