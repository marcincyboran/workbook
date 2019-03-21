import axios from 'axios';

export default class Offer {
    constructor(id) {
        this.id = id;
    }

    async getOffer() {
        try {
            const response = await axios(`/api/offers/${this.id}`);
            this.data = response.data;
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
}