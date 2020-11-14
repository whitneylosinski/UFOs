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
}