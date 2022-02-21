const containerErrors = document.querySelector(".container-error");


function validateMessage () {
    // Borrar errores previos
    let previousErrors = containerErrors.querySelectorAll(".error");
    for (let err of previousErrors) {
        containerErrors.removeChild(err);
    }
    var message = inputMessage.value;
    let validLetters = "abcdefghijklmnñopqrstuvwxyz ";
    let messageError = document.createDocumentFragment();
    for (let lyrics of message) {
        if (!validLetters.includes(lyrics)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `The letter ${lyrics} is not valid`;
            messageError.appendChild(p);
        }
    }
    containerErrors.appendChild(messageError);
    if (containerErrors.children.length === 0) {
        return true;
    }
    return false;
}
