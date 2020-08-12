// from data.js
var tableData = data;

// Variable for table body
var tbody = d3.select('tbody');

// Console.log the ufo data from data.js
console.log(data);

// Functions 
function createTable(ufoData) {
    tbody.html('');
    ufoData.forEach(item => {
        var newRow = tbody.append('tr');
        Object.values(item).forEach(value => {
            var cell = newRow.append('td');
            cell.text(value);
        });
    });
}


createTable(tableData);