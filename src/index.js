import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from "lodash.debounce";
import {fetchCountries} from "./fetchCountries";
import {renderCountry, renderCountries, clear} from "./renderCountry";
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputSearchBox = document.querySelector('#search-box');


inputSearchBox.addEventListener(
    'input',
    debounce((event) => {
        let names = event.target.value.trim();
        if(names === '') return clear();
        
        fetchCountries(names)
        .then((names) => {
            
            if(names.length > 10) return Notify.info("Too many matches found. Please enter a more specific name.");
            if(names.length > 1) return renderCountries(names);

            return renderCountry(names[0]);
        })
        .catch((error) => {
            Notify.failure("Oops, there is no country with that name");
            clear();
        })
        .finally(() => {
            if(names === '') return clear();
        })
    }, DEBOUNCE_DELAY));

