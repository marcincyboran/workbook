import { elements, clearContent } from '../views/base';
import * as listOffersView from '../views/list-offerts';
import Offerts from '../models/Offerts';

export default async function () {
    console.log('list offerts controller works');

    // Clear view
    clearContent();
    // Prepare list
    listOffersView.renderWrapper();

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
