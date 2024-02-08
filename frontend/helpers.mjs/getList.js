import {API_KEY} from '../index.js';
import {addLinksToTable, addUsersToTable, addQrcodesToTable} from "./addDataToTable.js";


// Declare function to list the links
export async function getListOfLinks(){
    try{        
        const headers = {
            'Accept':'application/json',
            'x-api-key': API_KEY
            };
            
            fetch('http://127.0.0.1:3000/api/getLinks',
            {
            method: 'GET',
            
            headers: headers
            })
            .then(function(res) {
                return res.json();
            }).then(function(body) {
            console.log("body: ", body);
                addLinksToTable(body); 
            });    
    }
    catch(error){
        console.log(error);
    }
}


// Declare function to list the users
export async function getListOfUsers(){
    try{
        
        const headers = {
            'Accept':'application/json',
            'x-api-key': API_KEY
            };
            
            fetch('http://127.0.0.1:3000/api/getusers',
            {
            method: 'GET',
            
            headers: headers
            })
            .then(function(res) {
                return res.json();
            }).then(function(body) {
            console.log("body: ", body);
                addUsersToTable(body);
            });    
    }
    catch(error){
        console.log(error);
    }
}

// Declare function to list the qrcodes
export async function getListOfQrcodes(){
    try{
        const headers = {
            'Accept':'application/json',
            'x-api-key': API_KEY
            };
            
            fetch('http://127.0.0.1:3000/api/getqrcodes',
            {
            method: 'GET',
            
            headers: headers
            })
            .then(function(res) {
                return res.json();
            }).then(function(body) {
            console.log("body: ", body);
                addQrcodesToTable(body);
            });    
    }
    catch(error){
        console.log(error);
    }
}

