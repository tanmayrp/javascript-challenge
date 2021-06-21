// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");


/////////// DATA LOAD ///////////////////////////////////
function DeleteRows() {
    console.log("Deleting Data");
    tbody.html("");
}

function loadData(sightings) {
    console.log("Loading Data");
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}

// Iterate through dataset and load the table with data
data.forEach((sightings) => {
    loadData(sightings);
});

/////////// FILTER ///////////////////////////////////
// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

button.on("click", function() {
    console.log("Button clicked");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    //Delete table so we can display the filtered table. 
    DeleteRows();

    filteredData.forEach((sightings) => {
        loadData(sightings);
    });
});
  