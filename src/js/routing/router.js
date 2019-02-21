import { domElements } from '../base/base';

const navigate = (pathName) => {
    const clearPath = pathName.replace(':','');
    const matches = pathName.match(/:(.*(?=\/))|:(.*)/gi);
    const firstParam = matches ? matches[0].replace(':','') : '' ;

    const event = new CustomEvent('locationChanged', {
        detail: {
            param: firstParam,
            path: clearPath
        }
    });
    
    window.history.pushState({param: firstParam}, null, window.location.origin + clearPath);
    window.dispatchEvent(event);
};

window.onpopstate = (e) => {
    console.log(e)
};

domElements.topNavigation.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget && e.target.getAttribute('href')) {
        e.preventDefault();
        navigate(e.target.getAttribute('href'));    
    }
    e.stopPropagation();
});