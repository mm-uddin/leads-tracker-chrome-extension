// Leads Array
let myLeads = []


const leadsInput = document.getElementById("leads-input") 
const saveBtn = document.getElementById("save-btn")
const displayLink = document.getElementById("display-link")
const dltBtn = document.getElementById("dlt-btn")

saveBtn.addEventListener("click", function(){
   myLeads.push(leadsInput.value) 
   renderLeads()
   leadsInput.value =""
})

dltBtn.addEventListener("click", function(){
    displayLink.remove()
    
})



function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += `<li> ${myLeads[i]} </li>`

    }

displayLink.innerHTML = listItems
}