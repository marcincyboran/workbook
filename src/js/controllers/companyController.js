import * as base from '../views/base';
import Company from '../models/Company';
import * as companyView from '../views/company';

export default async function companyController() {
    
    base.clearContent();

    base.renderLoader();

    const company = new Company(7);

    try {
        await company.getCompany();

        base.removeLoader();

        companyView.renderCompany(company.data);
    } catch (error) {
        console.log(error);
    }
}