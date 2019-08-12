export default (expenses, subcategories) => {
        var res = {};
      
        expenses.forEach(function (el) {
          if (res[el.subcategory]) {
              res[el.subcategory] += +el.amount
          } else {
              res[el.subcategory] = +el.amount
          }
        });
      
        var subcategoriesTotals = Object.keys(res).map(function (el) {
          return {subcategoryId: el, amount: res[el]};  
        });

        var subcategoriesTotalsLabels = subcategoriesTotals.map( (subcategoriesTotals) => (
          {
            subcategory: subcategories.find( (subcategory) => subcategory.id === subcategoriesTotals.subcategoryId ) ? 
                         subcategories.find( (subcategory) => subcategory.id === subcategoriesTotals.subcategoryId ).label : "No subcategory",
            amount: subcategoriesTotals.amount
          }
        ));
        return subcategoriesTotalsLabels;
};