let members = data.results[0].members
let table = document.getElementById('senate')


function upList(){
  let repeatstates = members.map(x => x.state)
  let states = repeatstates.filter((one, two) => repeatstates.indexOf (one) === two)
  
  states.sort()

  let select = document.getElementById("statelist")

  for (var i=0; i < states.length; i++){
    var option = document.createElement("option")
    option.innerHTML = states[i]
    option.value = states[i]
    select.appendChild(option)
  }
}

upList()


document.querySelectorAll("input[name=party]").forEach(input => input.addEventListener("change",createTable))

document.querySelector("#statelist").addEventListener("change",createTable)

createTable()

function createTable() {

  table.innerHTML = ""

  let thead = document.createElement('thead')
  thead.style.color = "lightcyan"
  thead.className = "bg-info"
  

  let tr = document.createElement('tr')

  let th1 = document.createElement('th')
  th1.innerText = "Full name"
  th1.scope = "col"
  

  let th2 = document.createElement('th')
  th2.innerText = "Party"
  th2.scope = "col"


  let th3 = document.createElement('th')
  th3.innerText = "State"
  th3.scope = "col"


  let th4 = document.createElement('th')
  th4.innerText ="Seniority"
  th4.scope = "col"


  let th5 = document.createElement('th')
  th5.innerText = "% Vote w/ Party"
  th5.scope = "col"


  tr.appendChild(th1)
  tr.appendChild(th2)
  tr.appendChild(th3)
  tr.appendChild(th4)
  tr.appendChild(th5)
 

  thead.appendChild(tr)
  table.appendChild(thead)


  let tbody = document.createElement('tbody')
  let chekedParties = Array.from(document.querySelectorAll("input[name=party]:checked")).map(e => e.value)


  let stateoption = document.querySelector("#statelist").value
  console.log(stateoption)

for (let i = 0; i < members.length; i++){

   if(chekedParties.includes(members[i].party) && (members[i].state == stateoption || stateoption == "all")){
  
  let tr1 = document.createElement("tr")

  let td1 = document.createElement('td')
  td1.innerText = members[i].first_name+ ' ' + (members[i].middle_name || '') + ' ' + members[i].last_name
  td1.className = "text-primary"

  let td2 = document.createElement('td')
  td2.innerText = members[i].party
  
  let td3 = document.createElement('td')
  td3.innerText = members[i].state

  let td4 = document.createElement('td')
  td4.innerText = members[i].seniority

  let td5 = document.createElement('td')
  td5.innerText = members[i].votes_with_party_pct + "%"

  tr1.appendChild(td1)
  tr1.appendChild(td2)
  tr1.appendChild(td3)
  tr1.appendChild(td4)
  tr1.appendChild(td5)
  tbody.appendChild(tr1)
}
}
table.appendChild(tbody)
}