import { el, clearContent, elStr } from '../views/base';
import * as listOffersView from '../views/list-offerts';
import Offerts from '../models/Offerts';

export default async function () {
    console.log('list offerts controller works');

    // Clear view
    clearContent();
    // Prepare list
    listOffersView.renderWrapper();
    addEvents();
    // Get offerts
    const offerts = new Offerts('asd');    
    console.log(offerts);
    
    
    // Add loader

    // Get results
    try {
        await offerts.getOfferts();
        console.log(offerts.list)
        // Remove Loader
    
        // Render results
        listOffersView.renderOfferts(offerts.list);

    } catch (error) {
        // console.log(error);
    }

};

function addEvents () {
    document.querySelector(`.${elStr.list}`).addEventListener('click', ev => {
        const target = ev.target;

        // Better use css trick
        // if(target.closest('.list__details-toggle')) {
        //     const details = target.closest('article').querySelector(`.list__bottom-details`);
        //     details.classList.toggle('active');
        //     console.log('a');
        // }
    })
}