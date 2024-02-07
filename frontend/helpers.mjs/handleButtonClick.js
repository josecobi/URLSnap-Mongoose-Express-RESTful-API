import {API_KEY} from '../index.js.js';

//function to handle button clicks
export default async function handleButtonClick(event) {
    const id = event.target.getAttribute("data-id");
    const action = event.target.getAttribute("data-action");

    //perform action based on button clicked (update or delete)
    if (action === 'update') {
        try {
            //send HTTP request to update link
            const apiKey = API_KEY;


            const response = await fetch(`http://127.0.0.1:3000/api/manipulateLink/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-api-key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to update link with ID ${id}`);
            }

            const body = await response.json();
            console.log(body);
            //if I have time, add feedback for the user in the UI
            console.log(`Link with ID ${id} updated successfully`);
            alert(`Link with ID ${id} updated successfully. Click on the button 'My Links' to see the updated list of links`);
        } catch (error) {
            console.error(error);
            //handle error
            alert(`Failed to update link with ID ${id}`);
        }
    } else if (action === 'delete') {
        //handle delete logic 
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/manipulateLink/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-api-key': API_KEY
                }
            });
        
            //check the status code of the response
            switch (response.status) {
                case 204:
                    console.log(`Link with ID ${id} deleted successfully`);
                    alert(`Link with ID ${id} deleted successfully. Click on the button 'My Links' to see the updated list of links`);
                    break;
                case 404:
                    throw new Error('Link not found');
                default:
                    throw new Error(`Failed to delete link with ID ${id}`);
            }
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    }
}