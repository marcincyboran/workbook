import * as base from '../views/base';
import * as listView from '../views/list';
import Offers from '../models/Offers';
import { navigate } from '../routing/router';
import state from '../models/state';

export default async function () {
    console.log('list offers controller works');

    // Clear view
    base.clearContent();

    // Prepare list
    listView.renderWrapper();

    // Create offert class
    const offers = new Offers();    
    
    // Add loader
    base.renderLoader();

    // Get results
    try {
        await offers.getOffers();

        state.offers = offers.list;
        console.log(state);

        // Remove Loader
        base.removeLoader();
    
        // Render results
        listView.renderAside(offers.aside);
        listView.renderOffers(offers.list);

        addEvents();

    } catch (error) {
        console.log(error);
    }

};

function addEvents () {
    document.querySelector(`.${base.elStr.list}`).addEventListener('click', ev => {
        const target = ev.target;

        if(target.classList.contains(base.elStr.listOfferLink)) {
            ev.preventDefault()
            navigate(`/offer:${target.getAttribute('href').replace('#','')}`);
        }
    })
}