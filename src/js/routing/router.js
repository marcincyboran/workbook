import homeTemplate from './routes/home';
import testTemplate from './routes/test';

const routes = {
    '/': homeTemplate,
    '/test': testTemplate,
};

const contentDiv = document.getElementById('js-content');
contentDiv.innerHTML = routes[window.location.pathname] || `404`;

const navigate = (pathName) => {
    window.history.pushState({},
        pathName,
        window.location.origin + pathName
    );
    contentDiv.innerHTML = routes[pathName] || `404`;
}

window.onpopstate = () => {
    // contentDiv.innerHTML = routes[window.location.pathname] || `404`;
}

document.addEventListener('click', (event) => {
    const target = event.target;
    const isAnchor = target.closest('a');
    
    if (isAnchor && isAnchor.attributes.href.value.indexOf('/') === 0) {
        event.preventDefault();
        navigate(isAnchor.attributes.href.value);
    }
    
});

// zamiast ustawiać tutaj innerHTML przekazać centrali nowy adres i tam napisać logike 