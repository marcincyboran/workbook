import './assets/assets';
import router from './routing/router';

const contentDiv = document.getElementById('js-content');
contentDiv.innerHTML = router[window.location.pathname]
console.log('test')

let onNavItemClick = (pathName) => {
    window.history.pushState(
      {}, 
      pathName,
      window.location.origin + pathName
    );
    contentDiv.innerHTML = routes[pathName];
}

window.onpopstate = () => {
    try {
        contentDiv.innerHTML = routes[window.location.pathname];
    } catch (ex) {
        console.log(ex);
        return;
    }
}

window.addEventListener("hashchange", funcRef, false);


function funcRef(event) {
console.log(event);
}