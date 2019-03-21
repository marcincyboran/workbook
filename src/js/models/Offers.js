import axios from 'axios';

export default class Offers {
    constructor(query = null) {
        this.query = query
    }

    async getOffers() {
        try {
            const response = await axios.get(`/api/offers`);
            this.list = response.data.offers;
            this.aside = response.data.aside;
            console.log(response);
        } catch (error) {
            console.warn(error);
        }
    }
}