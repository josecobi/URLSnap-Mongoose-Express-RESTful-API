import clearLinks from "./clearLinks.js";
import createAnchor from "./createanchor.js";
import {listOfDataItems, tableBody, originalLink} from '../index.js';


/** Declare function that adds links to a table.
It takes the array from the result given by the API 
and passes the data from each object into a new row **/
export function addLinksToTable(arr){
    listOfDataItems.style.display = 'block';
 
    // Clear table if there is any link
    clearLinks();
    //We set the counter to 1 because there is one sample row. If there wasn't sample row it would be counter = 0
    let counter = 1;

    arr.forEach((object) => {
        // Number each row        
        let tableRow = document.createElement('tr');
        let rowNumber = document.createElement('th');
        rowNumber.textContent = counter++;
        rowNumber.setAttribute("scope", "row");
        tableRow.appendChild(rowNumber);
        
        // Iterate through the object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        for (const property in object){
            let tableData = document.createElement('td');
            
            if(property === 'createdAt'){
                // Convert date to UTCString https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
                object[property] = new Date(object[property]).toUTCString();
            }
            // Make links clickable and add them to the row
            if(property === 'longUrl'|| property === 'shortUrl'){
                const anchor = createAnchor(object[property], counter);
                tableData.setAttribute("style", "max-width: 40rem;");
                tableData.setAttribute("class", "overflow-auto");
                
                tableData.appendChild(anchor);
                tableRow.appendChild(tableData);
                if(property === 'longUrl'){
                    tableData.setAttribute("class", "d-none d-sm-block overflow-auto");
                    originalLink.setAttribute("class", "d-none d-sm-block overflow-auto")
                }
            }
            // Add the rest of the data to the row
            else{
                tableData.textContent = object[property];
                tableRow.appendChild(tableData);
            }
        }
        //add update and delete buttons to the row
        let updateButton = createButton('Update', 'btn btn-primary', object.id, 'update');
        let deleteButton = createButton('Delete', 'btn btn-danger', object.id, 'delete');
        
        let updateData = document.createElement('td');
        updateData.appendChild(updateButton);
        tableRow.appendChild(updateData);

        let deleteData = document.createElement('td');
        deleteData.appendChild(deleteButton);
        tableRow.appendChild(deleteData);


        //add each row to the table body
        tableBody.appendChild(tableRow);   
    })    
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<< TO-DO: CREATE addUsersToTable and addQrcodesToTable functions !!!!!