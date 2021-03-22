import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { createOwner } from '../actions/api';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NewOwner = () => {

    const [owner, setowner] = useState({
        'name': '',
        'identification_card': '',
        'email': '',
        'phone': ''
    });

    const {name, identification_card, email, phone} = owner; 

    const handleChangeData = e => {
        e.preventDefault();
        setowner({
            ...owner,
            [ e.target.name ] : e.target.value
        })
    }

    const  handleSubmit = e => {
        e.preventDefault();

        const saveOwnerForm = async () => {
            try {
                await createOwner({owner});
                Swal.fire({
                    icon: 'success',
                    title: 'Propietario salvado correctamente',
                });

                //reiniciar form
                setowner({
                    name: '',
                    identification_card: '',
                    email: '',
                    phone: ''
                });

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `Algo salio mal! =  ${error}`,
                })   
            }
        }
        saveOwnerForm();
    }

    return (  
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Registrar nuevo propietario
                        </h2>  
                        <form
                            onSubmit= {handleSubmit}
                        >
                            <TextField  
                                required
                                label="Ingresa el nombre"
                                fullWidth 
                                margin="normal"
                                name= "name"
                                value={name}
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el numero de identificación"
                                fullWidth 
                                margin="normal"
                                name= "identification_card"
                                value={identification_card}
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el correo electronico"
                                fullWidth 
                                margin="normal"
                                name= "email"
                                value={email}
                                onChange={handleChangeData}
                            />

                            <TextField  
                                required
                                label="Ingresa el telefono de contacto"
                                fullWidth 
                                margin="normal"
                                name= "phone"
                                value={phone}
                                onChange={handleChangeData}
                            />


                            <div className="row mt-4">
                                <div className="col-6">
                                    <Button variant="contained" color="primary" type="submit" fullWidth size="large">
                                        Guardar propietario
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
 
export default NewOwner;