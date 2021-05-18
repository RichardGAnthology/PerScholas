function getData(){
  console.log(event.target)
  console.log(event.target.id)
let borough = event.target.id;
let limit = document.getElementById("input").value
//console.log(limit)
if(limit===""){
  limit = 10;
}
let agency = "NYPD"
let api = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?"
+"agency="
+ agency
+"&borough="
+ borough
+"&$limit="
+ limit

fetch(api) // returns the promise
.then((data) => {  // handles the promise ... and also returns a new promise
  return data.json();
  }).then((formattedData)=>{ // handles the promise ... and can also return a new promise
      console.log(formattedData);
      displayData(formattedData)
  })
.catch((error) => console.log(error))
}

document.getElementById("BROOKLYN").addEventListener("click",getData);
document.getElementById("MANHATTAN").addEventListener("click",getData);
document.getElementById("QUEENS").addEventListener("click",getData);
document.getElementById("STATEN ISLAND").addEventListener("click",getData);
document.getElementById("BRONX").addEventListener("click",getData);

function displayData(data)
{

      document.getElementById("div1").innerHTML = ""
      document.getElementById("div2").innerHTML = ""

      for (let i=0; i<data.length; i++)
      {
      document.getElementById("div1").innerHTML += "<p>"+data[i].descriptor+"</p>"
      document.getElementById("div2").innerHTML += "<details> <summary> POLICE RESPONSE </summary>"+data[i].resolution_description+"</details>"
      };
}