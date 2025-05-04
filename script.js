const CORRECT_CODE = "CTF-{AT-HU-LU-RO-RS-SK}";

const userInput = document.querySelector(".user-input");
const checkBtn = document.getElementById("check");
const message = document.querySelector(".message");

checkBtn.addEventListener("click", e => {
    e.preventDefault();
    let input = userInput.value;
    input = input.trim();
    
    if(input == CORRECT_CODE)
        message.innerHTML = "YOU DID IT! ur real hecker hehehe. there's an invitation link to join to our community <a href='https://forms.gle/Jmd1EpkeQdPN1deFA'>click here hehe</a>"
    else 
        message.textContent = "invalid code bruh"

    userInput.value = "";
})