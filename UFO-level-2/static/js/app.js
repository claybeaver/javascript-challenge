// from data.js
var tableData = data;

// Variable for table body
var tbody = d3.select('tbody');

// Console.log the ufo data from data.js
console.log(data);

// Create table function
function createTable(ufoData) {
    tbody.html('');
    ufoData.forEach(sighting => {
        var newRow = tbody.append('tr');
        Object.values(sighting).forEach(value => {
            var cell = newRow.append('td');
            cell.text(value);
        });
    });
}

createTable(tableData);

// variables
var button = d3.select('#filter-btn')
var input = d3.select('#search-criteria')

// Create search / filter function that will search 5 columns
function searchFilter() {
    d3.event.preventDefault();
    console.log('You clicked the "Filter Table" button!');
    var searchInput = d3.select('#search-criteria').property('value');
    var filterTable = tableData.filter(item => {
        return (
            item.datetime === searchInput ||
            item.city === searchInput ||
            item.state === searchInput ||
            item.country === searchInput ||
            item.shape === searchInput
        )

    });
    createTable(filterTable)
}

function handleKeypress() {
    if (d3.event.keyCode === 13) {
        d3.event.preventDefault();
        console.log(d3.event)
        searchFilter()
    }
}

// Event for click and keypress enter
d3.select('body').on('keypress', handleKeypress)
button.on('click', searchFilter)