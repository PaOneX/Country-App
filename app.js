console.log("hi")

function search(){
    console.log("hi")

    let countryName = document.getElementById("searchCountry").value

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res=>res.json())
    .then(data =>{
        document.getElementById("name").innerText = data[0].name.common
        document.getElementById("flag").innerHTML = `<img src="${data[0].flags.png}" alt="flag"  width="250px">`
        document.getElementById("capital").innerText = "Capital :" +data[0].capital[0]
        document.getElementById("region").innerText = "Region   :"+ data[0].region
        document.getElementById("population").innerText = "Population   :" + data[0].population
        document.getElementById("currency").innerText = "Currency   :" + Object.keys(data[0].currencies)[0]

    }

    )

}