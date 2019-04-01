import * as base from '../views/base';
import * as companyView from '../views/company';
import Company from '../models/Company';
import state from '../models/state';

export default async function (id = 1) {
    base.clearContent();
    base.showHeader();
    base.renderLoader();

    console.info(state);
    const company = new Company(state.companyId || id);
    try {
        await company.getCompany();
        base.removeLoader();
        companyView.renderCompany(company.data);
    } catch (error) {
        console.log(error);
    }
}