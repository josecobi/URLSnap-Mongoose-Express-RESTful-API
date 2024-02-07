  // Declare function to create an anchor element with URL
export default function createAnchor(url, elementId) {
    const anchor = document.createElement('a');
    anchor.textContent = url;
    anchor.setAttribute("href", url);
    anchor.setAttribute("class", "text-decoration-none");
    anchor.setAttribute("id", elementId);
    return anchor;
    
}

