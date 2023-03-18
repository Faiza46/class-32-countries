const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {
    const countryField = document.getElementById("countries");
    countries.forEach(country => {
        //console.log(country);

        const div = document.createElement("div");
        div.classList.add("cntr")
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <h5>${country.capital}</h5>
        <button onclick="loadCountryDetails('${country.name.common}')">Show Details</button>`

        countryField.appendChild(div)



    });


}

const loadCountryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))

}

const displayCountryDetails = (country) => {
    console.log(country);
    const detailsDiv = document.getElementById("details");
    detailsDiv.classList.add("details")
    detailsDiv.innerHTML = `
    <h3>${country.name.common}</h3>
    <h5>${country.capital}</h5>
    <p>${country.name.official}</p>
    <p>${country.region}</p>
    <p>${country.subregion}</p>
    <p>${country.area}</p>
    <p>${country.status}</p>
    <img src=${country.flags.png} alt="">

   `



}