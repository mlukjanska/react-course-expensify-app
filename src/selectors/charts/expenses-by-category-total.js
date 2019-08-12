export default (expenses, categories) => {
        var res = {};
      
        expenses.forEach(function (el) {
          if (res[el.category]) {
              res[el.category] += +el.amount
          } else {
              res[el.category] = +el.amount
          }
        });
      
        var categoriesTotals = Object.keys(res).map(function (el) {
          return {categoryId: el, amount: res[el]};  
        });

        var categoriesTotalsLabels = categoriesTotals.map( (categoriesTotals) => (
          {
            category: categories.find( (category) => category.id === categoriesTotals.categoryId ).label,
            amount: categoriesTotals.amount
          }
        ));
        return categoriesTotalsLabels;
};