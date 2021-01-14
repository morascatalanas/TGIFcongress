let statistics = {
democrats : [],
republicans : [] ,
independents : [],
}


let members = data.results[0].members;


for (let i=0; i<members.length; i++) {
    if (members[i].party == "D") {
        statistics.democrats.push(members[i])
    }    
    if (members[i].party == "R") {
        statistics.republicans.push(members[i])
    }
    if (members[i].party == "ID") {
        statistics.independents.push(members[i])
    } 
}

const suma = (a) => {
let acumulado = 0 
for (i=0; i< a.length; i++){
    acumulado += a[i]
}
return acumulado
}

function count(party){
    let pct = []
    if (document.getElementById("loyalty")){
    pct = party.map(x=> x.votes_with_party_pct ) 

    }
    if (document.getElementById("attendance")){
        pct = party.map(x=> x.missed_votes_pct ) 
        }
        return  pct
    }


/*At a glance table*/
 
function atAglace(){
    let tbody =  document.getElementById("at-glance")
    
    if (document.getElementById("loyalty")){

    tbody.innerHTML= 
                `<tr>
                <td>Democrats</td>
                <td>${statistics.democrats.length}</td>
                <td>${(suma(count(statistics.democrats))/statistics.democrats.length).toFixed(2)}%</td>
                </tr>`
    tbody.innerHTML+= 
                `<tr>
                <td>Republicans</td>
                <td>${statistics.republicans.length}</td>
                <td>${(suma(count(statistics.republicans))/statistics.republicans.length).toFixed(2)}%</td>
                </tr>`
     tbody.innerHTML+= 
                `<tr>
                <td>Independents</td>
                <td>${statistics.independents.length}</td>
                <td>${(suma(count(statistics.independents)).toFixed(2)/statistics.independents.length)||0}%</td>
                </tr>`
     tbody.innerHTML+= 
                `<tr>
                <td>Total</td>
                <td>${members.length}</td>
                <td>${((suma(count(statistics.independents))+suma(count(statistics.republicans))+suma(count(statistics.democrats)))/members.length).toFixed(2)}%</td>
                </tr>`
    }

    if (document.getElementById("attendance")){
        tbody.innerHTML= 
        `<tr>
        <td>Democrats</td>
        <td>${statistics.democrats.length}</td>
        <td>${(suma(count(statistics.democrats))/statistics.democrats.length).toFixed(2)}%</td>
        </tr>`
tbody.innerHTML+= 
        `<tr>
        <td>Republicans</td>
        <td>${statistics.republicans.length}</td>
        <td>${(suma(count(statistics.republicans))/statistics.republicans.length).toFixed(2)}%</td>
        </tr>`
tbody.innerHTML+= 
        `<tr>
        <td>Independents</td>
        <td>${statistics.independents.length}</td>
        <td>${(suma(count(statistics.independents)).toFixed(2)/statistics.independents.length)||0}%</td>
        </tr>`
tbody.innerHTML+= 
        `<tr>
        <td>Total</td>
        <td>${members.length}</td>
        <td>${((suma(count(statistics.independents))+suma(count(statistics.republicans))+suma(count(statistics.democrats)))/members.length).toFixed(2)}%</td>
        </tr>`
 }  
}
 atAglace()

/*ten percent*/
 let tenPercent = Math.floor(members.length*0.10)

 /*Most loyal */



function createTable(){
   
    for (let i = 0; i < tenPercent; i++){
        if (document.getElementById("least")){
            let LeastLoyal = members.sort(function(a,b){
                return a.votes_with_party_pct - b.votes_with_party_pct
             })
     
            let tbody = document.getElementById("least")
            let tr1 = document.createElement("tr")
    
            let td1 = document.createElement('td')
            td1.innerText = LeastLoyal[i].first_name+ ' ' + (LeastLoyal[i].middle_name || '') + ' ' + LeastLoyal[i].last_name
            td1.className = "text-primary"
    
            let td2 = document.createElement('td')
            td2.innerText = LeastLoyal[i].total_votes
            
            let td3 = document.createElement('td')
            td3.innerText = LeastLoyal[i].votes_with_party_pct + "%"
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tbody.appendChild(tr1)
    }
        if (document.getElementById("most")){
            let  MostLoyal =  members.sort(function(a,b){
                return b.votes_with_party_pct - a.votes_with_party_pct
             })
        

            let tbody = document.getElementById("most")
            let tr1 = document.createElement("tr")

            let td1 = document.createElement('td')
            td1.innerText = MostLoyal[i].first_name+ ' ' + (MostLoyal[i].middle_name || '') + ' ' + MostLoyal[i].last_name
            td1.className = "text-primary"

            let td2 = document.createElement('td')
            td2.innerText = MostLoyal[i].total_votes
            
            let td3 = document.createElement('td')
            td3.innerText = MostLoyal[i].votes_with_party_pct + "%"
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tbody.appendChild(tr1)
    }

}
}
createTable()

function createTableAttendance(){
   
    for (let i = 0; i < tenPercent; i++){
        if (document.getElementById("least-att")){
            let LeastLoyal = members.sort(function(a,b){
                return b.missed_votes_pct - a.missed_votes_pct
             })
     
            let tbody = document.getElementById("least-att")
            let tr1 = document.createElement("tr")
    
            let td1 = document.createElement('td')
            td1.innerText = LeastLoyal[i].first_name+ ' ' + (LeastLoyal[i].middle_name || '') + ' ' + LeastLoyal[i].last_name
            td1.className = "text-primary"
    
            let td2 = document.createElement('td')
            td2.innerText = LeastLoyal[i].missed_votes
            
            let td3 = document.createElement('td')
            td3.innerText = LeastLoyal[i].missed_votes_pct + "%"
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tbody.appendChild(tr1)
    }
        if (document.getElementById("most-att")){
            let  MostLoyal =  members.sort(function(a,b){
                return a.missed_votes_pct - b.missed_votes_pct
             })
        

            let tbody = document.getElementById("most-att")
            let tr1 = document.createElement("tr")

            let td1 = document.createElement('td')
            td1.innerText = MostLoyal[i].first_name+ ' ' + (MostLoyal[i].middle_name || '') + ' ' + MostLoyal[i].last_name
            td1.className = "text-primary"

            let td2 = document.createElement('td')
            td2.innerText = MostLoyal[i].missed_votes
            
            let td3 = document.createElement('td')
            td3.innerText = MostLoyal[i].missed_votes_pct + "%"
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            tbody.appendChild(tr1)
    }

}
}
createTableAttendance()


