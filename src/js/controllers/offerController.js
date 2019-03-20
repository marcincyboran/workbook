import * as base from '../views/base';
import * as offerView from '../views/offer';
import Offer from '../models/Offer';
import state from '../models/state';

export default async function (id = 1) {
    console.log('Offer Ctrl working!');
    
    base.clearContent();
    base.renderLoader();

    const offer = new Offer(state.offerId || id);

    try {
        await offer.getOffer();
        state.offer = offer;

        base.removeLoader();

        offerView.renderOffer(offer.data);

    } catch (error) {
        console.log(error);
    }
};

