let borough = "BROOKLYN"
let limit = 10

let api = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD" 
+ "&borough=" 
+ borough
+"&$limit"
+limit
fetch()

//returns a promise
    .then((data) => data.json())//handles the promise...and also returns a new
    .then((formattedData) => { //handles the new promise ... can also return a new
        displayData(formattedData)
    })





let fetch = new Promise((resolve, reject) => {

})