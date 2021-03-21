import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewBrand = () => {

    const [brand, setbrand] = useState({
        'name': ''
    });

    const handleChangeData = e => {
        setbrand({
            ...brand,
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
                            Registrar nueva marca
                        </h2>  
                        <form
                            onSubmit= {handleSubmit}
                        >
                            <TextField  
                                required
                                label="Ingresa el nombre de la marca"
                                fullWidth 
                                margin="normal"
                                name= "name"
                                onChange={handleChangeData}
                            />

                            <div className="row mt-4">
                                <div className="col-6">
                                    <Button variant="contained" color="primary" type="submit" fullWidth size="large">
                                        Guardar marca
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
 
export default NewBrand;