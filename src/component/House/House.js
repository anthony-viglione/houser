import React from 'react';

function House(props){
const {property_name, address, city, state, zipcode} =props.houseInfo
console.log(props)

    return(
        <div>
            <div>Property Name: {property_name}</div>
            <div>Address: {address}</div>
            <div>City: {city}</div>
            <div>State: {state}</div>
            <div>Zip: {zipcode}</div>
            <button>DELETE</button>
        </div>
    )
}

export default House;