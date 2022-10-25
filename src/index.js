import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(e => {
    const trimInput = input.value.trim();
    cleanHTML();
    if(trimInput !== ' '){
        fetchCountries(trimInput)
        .then(foundData => {
            if(foundData.length > 10)
            {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            }
        else if(foundData.length === 0)
        {
            Notiflix.Notify.failure("Oops, there is no country with that name");
        }
        else if (foundData.length >= 2 && foundData.length <= 10)
         {
            renderCountryList(foundData);
        }
        else if (foundData.length === 1)
        {
            renderOneCountry(foundData);
        }}); }
    } , DEBOUNCE_DELAY));

    function renderOneCountry(countries){
        const markup = countries.map(country => {
            return `<li> <img src = "${country.flags.svg}" alt = "Flag country ${country.name.official}" width = "30" hight = "20"
            <b>${country.name.official}</b>
            <p><b>Capital:</b> ${country.capital}</p>
            <p><b>Population:</b> ${country.population}</p>
            <p><b>Languages:</b> ${Object.values(country.languages)}</p> </li>`}).join(" ");
            list.innerHTML = markup;}
        
    function renderCountryList(countries){
        const markup = countries.map(country => {
            return `<li> <img src = "${country.flags.svg}" alt = "Flag country ${country.name.official}" width = "30" hight = "20"
            <b>${country.name.official}</b></li>`}).join('');
            list.innerHTML = markup;
    }
 function cleanHTML(){
    list.innerHTML = '';
    info.innerHTML = '';
 }