const inputMessage = document.querySelector("#message");
const inputResult = document.querySelector("#result");

const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDecrypt = document.querySelector("#btn-decrypt");
const btnCopy = document.querySelector("#btn-copy");
const btnSound = document.querySelector("#btn-sound");

function encrypt (){
    if (!validateMessage()) return;
    var message = inputMessage.value;
    var encryptedmessage = message
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResult.value = encryptedmessage;
}
function decrypt (){
    if (!validateMessage()) return;
    var encryptedmessage = inputMessage.value;
    var message = encryptedmessage
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    inputResult.value = message;
}
function copy () {
    var encryptedmessage = inputResult.value;
    navigator.clipboard.writeText(encryptedmessage);
    inputMessage.value = "";
    inputMessage.focus();
}
function sound() {
    var encryptedmessage = inputResult.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = encryptedmessage;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

btnEncrypt.onclick = encrypt;

btnDecrypt.onclick = decrypt;

btnCopy.onclick = copy;

btnSound.onclick = sound;