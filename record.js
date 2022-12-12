// fill in javascript code here

document.querySelector("form").addEventListener("submit",empRec)

function empRec(event){
    event.preventDefault();
    
    let emp_name= document.querySelector("#name").value;
    let emp_id = document.querySelector("#employeeID").value;
    let dep = document.querySelector("#department").value;
    let ex = document.querySelector("#exp").value;
    let em = document.querySelector("#email").value;
    let mob = document.querySelector("#mbl").value
  


    // creating row
    let row = document.createElement("tr")

    // creating col 
    let td1=document.createElement("td")
    td1.innerText=emp_name

    let td2=document.createElement("td")
    td2.innerText= emp_id

    let td3=document.createElement("td")
    td3.innerText=dep

    let td4=document.createElement("td")
    td4.innerText=ex

    
    let td5=document.createElement("td")
    td5.innerText=em


    let td6=document.createElement("td")
    td6.innerText=mob

    let td7=document.createElement("td")
    if(td4.innerText>=5){
        td7.innerText="Senior"
    }
    if(td4.innerText>2 , td4.innerText<5){
        td7.innerText="Junior"

    }
    if(td4.innerText<=1){
        td7.innerText="Fresher"
    }

    let td8=document.createElement("td")
    td8.innerText="Delete"; 
    td8.style.cursor="pointer"
    td8.style.backgroundColor="red"
    td8.addEventListener("click",deleter)

    
    row.append(td1,td2,td3,td4,td5,td6,td7,td8)

    document.querySelector("tbody").append(row)
}
function deleter(event){
    event.target.parentNode.remove()
}
