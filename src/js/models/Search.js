import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }

    getOffers = async () => {
        this.offers = await axios.get('/api/offers');
    }
}