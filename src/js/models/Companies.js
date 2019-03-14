import axios from 'axios';

export default class Copmanies {
    constructor(query = null) {
        this.query = query
    }

    async getCompanies() {
        try {
            const result = await axios.get(`/api/companies`);
            this.list = result.data;
        } catch (error) {
            console.log(error)
        }
    }
}