import axios from 'axios';

export default class Registration {
    constructor() {

    }

    async createUser( dataObj ) {
        const response = await axios.post('/api/users/add', {
            data: dataObj
        });
        console.log(response);
    }
}