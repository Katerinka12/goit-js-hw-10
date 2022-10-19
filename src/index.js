import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
// import { fetchCountries } from './js/fetchCountries.js';
// import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';


const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const info = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;
