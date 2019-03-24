import axios from 'axios';

export default class Registration {
    constructor() {

    }

    async createAccount( dataObj, type ) {
        const response = await axios.post(`/api/users/add/${type}`, {
            data: dataObj
        });
        console.log(response);
        return response.data
    }
}