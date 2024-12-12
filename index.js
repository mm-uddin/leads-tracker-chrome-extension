// Leads Array
let myLeads = []


const leadsInput = document.getElementById("leads-input") 
const saveBtn = document.getElementById("save-btn")
const displayLink = document.getElementById("display-link")
const dltBtn = document.getElementById("dlt-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("leadsList"))

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  renderLeads(myLeads)
}



function renderLeads(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++){
        listItems += `<li> <a href = "${leads[i]}" target = "_blank"> ${leads[i]} </a> </li>`

    }

displayLink.innerHTML = listItems
}

saveBtn.addEventListener("click", function(){
   myLeads.push(leadsInput.value) 
   leadsInput.value =""
   localStorage.setItem("leadsList", JSON.stringify(myLeads))

   renderLeads(myLeads)

  
})

saveTabBtn.addEventListener("click", function(){

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
  myLeads.push(tabs[0].url) 
  leadsInput.value =""
  localStorage.setItem("leadsList", JSON.stringify(myLeads))
  renderLeads(myLeads)

  })
   

})


dltBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
    
})


