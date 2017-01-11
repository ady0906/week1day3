var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// function calculateSalesTax(salesData, taxRates) {
//   // Implement your code here
// }
//
// var results = salesTaxReport(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/

function salesTaxReport(companySalesData, salesTaxRates) {

  function calculateSalesTax(salesData, taxRates) {
    var workObj = new Object();
    for (var company of companySalesData) {
      var final = 0;
      for (var i = 0; i < company.sales.length; i++) {
        final += (company.sales[i] * salesTaxRates[company.province]);
      }
      if (!workObj.hasOwnProperty(company.name)) {
        workObj[company.name] = final;
      }
      else {
        workObj[company.name] += final;
      }
    }
    return workObj;
  }

  function calculateSales(companySalesData) {
    var salesObj = new Object();
    for (var company of companySalesData) {
      var final = 0;
      for (var i = 0; i < company.sales.length; i++) {
        final += (company.sales[i]);
      }
      if (!salesObj.hasOwnProperty(company.name)) {
        salesObj[company.name] = final;
      }
      else {
        salesObj[company.name] += final;
      }
    }
    return salesObj;
  }

  var salesObject = calculateSales(companySalesData);
  var taxObject = calculateSalesTax(companySalesData, salesTaxRates);

  var companies = {};
  for (var h = 0; h < companySalesData.length; h++) {
    if (!companies.hasOwnProperty(companySalesData[h]).name) {
      companies[companySalesData[h].name] = {totalSales: salesObject[companySalesData[h].name], totalTaxes: taxObject[companySalesData[h].name]};
    }
  }
  return companies;
}

console.log(salesTaxReport(companySalesData, salesTaxRates));
