import axios from 'axios';

export default class Company {
    constructor(id) {
        this.id = id;
    }

    async getCompany() {
        try {
            const response = await axios(`/api/companies/${this.id}`);
            this.data = response.data;
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}