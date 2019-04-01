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

document.addEventListener('click', (e) => {
    // sprawdzić czy można queryselectorall(top-nav a).click bez tego na dole
    if (e.target.getAttribute('data-nav') || (e.target.closest('a') !== null) && (e.target.closest('a').getAttribute('data-nav') !== null)) {
        const href = e.target.getAttribute('href') || e.target.closest('a').getAttribute('href');
        console.log('navigation');
        e.preventDefault();
        navigate(href);
    }
    e.stopPropagation();
});