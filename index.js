const $input = document.getElementById('input');
const $encrypcText = document.createElement('p');
const $outPutTexts = document.querySelector('.card__texts');
const $munecoImage = document.querySelector('.card__muneco');
const regEx = /^[a-zñ\s]+$/g;

const cadena = 'como estas';


// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// FUncion encriptadora
function encrypt(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            newString += "ai";
        }else if (string[i] === "e") {
            newString += "enter";
        }else if (string[i] === "i") {
            newString += "imes";
        }else if (string[i] === "o") {
            newString += "ober";
        }else if (string[i] === "u") {
            newString += "ufat";
        }else {
            newString += string[i];
        }
    }
    return newString;
}

// FUncion desencriptadora
function descrypt () {
    return $input.value
}


// FUncion que controla los eventos de los botones

function clicks (left, right, copy) {
    document.addEventListener('click', (e) =>{
        e.preventDefault()
        if(e.target.matches(left) && regEx.test($input.value)){
            $outPutTexts.classList.add('card__justify')
            $munecoImage.style.display = 'none'
            const $copyButton = document.createElement('button');
            $copyButton.textContent = 'Copiar!';
            $copyButton.classList.add('card__button', 'card__button--copy');
            // `<input id="encrypt-text" type="text" value="${encrypt($input.value)}" readonly>`
            $outPutTexts.innerHTML = `<p id="encrypt-text">${encrypt($input.value)}</p>`;
            $outPutTexts.append($copyButton)
        }

        if(e.target.matches(right)){
            document.getElementById('encrypt-text').textContent = descrypt();
        }

        if(e.target.matches(copy)){
            const $inputToCopy = document.getElementById('encrypt-text');
            navigator.clipboard.writeText($inputToCopy.textContent)
            .then(() => {
                console.log("Texto copiado al portapapeles");
            })
            .catch((error) => {
                console.error("Error al copiar texto al portapapeles:", error);
            });
        }

    });
}



    clicks('.card__button--left', '.card__button--right', '.card__button--copy');


