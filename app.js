const beratBadan = document.getElementById('beratBadan');
const dosis = document.getElementById('dosis');
const inputJmlhMg = document.getElementById('jumlahMg');
const inputVolumeMl = document.getElementById('volumeMl');
//result
const dosisResult = document.getElementById('dosisResult');
const konsentrasiResult = document.getElementById('konsentrasi');
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    calculate();
})

function calculate() {
    let beratPasien = Number(beratBadan.value);
    let dosisObat = Number(dosis.value);
    let jumlahMg = Number(inputJmlhMg.value);
    let volumeMl = Number(inputVolumeMl.value);

    let dosisDibutuhkan = beratPasien * dosisObat;
    let konsentrasi = jumlahMg / volumeMl;
    let volumeDiberikan = dosisDibutuhkan / konsentrasi;

    dosisResult.innerHTML = `Dosis yang diberikan: ${dosisDibutuhkan}mg`;
    konsentrasiResult.innerHTML = `konsentrasi: ${dosisDibutuhkan} = ${volumeDiberikan.toFixed(1)}ml`;

}