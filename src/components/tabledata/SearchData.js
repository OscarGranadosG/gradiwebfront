import React from 'react';

const SearchData = ({data}) => {


    return (  
        <div className="border">
            {data.map(dataonly => (
                <h5>{dataonly.id}</h5>
            ))}
        </div>
    );
}
 
export default SearchData;