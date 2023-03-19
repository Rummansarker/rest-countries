const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => displayCountries(data))
}

const displayCountries = countries => {
  // console.log(countries)
  const countriesHTML = countries.map(country => showAllCountries(country))
  // console.log(countriesHTML)
  const container = document.getElementById('countries');
  container.innerHTML = countriesHTML.join(' ');
}

const showAllCountries = country => {
  return `
    <div class="country">
      <h3>${country.name.common}</h3>
      <img src = ${country.flags.png}>
    </div>
  `
}

loadCountries();
