import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const NewCar = () => {

    const [car, setcar] = useState({
        'license_plate': '',
        'type': '',
        'color': '',
        'owner_id': '',
        'brand_id': ''
    });


    const handleChangeData = e => {
        setcar({
            ...car,
            [e.target.name] : e.target.value
        })
    }

    const  handleSubmit = e => {
        e.preventDefault();
        console.log("submit");
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
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el tipo de carro"
                                fullWidth 
                                margin="normal"
                                name= "type"
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el color del carro"
                                fullWidth 
                                margin="normal"
                                name= "color"
                                onChange={handleChangeData}
                            />

                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <InputLabel id="demo-simple-select-label">Propitario</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="owner_id"
                                            value={car.owner_id}
                                            onChange={handleChangeData}
                                            fullWidth
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <InputLabel id="demo-simple-select-label">Marca del carro</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            name="brand_id"
                                            value={car.brand_id}
                                            onChange={handleChangeData}
                                            fullWidth
                                        >
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
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