import axios from 'axios';

export default class Company {
    constructor(id) {
        this.id = id;
    }

    async getCompany() {
        try {
            const result = await axios(`/api/companies/${this.id}`);
            this.data = result.data;
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }
}