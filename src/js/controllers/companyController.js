import * as base from '../views/base';
import Company from '../models/Company';
import * as companyView from '../views/company';

export default async function copmanyController() {
    
    base.clearContent();

    base.renderLoader();

    const company = new Company(2);

    try {
        await company.getCompany();
        base.removeLoader();

        // render data
        companyView.renderCompany();
    } catch (error) {
        console.log(error);
    }
}