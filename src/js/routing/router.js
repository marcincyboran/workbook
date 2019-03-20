import { el } from '../views/base';

export const navigate = (pathName) => {    
    const matches = pathName.match(/:(.*(?=\/))|:(.*)/gi);
    const firstParam = matches ? matches[0].replace(':','') : undefined ;
    const clearPath = pathName.replace(`:${firstParam}`,'');

    const event = new CustomEvent('locationChanged', {
        detail: {
            param: firstParam,
            path: clearPath
        }
    });
    
    window.history.pushState({param: firstParam}, null, window.location.origin + clearPath);
    window.dispatchEvent(event);
};

el.topNavigation.addEventListener('click', (e) => {
    // sprawdzić czy można queryselectorall(top-nav a).click bez tego na dole
    if (e.target.getAttribute('href')) {
        e.preventDefault();
        navigate(e.target.getAttribute('href'));    
    }
    e.stopPropagation();
});