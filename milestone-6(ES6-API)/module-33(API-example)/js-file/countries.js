const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (countries) =>{
// for (const country of countries) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countires');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')"> Details </button>
        `;
        countriesDiv.appendChild(div)
    //alternative
      /*  const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = `Capital- ${country.capital}`;
        div.appendChild(p);
        countriesDiv.appendChild(div);
        */
    });
};

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => { 
    const countryDiv = document.getElementById('country-details');
countryDiv.innerHTML = `
 <h3> ${country.name} </h3>
 <p> Population: ${country.population} </p>
 <img width="200px" src="${country.flag}">
`
}

