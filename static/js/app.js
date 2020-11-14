// import the data form data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build the table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Nest, loop through each object in the data
    // and append a row cand cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // Append a cell to the table row
            let cell = row.append("td");
            // Add the text from the value to the cell
            cell.text(val);
        });

    });
};

// Build the handleClick function
function handClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    // Reset the filteredData to the entire data set
    let filteredData = tableData;

    // Check to see if a date was entered and filter the 
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the 
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: if tno date was entered, then filteredData will 
    // just be the original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);