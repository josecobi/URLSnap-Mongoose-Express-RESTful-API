import { getListOfLinks, getListOfQrcodes, getListOfUsers } from "./helpers.mjs/getList";
const API_KEY = "example"
// LOGIC FOR THE GET LINKS FUNCTION
// Variables 
const getLinksBtn = document.querySelector(".getLinksBtn");
const getQrcodesBtn = document.querySelector(".getQrcodesBtn");
const getUsersBtn = document.querySelector(".getUsersBtn");
const listOfDataItems = document.querySelector(".list-of-links");
const tableBody = document.querySelector('.table-body');
const originalLink = document.querySelector('.original-link');


// Call function to get list of links/users/qrcodes
getLinksBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getListOfLinks();
});


// Call function to get list of users <<<<<<<<<<<<<<<<<TO-DO
getUsersBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getListOfQrcodes();
});

// Call function to get list of qrcodes<<<<<<<<<<<<<<<TO-DO
getQrcodesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getListOfUsers();
});
