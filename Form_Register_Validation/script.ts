const icon_eye = document.querySelector<HTMLSelectElement>("i")
const username_input = document.querySelector<HTMLInputElement>('input[type="text"]')
const password_input = document.querySelector<HTMLInputElement>('input[type="password"]')
const email_input = document.querySelector<HTMLInputElement>('input[type="email"]')
const password_confirm = document.querySelector<HTMLInputElement>('#password-confirm')
const Form = document.querySelector<HTMLFormElement>('form')
const password_strong_level = document.querySelector<HTMLSelectElement>('#password-strong-level')
const password_bar_level = document.querySelectorAll<HTMLSelectElement>('span')
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let upper_regex:any = /[a-z]/g
let lower_regex:any = /[A-Z]/g
let num_regex:any = /[0-9]/g
Form?.addEventListener('submit', (event: Event) => {
    if (username_input?.value.length === 0 || password_input?.value.length === 0)
    {
        alert('Please enter your username or password')
    } else
    {
        if (password_input?.value.length < 9)
        {
            alert("Password is shorter than 8")
        } else
        {
            if (password_input?.value !== password_confirm?.value)
            {
                alert("Password not match")
            } else
            {
                if (email_input?.value.match(mailFormat))
                {
                    alert("This form has submitted")
                    return
                } else
                {
                    alert("Email format is valid")
                }
            }
        }
    }
    event.preventDefault()
})
password_input?.addEventListener('input', (event: Event) => {
    if (password_input?.value.length > 0)
    {
        if (password_input?.value.match(lower_regex) && password_input?.value.match(upper_regex) && password_input?.value.match(num_regex))
        {
            password_strong_level?.innerText = "Strong";
            for (let i: number = 0; i < 6; i++)
            {
                password_bar_level[i].style.backgroundColor = "green";
            }
        }
        if (password_input?.value.match(lower_regex) || password_input?.value.match(upper_regex))
        {
            password_strong_level?.innerText = "Weak";
            for (let i: number = 0; i < 2; i++)
            {
                password_bar_level[i].style.backgroundColor = "red";
            }
        }
        if (password_input?.value.match(lower_regex) && password_input?.value.match(upper_regex))
        {
            password_strong_level?.innerText = "Medium";
            for (let i: number = 0; i < 3; i++)
            {
                password_bar_level[i].style.backgroundColor = "yellow";
            }
        }
    } else
    {
        for (let i: number = 0; i < 6; i++)
        {
            password_bar_level[i].style.backgroundColor = "#333";
        }
    }
})
icon_eye?.addEventListener('click', (event:Event) => {
    if (icon_eye.classList.contains('fa-eye')) {
        icon_eye.classList.replace('fa-eye','fa-eye-slash')
        password_input?.setAttribute('type','text')
        password_confirm?.setAttribute('type','text')
    } else {
        icon_eye.classList.replace('fa-eye-slash','fa-eye')
        password_input?.setAttribute('type','password')
        password_confirm?.setAttribute('type','password')
    }
})