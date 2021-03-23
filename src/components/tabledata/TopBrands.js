import React, { useEffect, useState } from 'react';

import { getCarsByBrand } from '../actions/api';

const TopBrands = () => {

    const [brandTop, setbrandTop] = useState([]);

    useEffect(() => {
        const getTopData = async () => {
            try {
                const data = await getCarsByBrand(); 
                setbrandTop(data.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        getTopData();
    }, []);

    return (
        <div className="card bg-light" >
            <div className="card-body">
                <h5 className="card-title text-center">TOP MARCAS</h5>
                <h6 className="card-subtitle mb-2 text-muted mt-4 mb-4">Cantidad de vehículos registrados por marca</h6>
                {brandTop.map(brand=>(
                        <button
                            type="submit" 
                            key={brand.id}
                            value={brand.id} 
                            className="list-group-item list-group-item-action list-group-item-warning"
                        >
                            {brand.quantity} - {brand.name}
                        </button>    
                ))}
            </div>
        </div> 
    );
}
 
export default TopBrands;