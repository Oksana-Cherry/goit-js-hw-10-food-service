
import menuTemplate from './templates/menu.hbs';
import menuElement from './menu.json';
import './changeTheme.js';
import './styles.css';

//console.log(menuElement);

const markup = menuTemplate(menuElement);
//console.log(markup);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);


/*let menu = document.querySelector('.js-menu');
function buildMenu(array) {
    const markup = array.map(post => menuTemplate(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}
buildMenu(menuElement);*/