import { getListOfLinks, getListOfQrcodes, getListOfUsers } from "./helpers.mjs/getList";
// LOGIC FOR THE GET LINKS FUNCTION
// Variables 
const getLinksBtn = document.querySelector(".getLinksBtn");
const getQrcodesBtn = document.querySelector(".getQrcodesBtn");
const getUsersBtn = document.querySelector(".getUsersBtn");
const listOfLinks = document.querySelector(".list-of-links");
const tableBody = document.querySelector('.table-body');
const originalLink = document.querySelector('.original-link');


// Call function to get list of links/users/qrcodes
getLinksBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getListOfLinks();
});


// Call function to get list of users <<<<<<<<<<<<<<<<<TO-DO
getListOfQrcodes();
// Call function to get list of qrcodes<<<<<<<<<<<<<<<TO-DO
getListOfUsers();

