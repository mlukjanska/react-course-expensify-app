export default (expenses, subcategories, categories) => {
        var res = {};
      
        expenses.forEach(function (el) {
          if(el.subcategory) {          
            if (res[el.subcategory]) {
                res[el.subcategory] += +el.amount
            } else {
                res[el.subcategory] = +el.amount
            }
          }
          else {
            if (res[el.category]) {
              res[el.category] += +el.amount
            } else {
                res[el.category] = +el.amount
            }            
          }
        });
      
        var subcategoriesTotals = Object.keys(res).map(function (el) {
          return {subcategoryId: el, amount: res[el]};  
        });

        var subcategoriesTotalsLabels = subcategoriesTotals.map( (subcategoriesTotals) => (
          {
            subcategory: subcategories.find( (subcategory) => subcategory.id === subcategoriesTotals.subcategoryId ) ? 
                         subcategories.find( (subcategory) => subcategory.id === subcategoriesTotals.subcategoryId ).label : 
                         categories.find( (category) => category.id === subcategoriesTotals.subcategoryId ).label,
            amount: subcategoriesTotals.amount
          }
        ));
        return subcategoriesTotalsLabels;
};