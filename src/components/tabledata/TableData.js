import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Datatable from 'react-data-table-component';

import TopBrands from './TopBrands'; 
import { getAlltableData } from '../actions/api';

const columnas = [
    {
        name: 'PROPIETARIO',
        selector: 'ownerName',
        sortable: true
    },
    {
        name: 'TELEFONO',
        selector: 'phone',
        sortable: true
    },
    {
        name: 'CEDULA',
        selector: 'identification_card',
        sortable: true
    },
    {
        name: 'CORREO',
        selector: 'email',
        sortable: true
    },
    {
        name: 'MARCA',
        selector: 'brandName',
        sortable: true
    },
    {
        name: 'PLACA',
        selector: 'license_plate',
        sortable: true
    }
];

const paginacionOpciones = {
    rowsPerPageText : 'Filas por pagina',
    rangeSeparatorText : 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
}

const TableData = () => {

    const [data, setdata] = useState([]);

    useEffect(() => {

        const dataAllTable = async () => {
            const data = await getAlltableData();
            setdata(data.data.results)
        }

        dataAllTable();   
    }, [])

    return (
        <div className="row">
            <div className="col-md-9">
                <Datatable 
                    columns = {columnas}
                    data = {data}
                    pagination
                    paginationComponentOptions = {paginacionOpciones}
                    title = 'TABLA DE DATOS GENERALES'
                />
                <hr></hr>
            </div>
            <div className="col-md-3 mt-4">
                <TopBrands />
            </div>
        </div>
    );
}
 
export default TableData;