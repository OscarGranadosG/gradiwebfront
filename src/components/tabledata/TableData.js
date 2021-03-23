import React, { useEffect, useState } from 'react';

import TopBrands from './TopBrands';
import SearchData from './SearchData';
import { getAlltableData } from '../actions/api';

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
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <SearchData 
                        data={data}
                    />
                </div>
                <div className="col-md-4">
                    <TopBrands />
                </div>
            </div>
        </div>  
        

    );
}
 
export default TableData;