import axios from 'axios';

export default class Offer {
    constructor(id) {
        this.id = id;
    }

    async getOffer() {
        try {
            const result = await axios(`/api/offers/${this.id}`);
            this.data = result.data;
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }
}