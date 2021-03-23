import axios from 'axios';

const URL = 'https://gradiweb-api.herokuapp.com/api';

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

const getCarsByBrand = async () => {
    return await axios.get(`${URL}/carsByBrand`);
}

const getAlltableData = async () => {
    return await axios.get(`${URL}/allData`);
}


export {
    createOwner,
    createBrand,
    getOwners,
    getBrands,
    createCar,
    getCarsByBrand,
    getAlltableData
}