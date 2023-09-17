function processData(input) {
    if((input.slice(1)===input.slice(1).toUpperCase() && input.slice(0,1)===input[0].toLowerCase())){
        let formatado =input[0].toUpperCase()+input.slice(1).toLowerCase()
         
         console.log(formatado)
    }else if(input===input.toUpperCase()){
        console.log(input.toLowerCase())
    }else{
        console.log(input) 
    }
    }