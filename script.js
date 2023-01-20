const encryptBtn = document.querySelector("button[type='submit']");
const decryptBtn = document.querySelector("#decrypt-btn");
const resetBtn = document.querySelector("#reset-btn");
const textInput = document.querySelector("#text-input");
const encryptedText = document.querySelector("#encrypted-text");
const copyBtn = document.querySelector("#copy-btn");
let textToCopy = "";
let textToCopyId = "#encrypted-text-span";

encryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  encryptBtn.classList.add("active-button");
  setTimeout(() => {
    encryptBtn.classList.remove("active-button");
  }, 400);
  let text = textInput.value;
  let encrypted = encrypt(text);
  document.querySelector(
    "#encrypted-text"
  ).innerHTML = `<span id="encrypted-text-span">${encrypted}</span>`;
  textToCopyId = "#encrypted-text-span";
});

decryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  decryptBtn.classList.add("active-button");
  setTimeout(() => {
    decryptBtn.classList.remove("active-button");
  }, 400);
  let text = textInput.value;
  let decrypted = decrypt(text);
  document.querySelector(
    "#encrypted-text"
  ).innerHTML = `<span id="encrypted-text-span">${decrypted}</span>`;
  textToCopyId = "#encrypted-text-span";
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetBtn.classList.add("active-button");
  setTimeout(() => {
    resetBtn.classList.remove("active-button");
  }, 400);
  textInput.value = "";
  document.querySelector(
    "#encrypted-text"
  ).innerHTML = `<span id="encrypted-text-span">Graicimesais AIlufatrai Laitaim poberr enterstai mairaivimesllobersai oberpoberrtufatnimesdaid, sobern lobers menterjoberrenters!</span><img src="assets/Muñeco.png" alt="" class="toy-frame"><p class="secret-message">Descubre el mensaje secreto!</p>`;
  textToCopyId = "#encrypted-text-span";
  textInput.value = "Ingrese el texto aquí";
});

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  copyBtn.classList.add("active-button");
  setTimeout(() => {
    copyBtn.classList.remove("active-button");
  }, 700);
  textToCopy = document.querySelector(textToCopyId).innerText;
  copyToClipboard(textToCopy);
  copyBtn.innerText = "Copiado!";
  setTimeout(() => {
    copyBtn.innerText = "Copiar";
  }, 700);
});

function copyToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

// Función para encriptar el texto ingresado.
// Reemplaza las vocales en el texto por otras letras dependiendo si son mayúsculas o minúsculas.
function encrypt(text) {
  let encryptedText = text.replace(/[aeiou]|[AEIOU]/g, (match, index) => {
    if (match === match.toUpperCase()) {
      if (match === "a" || match === "A") return "AI";
      if (match === "e" || match === "E") return "ENTER";
      if (match === "i" || match === "I") return "IMES";
      if (match === "o" || match === "O") return "OBER";
      if (match === "u" || match === "U") return "UFAT";
    } else {
      if (match === "a") return "ai";
      if (match === "e") return "enter";
      if (match === "i") return "imes";
      if (match === "o") return "ober";
      if (match === "u") return "ufat";
    }
  });
  encryptedText = encryptedText.replace(/[á]|[Á]/g, (match) => {
    if (match === match.toUpperCase()) return "ÁI";
    else return "ái";
  });
  encryptedText = encryptedText.replace(/[é]|[É]/g, (match) => {
    if (match === match.toUpperCase()) return "ÉNTER";
    else return "énter";
  });
  encryptedText = encryptedText.replace(/[í]|[Í]/g, (match) => {
    if (match === match.toUpperCase()) return "ÍMES";
    else return "ímes";
  });
  encryptedText = encryptedText.replace(/[ó]|[Ó]/g, (match) => {
    if (match === match.toUpperCase()) return "ÓBER";
    else return "óber";
  });
  encryptedText = encryptedText.replace(/[ú]|[Ú]/g, (match) => {
    if (match === match.toUpperCase()) return "ÚFAT";
    else return "úfat";
  });
  return encryptedText;
}

// Función para desencriptar el texto ingresado.
// Reemplaza las constantes encriptadas por las vocales originales dependiendo si son mayúsculas o minúsculas.
function decrypt(text) {
  let decryptedText = text;
  decryptedText = decryptedText.replace(/AI/g, (match) => {
    return "A";
  });
  decryptedText = decryptedText.replace(/ENTER/g, (match) => {
    return "E";
  });
  decryptedText = decryptedText.replace(/IMES/g, (match) => {
    return "I";
  });
  decryptedText = decryptedText.replace(/OBER/g, (match) => {
    return "O";
  });
  decryptedText = decryptedText.replace(/UFAT/g, (match) => {
    return "U";
  });
  decryptedText = decryptedText.replace(/ai/g, (match) => {
    return "a";
  });
  decryptedText = decryptedText.replace(/enter/g, (match) => {
    return "e";
  });
  decryptedText = decryptedText.replace(/imes/g, (match) => {
    return "i";
  });
  decryptedText = decryptedText.replace(/ober/g, (match) => {
    return "o";
  });
  decryptedText = decryptedText.replace(/ufat/g, (match) => {
    return "u";
  });
  decryptedText = decryptedText.replace(/ÁI/g, (match) => {
    return "Á";
  });
  decryptedText = decryptedText.replace(/ÉNTER/g, (match) => {
    return "É";
  });
  decryptedText = decryptedText.replace(/ÍMES/g, (match) => {
    return "Í";
  });
  decryptedText = decryptedText.replace(/ÓBER/g, (match) => {
    return "Ó";
  });
  decryptedText = decryptedText.replace(/ÚFAT/g, (match) => {
    return "Ú";
  });
  decryptedText = decryptedText.replace(/ái/g, (match) => {
    return "á";
  });
  decryptedText = decryptedText.replace(/énter/g, (match) => {
    return "é";
  });
  decryptedText = decryptedText.replace(/ímes/g, (match) => {
    return "í";
  });
  decryptedText = decryptedText.replace(/óber/g, (match) => {
    return "ó";
  });
  decryptedText = decryptedText.replace(/úfat/g, (match) => {
    return "ú";
  });
  return decryptedText;
}

document.getElementById("text-input").onfocus = function () {
  if (this.value == "Ingrese el texto aquí") {
    this.value = "";
  }
};
document.getElementById("text-input").onblur = function () {
  if (this.value == "") {
    this.value = "Ingrese el texto aquí";
  }
};
