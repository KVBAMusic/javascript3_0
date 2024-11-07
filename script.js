function zad1() {
    const tab_zad1 = document.getElementById("tab_zad1");
    const inp_zad1 = document.getElementById("inp_zad1");
    const cap = inp_zad1.value;
    console.log(cap);
    fetch(`https://restcountries.com/v3.1/capital/${cap}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(json => {
        console.log(json[0]);
        tab_zad1.append(addRow(json[0]));
    });
};

function addRow(json) {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.innerText = json.name.common;
    row.append(name);

    const capital = document.createElement("td");
    capital.innerText = json.capital[0];
    row.append(capital);

    const population = document.createElement("td");
    population.innerText = json.population;
    row.append(population);

    const region = document.createElement("td");
    region.innerText = json.region;
    row.append(region);

    const subregion = document.createElement("td");
    subregion.innerText = json.subregion;
    row.append(subregion)

    return row;
}
