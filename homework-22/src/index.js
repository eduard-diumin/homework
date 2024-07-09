import $ from 'jquery';
import { getButton } from './button/button';
import image from './assets/download.png';

getButton();

console.log($);

const picture = document.createElement('img')
picture.setAttribute('src', image)

document.querySelector('body').appendChild(picture)