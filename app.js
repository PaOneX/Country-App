console.log("hi");

function search() {
    console.log("searching...");

    let cityName = document.getElementById("searchCity").value;
    let countryName = document.getElementById("searchCountry").value;

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then((res) => res.json())
        .then((data) => {
            const c = data[0] || {};
            document.getElementById("name").innerText = (c.name && c.name.common) || "-";
                    if (c.flags && c.flags.png) {
                        document.getElementById("flag").innerHTML = `<img crossorigin="anonymous" src="${c.flags.png}" alt="flag" style="max-width:100%;height:auto;">`;
                    } else {
                        document.getElementById("flag").innerHTML = "";
                    }

                    // Coat of arms / symbol: set only if available, otherwise clear
                    if (c.coatOfArms && c.coatOfArms.png) {
                        document.getElementById("symbol").innerHTML = `<img crossorigin="anonymous" src="${c.coatOfArms.png}" alt="symbol" style="max-width:80px;height:auto;">`;
                    } else {
                        document.getElementById("symbol").innerHTML = "";
                    }
            document.getElementById("officialName").innerText = (c.name && c.name.official) || "-";
            document.getElementById("nativeName").innerText = (c.name && c.name.nativeName && Object.values(c.name.nativeName)[0] && Object.values(c.name.nativeName)[0].official) || "-";
            document.getElementById("capital").innerText = (c.capital && c.capital[0]) || "-";
            document.getElementById("region").innerText = c.region || "-";
            document.getElementById("area").innerText = c.area || "-";
            document.getElementById("population").innerText = c.population ? c.population.toLocaleString() : "-";
            document.getElementById("continent").innerText = (c.continents && c.continents[0]) || "-";
            document.getElementById("currency").innerText = c.currencies ? Object.keys(c.currencies)[0] : "-";
            document.getElementById("language").innerText = c.languages ? Object.values(c.languages).join(", ") : "-";
            document.getElementById("timeZone").innerText = (c.timezones && c.timezones[0]) || "-";
            document.getElementById("location").innerText = (c.maps && c.maps.openStreetMaps) || "-";
        })
        .catch((err) => {
            console.error(err);
            alert("Country not found or an error occurred");
        });
}
    
