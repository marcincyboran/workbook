import * as base from '../views/base';
import * as listView from '../views/list';
import Companies from '../models/Companies';

export default async function () {
    console.log('list companies controller works');

    // Clear view
    base.clearContent();

    // Create companies obj
    const companies = new Companies();
    console.log(companies);
    
    // Prepare list
    listView.renderWrapper();
    // addEvents();
    
    try {
        // Add loader
        base.renderLoader();
        
        // Get results
        await companies.getCompanies();
        console.log(companies.list)
        
        // Remove Loader
        base.removeLoader();
    
        // Render results
        listView.renderCompanies(companies.list);

    } catch (error) {
        console.log(error);
    }

};

function addEvents () {
    // document.querySelector(`.${base.elStr.list}`).addEventListener('click', ev => {
    //     const target = ev.target;

        // Better use css trick
        // if(target.closest('.list__details-toggle')) {
        //     const details = target.closest('article').querySelector(`.list__bottom-details`);
        //     details.classList.toggle('active');
        //     console.log('a');
        // }
    // })
}