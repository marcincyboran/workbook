import * as base from '../views/base';
import * as listView from '../views/list';
import Offerts from '../models/Offerts';

export default async function () {
    console.log('list offerts controller works');

    // Clear view
    base.clearContent();

    // Prepare list
    listView.renderWrapper();
    // addEvents();

    // Create offert class
    const offerts = new Offerts();    
    console.log(offerts);
    
    // Add loader
    base.renderLoader();

    // Get results
    try {
        await offerts.getOfferts();
        
        // Remove Loader
        base.removeLoader();
    
        // Render results
        listView.renderAside(offerts.aside);
        listView.renderOfferts(offerts.list);
        // addEvents();

    } catch (error) {
        console.log(error);
    }

};

function addEvents () {
    document.querySelector(`.${base.elStr.list}`).addEventListener('click', ev => {
        const target = ev.target;

        console.log(target);

        // Better use css trick
        // if(target.closest('.list__details-toggle')) {
        //     const details = target.closest('article').querySelector(`.list__bottom-details`);
        //     details.classList.toggle('active');
        //     console.log('a');
        // }
    });
}