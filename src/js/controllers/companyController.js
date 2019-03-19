import * as base from '../views/base';
import Company from '../models/Company';
import * as companyView from '../views/company';

export default async function (id = 1) {
    base.clearContent();
    base.renderLoader();
    const company = new Company(id);
    try {
        await company.getCompany();
        base.removeLoader();
        companyView.renderCompany(company.data);
    } catch (error) {
        console.log(error);
    }
}