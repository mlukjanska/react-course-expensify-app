import moment from 'moment';

export default (expenses) => {
        var res = {};
        expenses.forEach(function (el) {
          var expenseDate = moment(el.createdAt).format('DD/MM');
          if (res[expenseDate]) {
              res[expenseDate] += +el.amount
          } else {
              res[expenseDate] = +el.amount
          }
        });
      
        var daysTotals = Object.keys(res).map(function (el) {
          return {day: el, amount: res[el]};  
        });

        return daysTotals;
};