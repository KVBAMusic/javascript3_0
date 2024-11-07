async function zad2() {
    const placeholder = document.getElementById("placeholder");
    placeholder.innerText = "Loading..."
    const key = await fetch("env")
        .then(r => r.text())
    const data = await fetch("https://www.ncei.noaa.gov/cdo-web/api/v2/stations", {
        method: "GET",
        headers: {
            token: key,
        }
    })
    .then(r => r.json())
    .then(data => { 
        placeholder.innerText = "";
        
        const tab_zad2 = document.getElementById("tab_zad2");
        for (let result of data.results) {
            tab_zad2.append(addRow(result));
        }
    });
}

function addRow(json) {
    const row = document.createElement("tr");

    const id = document.createElement("td");
    id.innerText = json.id;
    row.append(id);

    const name = document.createElement("td");
    name.innerText = json.name;
    row.append(name);

    const state = document.createElement("td");
    const splitname = json.name.split();
    state.innerText = splitname[splitname.length - 2];
    row.append(state);

    const lat = document.createElement("td");
    lat.innerText = json.latitude;
    row.append(lat);

    const lon = document.createElement("td");
    lon.innerText = json.longitude;
    row.append(lon)

    return row;
}