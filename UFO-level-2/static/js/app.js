// from data.js
var tableData = data;

// Use D3 to select entities
var tbody = d3.select("tbody");
var table = d3.select("table");
table.attr("class", "table table-striped");

//list of all filtered items to keep track of
var filteredList = {};

/////////// LOAD FILTER LIST ////////////////////////////
function buildFilterList(){
    filteredList = {};

    var dateTimeElement = d3.select("#datetime");
    var dateTimeValue = dateTimeElement.property("value");
    if (dateTimeValue) {
        filteredList["datetime"] = dateTimeValue;
    }
    var cityElement = d3.select("#city");
    var cityValue = cityElement.property("value");
    if (cityValue) {
        filteredList["city"] = cityValue;
    }

    var stateElement = d3.select("#state");
    var stateValue = stateElement.property("value");
    if (stateValue) {
        filteredList["state"] = stateValue;
    }

    var countryElement = d3.select("#country");
    var countryValue = countryElement.property("value");
    if (countryValue) {
        filteredList["country"] = countryValue;
    }

    var shapeElement = d3.select("#shape");
    var shapeValue = shapeElement.property("value");
    if (shapeValue) {
        filteredList["shape"] = shapeValue;
    }
}

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
    var filteredData = tableData;

    //Build filter list to filter on
    buildFilterList();
    console.log(filteredList);

    //for reach filtered item in filteredList, filter data appropriately
    Object.entries(filteredList).forEach(([key, value]) => {
        filteredData = filteredData.filter(sighting => sighting[key] === value);
    });

    //Delete table so we can display the filtered table. 
    DeleteRows();

    filteredData.forEach((sightings) => { 
        loadData(sightings);
    });
});
  