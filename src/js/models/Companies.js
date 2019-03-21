import axios from 'axios';

export default class Copmanies {
    constructor(query = null) {
        this.query = query
    }

    async getCompanies() {
        try {
            const response = await axios.get(`/api/companies`);
            this.list = response.data;
        } catch (error) {
            console.log(error)
        }
    }
}