const passwordBox=document.getElementById("password");

let btn=document.getElementById("btn");

let img=document.getElementById("imgTag");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCae="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%&()-+~|}{[]><?_=";

const allChars=upperCase+lowerCae+number+symbol;

btn.addEventListener("click", ()=>{
    let password="";
    password+=upperCase[Math.floor(Math.random() * upperCase.length)];
    password+=lowerCae[Math.floor(Math.random() * lowerCae.length)];
    password+=number[Math.floor(Math.random() * number.length)];
    password+=symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password+=allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value=password;
},false);


img.addEventListener("click",()=>{
    passwordBox.select();
    document.execCommand("copy");
})
