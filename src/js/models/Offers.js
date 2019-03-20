import axios from 'axios';

export default class Offers {
    constructor(query = null) {
        this.query = query
    }

    async getOffers() {
        try {
            const result = await axios.get(`/api/offers`);
            this.list = result.data.offers;
            this.aside = result.data.aside;
            console.log(result);
        } catch (error) {
            console.warn(error);
        }
    }
}