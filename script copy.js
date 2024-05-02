// função geraçao de senha
const inputEl = document.querySelector("#password")
let passwordLength = 16

function generatePassword() {
    const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

    let password = ""

    for(let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber + 1)
    }

    // Escreve no input a senha gerada 
    
    inputEl.value = password

    // console.log(password)
}

// copia a senha do input e guarda na area de transferencia
function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

// atuazia a senha atravez do range
const passwordLengthEl = document.querySelector("#password-length")
      passwordLengthEl.addEventListener("input", function () {
        passwordLength = passwordLengthEl.value
        // console.log(passwordLength)
        generatePassword()
        
      })
      
const copyButtonEl = document.querySelector("#copy")
copyButtonEl.addEventListener("click", copy)

generatePassword()