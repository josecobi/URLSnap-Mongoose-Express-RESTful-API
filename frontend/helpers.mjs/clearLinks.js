// Declare a function to clear the table
export function clearLinks(){
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
}