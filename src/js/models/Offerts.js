import axios from 'axios';

export default class Offerts {
    constructor(query = null) {
        this.query = query
    }

    async getOfferts() {
        try {
            // `${ (this.query) ? '?' + this.query : '' }`
            const result = await axios.get(`/api/offerts`);
            this.list = result.data.offers;
            this.aside = result.data.aside;
            console.log(result);
        } catch (error) {
            console.warn(error);
        }
    }
}