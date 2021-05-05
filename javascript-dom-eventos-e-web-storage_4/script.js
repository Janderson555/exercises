function colorPara(){
    let list = document.querySelectorAll(".paragrafo");
    let pr = document.querySelectorAll(".paragrafo");
    if(pr.style.color == "red") {
        for (let index = 0; index < list.length; index++) {
            list[index].style.fontSize = "20px";

        for (let index = 0; index < list.length; index++)
            list[index].style.fontSize = "30px";       
        }
    }
    for(let indexC = 0; indexC <pr.length; indexC++) {
            pr[indexC].style.color = "red";
    }
    
}