const palInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

checkBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const inputValue = palInput.value

    if(!inputValue){
        alert("Please input a value")
        return
    }

    if(palindrome(inputValue)){
        result.textContent = `${inputValue} is a palindrome`
    }else{
        result.textContent = `${inputValue} is not a palindrome`
    }
    palInput.value = ""
    
})


const palindrome = (str) => {
    let newStr = ""
    let revStr = ""
    let rex = /[a-zA-Z]|[0-9]/g
  
    for(let i=str.length-1; i>=0; i--){
      if(str[i].match(rex)){
        revStr += str[i]
      }
    }
  
    for(let i=0; i<str.length; i++){
      if(str[i].match(rex)){
        newStr += str[i]
      }
    }
  
    // console.log(newStr.toLowerCase(), revStr.toLowerCase())
    if(newStr.toLowerCase() == revStr.toLowerCase()){
      return true
    }
  
    return false;
  }




