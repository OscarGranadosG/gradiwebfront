import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { getOwners, getBrands, createCar } from '../actions/api';


const NewCar = () => {

    const [car, setcar] = useState({
        'license_plate': '',
        'type': '',
        'color': '',
        'owner_id': '',
        'brand_id': ''
    });

    const { license_plate, type, color, owner_id, brand_id } = car;

    const [owners, setowners] = useState([]);
    const [brands, setbrands] = useState([]);

    useEffect(() => {
        const getOwnersData = async () => {
            try {
                const dataOwners = await getOwners(); 
                setowners(dataOwners.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        
        const getBrandsData = async () => {
            try {
                const dataBrands = await getBrands(); 
                setbrands(dataBrands.data.results);
            } catch (error) {
                console.log(error);
            }
        } 
        
        getOwnersData();
        getBrandsData();

    }, [])


    const handleChangeData = e => {
        setcar({
            ...car,
            [e.target.name] : e.target.value
        })
    }

    const  handleSubmit = e => {
        e.preventDefault();
        
        const saveCarForm = async () => {
            try {
                await createCar({car});
                Swal.fire({
                    icon: 'success',
                    title: 'Carro salvado correctamente',
                });

                setcar({
                    license_plate: '',
                    type: '',
                    color: '',
                    owner_id: '',
                    brand_id: ''
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Algo salio mal! =  ${error}`,
                }) 
            }
        }
        saveCarForm();
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Registrar nuevo carro
                        </h2>
                        <p>Recuerda que para registrar un nuevo carro, el propietario y la marca ya deben tener registro</p>  
                        <form
                            onSubmit= {handleSubmit}
                        >
                            <TextField  
                                required
                                label="Ingresa la placa del carro"
                                fullWidth 
                                margin="normal"
                                name= "license_plate"
                                value={license_plate}
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el tipo de carro"
                                fullWidth 
                                margin="normal"
                                name= "type"
                                value={type}
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el color del carro"
                                fullWidth 
                                margin="normal"
                                name= "color"
                                value={color}
                                onChange={handleChangeData}
                            />

                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <InputLabel id="demo-simple-select-label">Propitario</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="owner_id"
                                            value={owner_id}
                                            onChange={handleChangeData}
                                            fullWidth
                                        >
                                        {owners.map(owner => (
                                            <MenuItem
                                                key={owner.id}
                                                value={owner.id}
                                            >{owner.name}</MenuItem>
                                        ))}

                                        </Select>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <InputLabel id="demo-simple-select-label">Marca del carro</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="brand_id"
                                            value={brand_id}
                                            onChange={handleChangeData}
                                            fullWidth
                                        >
                                        {brands.map(brand => (
                                            <MenuItem
                                                key={brand.id}
                                                value={brand.id}
                                            >{brand.name}</MenuItem>
                                        ))}
                                        </Select>
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-6">
                                    <Button variant="contained" color="primary" type="submit" fullWidth size="large">
                                        Guardar carro
                                    </Button>
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <Button>
                                        <Link to={'/'}>
                                            Volver al inicio
                                        </Link>
                                    </Button>
                                </div>
                            </div>         
                        </form> 
                    </div>
                </div>
            </div>
        </div>  

    );
}
 
export default NewCar;