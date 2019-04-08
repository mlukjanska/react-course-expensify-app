import React from 'react';

const SubCategoryListItem = ({label}) => {
    return (
            <div className="list-item">
              <h3 className="list-item__title">{label}</h3>
            </div>    
      )
};

export default SubCategoryListItem;