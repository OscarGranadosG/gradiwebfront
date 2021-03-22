import axios from 'axios';

const URL = 'http://gradiweb_api.test/api';

const createOwner = async ({ owner }) => {   
    return await axios.post(`${URL}/owner`, owner);
}

const getOwners = async () => {
    return await axios.get(`${URL}/getOwners`);
} 

const createBrand = async ({ brand }) => {
    return await axios.post(`${URL}/brand`, brand);
}

const getBrands = async () => {
    return await axios.get(`${URL}/getBrands`);
} 

const createCar = async ({ car }) => {
    return await axios.post(`${URL}/car`, car);
}




export {
    createOwner,
    createBrand,
    getOwners,
    getBrands,
    createCar
}