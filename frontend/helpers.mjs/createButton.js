// Function to create a button
export default function createButton(label, className, id, action) {
    let button = document.createElement('button');
    button.textContent = label;
    button.setAttribute("class", className);
    button.setAttribute("data-id", id);
    button.setAttribute("data-action", action);
    
    // Attach click event listener
    button.addEventListener("click", handleButtonClick);
    return button;
}