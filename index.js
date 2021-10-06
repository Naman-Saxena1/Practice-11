const inputPassword = document.querySelector("#password")
const submitBtn = document.querySelector("#submit")
const output = document.querySelector("#output-message")

function onChangeHandler()
{
    if(!(inputPassword.value===""||inputPassword.value===" "))
    {
        submitBtn.disabled=false

        if(inputPassword.value.length>=10)
        {
            inputPassword.style.outlineColor="green"
            output.style.color="green"
            output.innerText="Password strength - Strong"
        }
        else
        {
            inputPassword.style.outlineColor="red"
            output.style.color="red"
            output.innerText="Password should be atleast 10 characters long"
        }
    }
    else
    {
        submitBtn.disabled=true
        inputPassword.style.outlineColor="black"
        output.innerText=""
    }
}

inputPassword.addEventListener("keyup",onChangeHandler)