import * as base from '../views/base';
import * as listView from '../views/list';
import Companies from '../models/Companies';
import { navigate } from '../routing/router';
import state from '../models/state';

export default async function () {

    base.clearContent();
    base.showHeader();

    const companies = new Companies();

    listView.renderWrapper();    

    try {

        base.renderLoader();

        await companies.getCompanies();

        state.companies = companies.list;

        base.removeLoader();

        listView.renderCompanies(companies.list);
        
        addEvents();

        console.log(state);

    } catch (error) {
        console.log(error);
    }
};

function addEvents () {
    document.querySelector(`.${base.elStr.list}`).addEventListener('click', ev => {
        const target = ev.target;

        if(target.classList.contains(base.elStr.listCompanyLink)) {
            ev.preventDefault()
            navigate(`/company:${target.getAttribute('href').replace('#','')}`);
        }
    })
}