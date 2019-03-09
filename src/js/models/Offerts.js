import axios from 'axios';

export default class Offerts {
    constructor(query = null) {
        this.query = query
    }

    async getOfferts() {
        try {
            const result = await axios.get(`/api/offerts${ (this.query) ? '?' + this.query : '' }`);
            this.list = result.data;
        } catch (error) {
            console.warn(error);
        }
    }
}