// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to set the table class to `table table-striped`
table.attr("class", "table table-striped");

// Iterate through dataset and load the table with data
tableData.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
      console.log(key, value);

      // Append a cell to the row for each value
      // in the sightings object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  