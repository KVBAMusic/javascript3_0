function makeButtons(id) {
    const container = document.getElementById(id);

    const btn_zad1 = document.createElement("button");
    btn_zad1.onclick = () => {
        window.open("z1.html", "_self");
    }
    btn_zad1.innerText = "Zadanie 1";

    const btn_zad2 = document.createElement("button")
    btn_zad2.onclick = () => {
        window.open("z2.html", "_self");
    }
    btn_zad2.innerText = "Zadanie 2";
    const btn_zad3 = document.createElement("button")
    btn_zad3.onclick = () => {
        window.open("z3.html", "_self");
    }
    btn_zad3.innerText = "Zadanie 3";

    container.append(btn_zad1);
    container.append(btn_zad2);
    container.append(btn_zad3);
}