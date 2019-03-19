import * as base from '../views/base';
import * as listView from '../views/list';
import Companies from '../models/Companies';
import companyController from './companyController';

export default async function () {
    base.clearContent();
    const companies = new Companies();
    listView.renderWrapper();    
    try {
        base.renderLoader();
        await companies.getCompanies();
        base.removeLoader();
        listView.renderCompanies(companies.list);
        addEvents();
    } catch (error) {
        console.log(error);
    }
};

function addEvents () {
    document.querySelector(`.${base.elStr.list}`).addEventListener('click', ev => {
        const target = ev.target;

        if(target.classList.contains(base.elStr.listCompanyLink)) {
            companyController(target.dataset.id)
        }
    })
}