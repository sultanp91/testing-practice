export default function caesarCipher(str, number) {
    let newStr = "";
    let num = number % 26;
    let lowerCaseStr = str.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for(let i = 0; i < lowerCaseStr.length; i++){
        const currentChar = lowerCaseStr[i]
        if(currentChar === " " || alphabet.indexOf(currentChar) === -1){
            newStr += currentChar;
            continue;
        }
        const currentIndex = alphabet.indexOf(currentChar);
        let cipherIndex = currentIndex + num
        if(cipherIndex > 25){
            cipherIndex = cipherIndex - 26
        } 
        else if (cipherIndex < 0){
            cipherIndex = cipherIndex + 26
        }
        if(str[i] === str[i].toUpperCase()){
            newStr += alphabet[cipherIndex].toUpperCase()
        } else {
            newStr += alphabet[cipherIndex]
        }

    }
    return newStr;

}
