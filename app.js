console.log("hi")

function search(){
    console.log("hi")

    let countryName = document.getElementById("searchCountry").value

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res=>res.json())
    .then(data =>{
        document.getElementById("name").innerText = data[0].name.common
        document.getElementById("flag").innerHTML = `<img src="${data[0].flags.png}" alt="flag"  width="350px">`
        document.getElementById("officialName").innerText = data[0].name.official
        document.getElementById("nativeName").innerText = Object.values(data[0].name.nativeName)[0].official    
        document.getElementById("capital").innerText = data[0].capital[0]
        document.getElementById("region").innerText = data[0].region
        document.getElementById("area").innerText =  data[0].area
        document.getElementById("population").innerText =  data[0].population
        document.getElementById("currency").innerText = Object.keys(data[0].currencies)[0]
        document.getElementById("language").innerText = Object.values(data[0].languages).join(", ")
        document.getElementById("timeZone").innerText = data[0].timezones[0]
        document.getElementById("location").innerText = data[0].maps.openStreetMaps

    }

    )

}