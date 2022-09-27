const countryList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

function renderCountries(names) {
    const markup = names
      .map(({ name:{official}, flags:{svg} }) => {
        return `<li class="country-list_item">
            <p class="country-list_title"><img class="country-list_img" src="${svg}" alt="flag ${official}" width="20" height="auto"/> ${official}</p>
          </li>`;
      })
      .join("");
    countryList.innerHTML = markup;
    countryInfo.innerHTML = "";
  }

function renderCountry({ name:{official}, capital, population, flags:{svg}, languages }) {
    const markup  = 
        `<h2 class="country-info_title"><img class="country-info_img" src="${svg}" alt="flag ${official}" width="30" height="auto"/> ${official}</h2>
        <p><b>Capital</b>: ${capital}</p>
        <p><b>Population</b>: ${population}</p>
        <p><b>Languages</b>: ${Object.values(languages).join(', ')}</p>`;
    countryInfo.innerHTML = markup;
    countryList.innerHTML = "";
  }

  function clear() {
    countryList.innerHTML = "";
    countryInfo.innerHTML = "";
  }

  export {renderCountry, renderCountries, clear};