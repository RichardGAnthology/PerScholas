function fetchData() {
  fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=50").then(response => {
    if (!response.ok){
      throw Error("Error")
    }
    return response.json()
  }).then(data => {
    const location = data.map(borough =>{
      return `
      <div id = "Borou">
      <p>Borough: ${borough.borough}</p>
      </div> 
      `
    }).join("")
    document.querySelector('#boro').innerHTML= location;

    const descriptor = data.map(descriptor =>{
      return `
      <div id = "descr">
      <p>Desctriptor: ${descriptor.descriptor}</p>
      </div> 
      `
    }).join("")
    document.querySelector('#desc').innerHTML= descriptor
    const resoDesc = data.map(resoDesc=>{
      return `
      <div id = "resol">
      <p>Resolution Description: ${resoDesc.resolution_description}</p>
      </div> 
      `
    }).join("")
    document.querySelector('#reso').innerHTML= resoDesc
  }).catch(error => {
    console.log(error)
  })
}

fetchData()

/*function manhattanFunction() {
  for(let i=0; i<location; i++ )
    if()
}*/
